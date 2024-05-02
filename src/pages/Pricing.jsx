import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
    const navigate = useNavigate();

    return (
        <div className="container h-full bg-black flex flex-col w-full mt-20">
            <div className="flex justify-center items-center h-full gap-20 mb-10 ml-24 mr-24">
                <div className="text-center pl-16 pr-16 w-4/5">
                    <div className='text-left w-full'>
                        <div className="text-4xl pb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-700 font-bold flex justify-center">
                            Choose Your Plan
                        </div>
                        <div className="flex flex-row mt-10 gap-8">
                            <div className="bg-gray-800 p-8 rounded-lg mb-8 w-96 h-80 animate-mirror crystal-bg">
                                <div className="text-xl text-white font-bold mb-2">
                                    Basic Plan
                                </div>
                                <div className="text-gray-400 mb-4 leading-relaxed">
                                    <ul className="list-disc list-inside">
                                        <li className='mt-8'>Plagiarism Check (1 file)</li>
                                        <li className='mt-3'>Basic Reports</li>
                                        <li className='mt-3'>Limited Support</li>
                                    </ul>
                                </div>
                                <div className="text-2xl text-white font-bold mt-12">
                                    Rs.99 / month
                                </div>
                            </div>
                            <div className="bg-gray-800 p-8 rounded-lg mb-8 w-96 crystal-bg animate-mirror">
                                <div className="text-xl text-white font-bold mb-2">
                                    Pro Plan
                                </div>
                                <div className="text-gray-400 mb-4 leading-relaxed">
                                    <ul className="list-disc list-inside">
                                        <li className='mt-8'>Plagiarism Check (5 files)</li>
                                        <li className='mt-3'>Detailed Reports</li>
                                        <li className='mt-3'>Premium Support</li>
                                    </ul>
                                </div>
                                <div className="text-2xl text-white font-bold mt-12">
                                    Rs.199 / month
                                </div>
                            </div>
                            <div className="bg-gray-800 p-8 rounded-lg mb-8 animate-mirror crystal-bg w-96">
                                <div className="text-xl text-white font-bold mb-2">
                                    Premium Plan
                                </div>
                                <div className="text-gray-400 mb-4 leading-relaxed">
                                    <ul className="list-disc list-inside">
                                        <li className='mt-8'>Unlimited Plagiarism Checks</li>
                                        <li className='mt-3'>Advanced Reports</li>
                                        <li className='mt-3'>Premium Support</li>
                                    </ul>
                                </div>
                                <div className="text-2xl text-white font-bold mt-12">
                                    Rs.299 / month
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                        <button className="spl-btn mt-10 font-bold" onClick={() => navigate("/check")}>
                            Get Started
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
