import React from 'react';
import MyImage from "../assests/myImage.png"

const user = {
  name: 'Deepanshu Aggarwal',
  jobTitle: 'Software Engineer',
  email: 'deepanshu.aggarwal@spit.ac.in',
  location: 'Mumbai, Maharashtra',
  bio: 'Passionate software engineer with expertise in React, Node.js, and Problem Solving. Dedicated to building scalable and efficient web applications.',
  skills: ['React', 'Node.js', 'C++', 'Docker', 'Git'],
  experience: [
    {
      company: 'Acme Inc.',
      role: 'Software Engineer',
      period: 'Jan 2023 - Present',
      description: 'Developed and maintained a scalable e-commerce platform using React, Node.js, and AWS. Implemented CI/CD pipelines and containerization with Docker.',
    },
    {
      company: 'XYZ Corp.',
      role: 'Software Engineer Intern',
      period: 'May 2022 - Aug 2022',
      description: 'Worked on a web application for project management using React and Node.js. Contributed to the development and testing of new features.',
    },
  ],
  education: {
    degree: 'Bachelor of Technology in Computer Engineering',
    period: '2021 - 2025',
    institution: 'Bhartiya Vidya Bhavans Sardar Patel Institute Of Technology',
  },
};

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col mt-10 mb-10">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-6xl w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:mr-8">
              <img
                src={MyImage}
                alt="Profile"
                className="rounded-full w-48 h-48 object-cover"
              />
            </div>
            <div className="text-gray-300">
              <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
              <p className="text-gray-400 mb-4">{user.jobTitle}</p>
              <p className="mb-2">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Location:</span> {user.location}
              </p>
              <p>
                <span className="font-semibold">Bio:</span> {user.bio}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">Skills</h2>
            <div className="flex flex-wrap">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 py-1 px-3 rounded-full mr-2 mb-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">Experience</h2>
            {user.experience.map((exp, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                  {exp.role} at {exp.company}
                </h3>
                <p className="text-gray-400">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">Education</h2>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">
                {user.education.degree}
              </h3>
              <p className="text-gray-400">{user.education.period}</p>
              <p className="text-gray-300">{user.education.institution}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;