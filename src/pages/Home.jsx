import React from 'react'
import MyImage from "../assests/Image.png"
import { useNavigate } from 'react-router-dom'
import { Typewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
    const navigate = useNavigate()
    const headquarters = {
        name: 'Sardar Patel Institute Of Technology',
        address: "Bhavan's Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058",
        googleMapsLink: 'https://maps.app.goo.gl/abTsYKw21JRs3P939',
        iframeSource: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d942.4095001446797!2d72.8362678!3d19.1235304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan%27s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1713259858636!5m2!1sen!2sin',
        mapSrc: "https://www.google.com/maps/place/Bharatiya+Vidya+Bhavan's+Sardar+Patel+Institute+of+Technology+(SPIT)/@19.1235304,72.8362678,19.13z/data=!4m6!3m5!1s0x3be7c9d90e067ba9:0x16268e5d6bca2e6a!8m2!3d19.1231776!4d72.8361154!16s%2Fg%2F122qyrv_?entry=ttu"
      };

    return (
        <div className="container h-full bg-black flex flex-col mt-28">
            <div className="flex justify-center items-center h-full gap-20 mb-10 ml-24 mr-24">
                <div className="text-center w-3/5 pl-16 pr-16">
                    <div className='text-left'>
                        <div className="text-4xl text-white font-bold  ">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-700">Codystry </span>
                            Plagiarism Checker now Enhanced with 
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-700">
                                <Typewriter
                                    words={[' Plagiarism', ' Advance Algorithms', ' Content Duplication']}
                                    loop
                                    typeSpeed={80}
                                    deleteSpeed={50}  
                                />
                            </span><Cursor cursorStyle='<' /><br /> Detector
                        </div>
                        <div className="text-2xl text-gray-500 mt-5">
                            Codystry checks against internet, paid publications and computer
                            generative content to give you the most comprehensive plagiarism
                            check.
                        </div>
                        <button className="spl-btn mt-10 font-bold" onClick={() => navigate("/check")}>CheckNow</button>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <img src={MyImage} alt="Myimage" className="w-84 h-84" />
                </div>
            </div>
            <div className="min-h-screen flex flex-col mt-10 mb-10">
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-6xl w-full">
          <h2 className="text-2xl font-bold text-gray-300 mb-4">Contact Us</h2>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-row justify-between p-8">
          <div className='flex flex-col'>
          <div className='text-3xl font-bold text-white mb-12 mt-16'>Developer headquarters</div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">{headquarters.name}</h3>
            <p className="text-gray-400 mb-2">{headquarters.address}</p>
            <a
              href={headquarters.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 underline"
            >
              View on Google Maps
            </a>
          </div>
            <div className="mt-4">
              <iframe
                        src={headquarters.iframeSource}
                        width={600}
                        height={350}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
            </div>
          </div>
        </div>
      </main>
    </div>
        </div>
    )
}

export default Home