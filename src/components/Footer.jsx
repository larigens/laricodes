import React from 'react';
import { FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import resume from '../assets/cv/Resume.docx';

export default function Footer() {
    return (
        <footer className="mx-6 py-12 px-4">
            <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
                <p className="text-base text-gray-400">&copy; 2023 Larissa Guilherme. All rights reserved.</p>
                <a href={resume} download className="text-base text-gray-300 hover:text-white">CV</a>
                <a href="https://bugs-diaries.herokuapp.com/" target="_blank" rel="noreferrer" className="text-base text-gray-300 hover:text-white">Blog</a>
                <div className="mt-4 md:mt-0 md:ml-4 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-ternary-light text-xl sm:text-md md:text-xl" />
                    <p className="text-gray-300 ml-2">Sandy Springs, GA</p>
                </div>
                <div className="mt-4 flex justify-center md:mt-0 md:ml-4">
                    <a href="https://twitter.com/coffeebr_eak" className="ml-4 text-gray-400 hover:text-gray-300">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.95 4.05a8.998 8.998 0 0 1-2.601.714 4.51 4.51 0 0 0-7.873 2.685A12.774 12.774 0 0 1 3.843 4.853a4.505 4.505 0 0 0-.616 1.882 4.51 4.51 0 0 0 2.007 4.024 4.488 4.488 0 0 1-2.04-.562v.057a4.508 4.508 0 0 0 3.608 4.412 4.517 4.517 0 0 1-2.035.077 4.51 4.51 0 0 0 4.21 3.122 9.055 9.055 0 0 1-5.596 1.928A12.78 12.78 0 0 0 9.736 19.1c8.313 0 12.854-6.876 12.854-12.854l-.015-.585A9.207 9.207 0 0 0 22 5.254a9.065 9.065 0 0 1-1.051.795z" />
                        </svg>
                    </a>
                    <a href="https://github.com/larigens" className="ml-4 text-gray-400 hover:text-gray-300">
                        <span className="sr-only">GitHub</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.13 6.84 9.45.5.09.68-.22.68-.49v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.63.07-.63.07-.63 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.37 1.08 2.96.83.1-.64.35-1.08.63-1.33-2.2-.25-4.52-1.1-4.52-4.9 0-1.08.38-1.97 1.02-2.67-.1-.26-.44-1.27.09-2.64 0 0 .84-.26 2.75 1.02.8-.22 1.66-.33 2.52-.33.85 0 1.71.11 2.52.33 1.91-1.28 2.75-1.02 2.75-1.02.53 1.37.2 2.38.1 2.64.63.7 1.02 1.6 1.02 2.67 0 3.81-2.32 4.65-4.53 4.9.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.49C19.13 20.13 22 16.41 22 12c0-5.52-4.48-10-10-10z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/larigens/" className="ml-4 text-gray-400 hover:text-gray-300">
                        <span className="sr-only">LinkedIn</span>
                        <FaLinkedin className="text-gray-400 hover:text-gray-300 text-2xl sm:text-md md:text-2xl" />
                    </a>
                    <a href="mailto:larigens@gmail.com" className="ml-4 text-gray-400 hover:text-gray-300">
                        <span className="sr-only">Email</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21 5.007v13.986H3V5.007h18zm-16.08 2.52l7.015 4.583 7.016-4.583H4.92zM3.765 18.993h16.47V7.446l-8.235 5.383-8.235-5.383v11.547z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}
