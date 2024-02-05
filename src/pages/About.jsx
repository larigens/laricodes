import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About({ showAbout }) {
    return (
        <div className="flex flex-col sm:flex-row gap-x-10">
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.9,
                    delay: 0.1,
                }}
                className="flex-grow-0 w-full md:w-1/2"
            >
                <div className="sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Checkout my projects{' '}
                        <Link to="/portfolio" className="font-semibold text-secondary-light">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ternary-dark">
                        Larissa Guilherme
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white">
                        Web Developer based in Roswell, GA.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/contact"
                            className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Contact Me
                        </Link>
                        <button
                            onClick={showAbout}
                            className="text-lg font-semibold hover:bg-indigo-600 hover:text-white rounded-md px-3 py-2 leading-6 text-secondary-light"
                        >
                            <span aria-hidden="true">←</span>
                        </button>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0, y: -50 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.9,
                    delay: 0.1,
                }}
                className="flex-grow rounded-2xl bg-gradient-to-b from-primary-dark to-gray-800 shadow-2xl text-primary-light"
            >
                <div className="p-5">
                    <h3 className="text-center text-2xl sm:text-4xl font-bold my-3 text-secondary-light">
                        I'm a dynamic professional with a unique blend of expertise.
                    </h3>
                    <p className="text-justify text-md mt-4">
                        My coding journey began with a profound passion for problem-solving and a love for creating meaningful solutions.
                        It all started when I noticed a critical need at my current workplace. As a small company without an IT department, there was no avenue to share my ideas for enhancing our website.
                        Our website was in dire need of improvement to attract more clients and drive business growth. I firmly believed that by enhancing both the design and functionality of our website, we could make a substantial difference in our company's success.
                        This realization ignited my determination to embark on a coding adventure, seeking to equip myself with the skills necessary to bring these improvements to life.
                    </p>
                    <p className="my-3 p-4 text-lg text-right text-secondary-light font-bold">If you desire change, you have two options:
                        <span className="font-normal"> pursue the individuals capable of effecting it or acquire the necessary tools to instigate the change independently.</span>
                    </p>
                    <p className="text-justify text-md my-2">
                        Initially, I attempted to teach myself coding, but the sheer variety of languages, frameworks, and tools left me feeling overwhelmed.
                        A friend introduced me to HTML and CSS, but due to our schedule constraints, I decided to enroll in a coding bootcamp for more structured guidance.
                        From the very beginning, I was captivated by the world of coding, and each moment of learning felt like an exciting journey.
                    </p>
                    <p className="text-left text-lg sm:text-xl font-bold my-3 p-4 text-indigo-500">
                        What started as an experiment quickly became a passion.
                    </p>
                    <p className="text-justify text-md my-2">
                        In just one month, I was completely hooked.
                        This prompted me to pursue a professional certificate in the field, driven by the desire to expand my knowledge and transform my passion into a fulfilling career.
                    </p>
                    <p className="text-justify text-md my-2">
                        Currently, I'm dedicated to enhancing our company's website, the very project that ignited my career transition.
                        Looking forward, my next professional step involves diving into the realm of mobile app development.</p>

                    <p className="my-3 p-4 text-lg text-right text-secondary-light font-bold">
                        I firmly believe that it's never too late to chase one's dreams. </p>
                    <p className="text-justify text-md my-2">
                        The power of code inspires me, as it empowers us to create solutions for real-world problems. This fuels my determination to keep growing and learning as a developer.</p>
                    <p className="text-justify text-md my-4">
                        Thank you for visiting my portfolio, and I'm excited about the opportunity to connect with you and explore new horizons in the ever-evolving world of technology.</p>
                    <p className="text-2xl p-5 mt-5 text-center bg-gradient-to-r from-secondary-dark to-ternary-dark text-transparent bg-clip-text italic tracking-[2px]">
                        Create. Code. Design. Debug. Have Fun !important;
                    </p>
                </div>
            </motion.div>
        </div>
    );
}