import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold">Welcome to the Job Management App</h1>
            <div className="mt-8 space-x-4">
                <Link to="/login" className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                    Login
                </Link>
                <Link to="/signup" className="px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
                    Signup
                </Link>
            </div>
        </div>
    );
};

export default Home;
