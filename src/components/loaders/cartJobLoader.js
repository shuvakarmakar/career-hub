import { getApplyCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('/jobinfo.json');
    const products = await loadedProducts.json();

    // if cart data  is in database, you have to use async await
    const storedCart = getApplyCart();
    const savedCart = [];

    console.log(storedCart)
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    // if we need to send two things
    // return [products, savedCart]
    // Another Option
    // return { products, cart :savedCart}

    return savedCart;
}

export default cartProductsLoader;