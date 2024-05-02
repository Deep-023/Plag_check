import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div className='container mx-auto flex flex-col p-5 pt-6'>
                <div className='flex flex-row justify-between ml-36 mr-36 text-[36px] pb-10'>
                    <div className='text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-700 font-bold'>Codystry</div>
                    <div className='text-xl text-white pt-2'>Check your plagiarism easily</div>
                </div>
                <div className='flex flex-row gap-5 text-xl ml-36 mr-36 justify-between mb-10'>
                    <div className=' text-white'>Company
                        <div className='text-[#B7B9BA] text-lg pt-3'>
                            About Us <br />
                            Contact Us <br />
                            Work With Us <br />
                            Affiliated Program <br />
                            News
                        </div>
                    </div>

                    <div className=' text-white'>Features
                        <div className='text-[#B7B9BA] text-lg pt-3'>
                            All Features <br />
                            Plagiarism Check <br />
                            Journal Finder <br />
                            Personal Dictionary
                        </div>
                    </div>

                    <div className=' text-white'>Compare
                        <div className='text-[#B7B9BA] text-lg pt-3'>
                            Trinka Vs. Ginger <br />
                            Trinka Vs. Language Too <br />
                            Trinka Vs. Writefull <br />
                            Whitepaper

                        </div>
                    </div>

                    <div className=' text-white'>Learn More
                        <div className='text-[#B7B9BA] text-lg pt-3'>
                            FAQ <br />
                            Example <br />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-center text-[#B7B9BA]'>
                    Copyright @2024 Created By Deepanshu Aggarwal
                </div>
            </div>
        </div>
    )
}

export default Footer