import React from 'react';
import { FiDownload, FiEye } from 'react-icons/fi';
import { skills } from '../data/skills.jsx';
import resume from '../assets/cv/Resume.pdf';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Resume() {
  const controls = useAnimation();
  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }));
  }, [controls]);

  return (
    <motion.section
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.8, delay: 0.2 }}
      className="px-3 py-1 text-sm text-gray-300"
    >
      <div className='my-12 py-5'>
        <div id="portfolio" className="flex justify-center mt-5 pt-3 mb-4">
          <h2 className="text-center text-primary-light font-bold heading-font mt-2 text-4xl">Skills</h2>
        </div>
        <div className="my-10 container mx-auto flex justify-center item-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center">
            {skills.map((skillGroup) => (
              <div key={skillGroup.name} className="p-4 bg-gradient-to-br from-primary-dark via-gray-800 to-gray-900 text-center rounded-lg shadow-2xl container mx-auto p-4 bg-opacity-25 backdrop-filter backdrop-blur-lg">
                <h3 className="font-bold mb-2">{skillGroup.name}</h3>
                <div className="text-gray-400 flex flex-col items-center">
                  {skillGroup.skills.map((skill, index) => (
                    <motion.p
                      key={skill}
                      custom={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={controls}
                      className="p-2 mb-1"
                    >
                      {skill}
                    </motion.p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <a href={resume} download className="mx-8 rounded-md bg-indigo-600 px-6 py-2.5 flex items-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <FiDownload className="text-lg mr-2" /> Resume
        </a>
        <a href="https://docs.google.com/document/d/1eTtWJtVafi6zOJ9i6z0DhTmLHE8rKlpI" target="_blank" rel="noreferrer" className="mx-8 rounded-md bg-indigo-600 px-6 py-2.5 flex items-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <FiEye className="text-lg mr-2" /> Preview
        </a>
      </div>
    </motion.section >
  )
}
