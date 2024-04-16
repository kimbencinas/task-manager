import React from 'react';

export default function Login() {

    return (
        <div className="main-container flex items-center justify-center h-screen">
            <div className="bg-white bg-opacity-50 rounded-xl p-24 w-6/12">
                <h2 className="font-medium mb-8 text-4xl text-center">Log In</h2>
                <form>
                    <div className="mb-4 p-2">
                        <label htmlFor="user_username" className="text-black block text-lg mb-3 font-medium">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            className="w-full rounded-md drop-shadow-lg p-2"
                        />
                    </div>
                    <div className="mb-4 p-2">
                        <label htmlFor="user_password" className="text-black block text-lg mb-3 font-medium">
                            Password:
                        </label>
                        <input
                            type="text"
                            id="user_password"
                            name="user_password"
                            className="w-full rounded-md drop-shadow-lg p-2"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-xl text-md h-9 w-24 drop-shadow-lg">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}