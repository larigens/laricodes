import { motion } from 'framer-motion';
import { useState } from 'react';
import avatar from '../assets/avatar.png';
import About from '../pages/About';

export default function Main() {
    const [show, setShow] = useState(false);

    const showAbout = () => {
        setShow(!show)
    };

    return (
        <div className="mx-auto max-w-2xl py-32 sm:py-30 md:py-38 lg:py-56 xl:mb-16 relative">
            <div className="text-center">
                {show ?
                    <About showAbout={showAbout} />
                    : (

                        <div className='w-100 text-center justify-center'>
                            <motion.div
                                initial={{ opacity: 0, y: -180 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                                className="px-3 py-1 text-sm text-gray-300"
                            >
                                Checkout my projects{' '}
                                <a href="/portfolio" className="font-semibold text-secondary-light">
                                    <span aria-hidden="true" />
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </motion.div>
                            <motion.section
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1, scale: 1.2,
                                }}
                                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                                className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: -180 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                                    className="w-full sm:w-2/3 flex justify-start mt-8 sm:mt-0"
                                >
                                    <img src={avatar} alt='female' width='350px' />
                                </motion.div>
                                <div className="w-full text-right">
                                    <motion.h1
                                        initial={{ opacity: 0, x: 200 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            ease: 'easeInOut',
                                            duration: 0.9,
                                            delay: 0.1,
                                        }}
                                        className="font-general-semibold text-3xl lg:text-4xl xl:text-5xl text-center text-ternary-dark dark:text-primary-light"
                                    >
                                        Larissa Guilherme
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, x: 200 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            ease: 'easeInOut',
                                            duration: 0.9,
                                            delay: 0.2,
                                        }}
                                        className="font-general-medium mt-4 text-md md:text-md lg:text-lg text-center leading-normal text-gray-500 dark:text-gray-200"
                                    >
                                        A Software Developer & Back-End Enthusiast
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, x: 200 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            ease: 'easeInOut',
                                            duration: 0.9,
                                            delay: 0.3,
                                        }}
                                        className="flex justify-center sm:block"
                                    >
                                        <div className="mt-10 flex items-center justify-center gap-x-6">
                                            <a
                                                href="/contact"
                                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Contact Me
                                            </a>
                                            <button onClick={showAbout} className="text-sm font-semibold hover:bg-indigo-600 hover:text-white rounded-md px-3 py-2 leading-6 text-secondary-light">
                                                About Me <span aria-hidden="true">→</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                </div>

                            </motion.section>
                        </div>
                    )}
            </div>
        </div>
    )
}
