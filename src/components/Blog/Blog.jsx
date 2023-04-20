import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='card p-10'>
                <p className='text-lg font-bold'>Question 1 : When should you use context API?</p>
                <p className='text-justify mt-4'><span className='font-bold'>Answer : </span>Context API is a tool provided by React that allows us to manage state at a global level and share it between components. Here are some situations where we can use the Context API:
                    <br />

                    i. Sharing data between components: If we have multiple components that need access to the same data, we can use the Context API to share that data without having to pass it down through props.
                    <br />

                    ii. Managing application state: If we have a large application with many different components that need access to the same state, using the Context API can simplify our code and make it easier to manage.
                    <br />

                    iii. Handling user authentication: If we need to manage user authentication across our application, we can use the Context API to store the user's login status and share it between components.

                    <br />
                    iv. Providing a theme: If we have a theme that we want to apply to our entire application, we can use the Context API to all of our components </p>

                <p className='text-lg font-bold mt-5'>Question 2 : What is a custom hook?</p>
                <p className='text-justify mt-4'><span className='font-bold'>Answer : </span>In React, a custom hook is a function that allows you to reuse stateful logic between components.
                Custom hooks work as like useState, useEffect, and useContext to create reusable logic. We can create a custom hook by defining a function that uses one or more of these hooks to manage some state or perform some action. We can then use that custom hook in any component in our application.</p>

                <p className='text-lg font-bold mt-5'>Question 3 : What is useRef?</p>
                <p className='text-justify mt-4'><span className='font-bold'>Answer : </span>useRef() is often used to access the properties and methods of a DOM element, such as its size or position, without triggering a rerender of the component. We can also use useRef to store any other value that needs to persist between renders, such as an interval ID or a previous state value.</p>

                <p className='text-lg font-bold mt-5'>Question 4 : What is useMemo?</p>
                <p className='text-justify mt-4'><span className='font-bold'>Answer : </span>useMemo() is a hook that allows us to memoize expensive computations so that they are only recomputed when their dependencies change. This can help improve the performance of our application by avoiding unnecessary computations.

useMemo takes a function and an array of dependencies as arguments. The function is only re-executed when one of the dependencies changes. If none of the dependencies have changed since the last render, the memoized value from the previous render is returned instead.</p>
                    <br />
            </div>
        </div>
    );
};

export default Blog;