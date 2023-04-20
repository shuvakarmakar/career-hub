const addToDb = id => {
    let applyCart = getApplyCart();
    // add quantity
    const quantity = applyCart[id];
    if (!quantity){
    applyCart[id] = 1;
    }
    else{
        const newQuantity = quantity + 1;
        applyCart[id] = newQuantity;
    }
    localStorage.setItem('apply-cart', JSON.stringify(applyCart));
}

const getApplyCart = () => {
    let applyCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('apply-cart');
    if (storedCart) {
        applyCart = JSON.parse(storedCart);
    }
    return applyCart;
}

export {
    addToDb,
    getApplyCart
}
