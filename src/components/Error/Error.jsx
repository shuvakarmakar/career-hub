import React from 'react';

const Error = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-6">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">404 Not Found</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            The page you're looking for could not be found.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;