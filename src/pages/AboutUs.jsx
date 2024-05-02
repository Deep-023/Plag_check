import React from 'react';
import ourMission from '../assests/ourMission.jpg';
import ourTeam from '../assests/ourTeam.jpg';

const AboutUs = () => {
    return (
        <div className="container mx-auto p-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-700">About Us</h1>
                <p className="text-lg mt-4">Welcome to Codystry – Your Ultimate Plagiarism Checker!</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mb-20 mt-16">
                <div className="md:w-1/2 md:pr-8">
                    <img src={ourMission} alt="Office" className="rounded-lg shadow-lg object-cover w-[800px] h-[400px]" />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-700">Our Mission</h2>
                    <p className="text-lg mb-4">Empowering Originality, Inspiring Excellence</p>
                    <p className="text-lg">We believe that every idea deserves recognition based on its unique merit. Our mission is to provide cutting-edge tools and services that promote originality, combat content duplication, and uphold academic and professional standards.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 justify-center mb-12">
                <div className="md:w-1/2 md:pr-8 mb-6">
                    <img src={ourTeam} alt="Team" className="rounded-lg shadow-lg object-cover w-[800px] h-[400px]" />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-700">Our Team</h2>
                    <p className="text-lg mb-4">Behind Codystry is a dedicated team of professionals passionate about promoting originality and ethical content practices. From software engineers to content experts, we work tirelessly to innovate and enhance our platform's capabilities.</p>
                </div>
            </div>
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-700">Get Started Today!</h2>
                <p className="text-lg mt-4">Join thousands of users worldwide who trust Codystry for plagiarism detection and content authenticity. Start your journey towards originality and excellence with us today!</p>
            </div>
        </div>
    );
};

export default AboutUs;
