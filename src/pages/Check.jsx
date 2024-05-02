import React, { useState } from 'react';
import difflib from 'difflib';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from '../components/AnimatedProgressProvider';
import { easeQuadInOut } from "d3-ease";

const Check = () => {
    const [files, setFiles] = useState([]);
    const [similarity, setSimilarity] = useState(null);
    const percentage = 64;

    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };

    const handleCheckClick = () => {
        if (files.length < 2) {
            console.log("Please select at least two files to compare.");
            return;
        }
        const reader1 = new FileReader();
        const reader2 = new FileReader();
        reader1.onload = function (e) {
            const content1 = e.target.result;
            reader2.onload = function (e) {
                const content2 = e.target.result;
                // Create a new SequenceMatcher object that compares the two files
                const s = new difflib.SequenceMatcher(null, content1, content2);
                setSimilarity(Math.floor(s.ratio() * 100));
            };
            reader2.readAsText(files[1]);
        };
        reader1.readAsText(files[0]);
    };

    return (
        <div className='flex justify-evenly h-screen bg-black'>
            <div className='flex h-screen flex-col'>
                <div className='text-lg text-gray-500 mt-8 mb-2 ml-2'>Input</div>
                <label className="relative flex bg-gray-900 w-96 h-3/4 border-0 rounded-2xl overflow-hidden cursor-pointer items-center justify-center">
                    <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                        max="2"
                    />
                    {/* Placeholder text */}
                    {files.length === 0 && (
                        <span className="absolute inset-0 flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <div className='text-xl'>
                                Choose File
                            </div>
                        </span>
                    )}
                    <div className='flex flex-col gap-3'>
                        {Array.from(files).map((file, index) => (
                            <div key={index} className='text-white text-lg flex flex-row gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                {file.name}
                            </div>
                        ))}
                    </div>
                </label>
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={handleCheckClick} className="spl-btn mt-10 -translate-y-2/3">Check</button>
            </div>
            <div className='flex h-screen flex-col'>
                <div className='text-lg text-gray-500 mt-8 mb-2 ml-2'>Output</div>
                <div className='relative flex flex-col bg-gray-900 w-96 h-3/4 border-0 rounded-2xl overflow-hidden cursor-pointer items-center'>
                    <div className='p-5 ml-14 mr-14 mt-10'>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={similarity}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        /* This is important to include, because if you're fully managing the
                                  animation yourself, you'll want to disable the CSS animation. */
                                        styles={buildStyles({ pathTransition: "none", pathColor: '#f472b6', textColor: '#3b82f6' })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>
                    <div>
                        {similarity!=null && <p className='text-white'>Similarity: {similarity}%</p>}
                        {similarity===null && <p className='text-white'>No files selected</p>}
                    </div>
                    <div className='flex flex-col items-center p-7 pl-9'>
                        <div className='text-2xl font-bold mb-4 text-white'>Review:</div>
                        <div>
                            {similarity===null && <p className='text-white'>Check files to get review</p>}
                            {similarity!=null && (
                                <>
                                    {similarity < 30 && (
                                        <p className=''>
                                            Low similarity. Further review is not needed. Consider checking for additional sources and comparing content for a more comprehensive analysis.
                                        </p>
                                    )}
                                    {similarity >= 30 && similarity < 70 && (
                                        <p className=''>
                                            Moderate similarity. Review required. Look into the similarities and differences between the content to ensure authenticity and originality. Additional investigation may be necessary.
                                        </p>
                                    )}
                                    {similarity >= 70 && (
                                        <p className=''>
                                            High similarity. Strong review advised. Investigate thoroughly to identify potential plagiarism and ensure content integrity. Compare with original sources and conduct detailed analysis.
                                        </p>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Check;
