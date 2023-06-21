import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaGithub } from 'react-icons/fa';

export default function Project({ project, index, currentSlide }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.8, delay: 0.2 }}
            className="py-1 text-sm text-gray-300"
        >
            <div className="flex justify-center my-5 mx-6 pb-4">
                <div className={`flex flex-col lg:flex-row w-full items-center ${index === currentSlide ? 'opacity-100' : 'opacity-50'}`}>
                    <div className="text-center lg:w-1/2">
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <img src={project.image} alt="Project" className="w-full h-full object-cover lg:rounded-l-lg" />
                        </a>
                    </div>
                    <motion.div className="text-center lg:text-lg-start w-full lg:w-1/2 lg:rounded-r-lg lg:shadow-lg p-6 mt-6 lg:mt-0" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-3xl text-ternary-light font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <p className="text-gray-300 mb-4"><span className="text-ternary-light font-bold">Tech:</span> {project.tech}</p>
                        <div className="mb-4">
                            <FaGithub className="inline-block text-2xl text-ternary-light mr-2" />
                            <a href={project.repository} target="_blank" rel="noreferrer" className="text-primary-light hover:text-ternary-light transition-colors duration-200">Check GitHub Repository</a>
                        </div>
                        <div>
                            <FaGlobe className="inline-block text-2xl text-ternary-light mr-2" />
                            <a href={project.link} target="_blank" rel="noreferrer" className="text-primary-light hover:text-ternary-light transition-colors duration-200">Check out Website</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
