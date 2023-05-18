import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

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
                        Software Developer based in Atlanta, GA.
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
                    <p className="text-justify text-md my-2">
                        Software developer with experience in financial services and a background in nutrition. Possessing a strong
                        affinity for numbers,{' '}
                        <span className="bg-gradient-to-r from-secondary-dark to-ternary-dark text-transparent bg-clip-text">
                            programming
                        </span>{' '}
                        is where this passion is currently being applied.
                    </p>
                    <p className="text-justify text-md my-2">
                        Software developer with experience in financial services and a background in nutrition. Possessing a strong
                        affinity for numbers, <span className="bg-gradient-to-r from-secondary-dark to-ternary-dark text-transparent bg-clip-text">programming</span> is where this passion is currently being applied.
                    </p>
                    <p className="text-justify text-md my-2">
                        The interest in coding developed from the desire to create better software for a workplace, as the creators of the existing software were not receptive to feedback.
                        After one month of self-teaching, the skills gained led to the pursuit of a professional certificate in the field with the goal of expanding knowledge and turning it into a career.
                        It was a pleasant surprise to fall in love with the world of <span className="bg-gradient-to-r from-secondary-dark to-ternary-dark text-transparent bg-clip-text">coding</span>.
                    </p>
                    <p className="text-justify text-md my-2">
                        At present, work is focused on developing the financial software that led to this career transition, with excitement for what the outcome will be.
                        Although making apps aesthetically pleasing is enjoyable, the true passion lies in <span className="bg-gradient-to-r from-secondary-dark to-ternary-dark text-transparent bg-clip-text">back-end development. </span>                                   </p>
                    <p className="text-justify text-md my-2">
                        The next professional step is to learn Flutter and Dart, with a focus on mobile app development.
                        It's never too late to follow one's dreams, and finding my calling in the world of <span className="bg-gradient-to-r from-secondary-dark to-ternary-dark text-transparent bg-clip-text">ones</span> and <span className="bg-gradient-to-r from-secondary-dark to-ternary-dark text-transparent bg-clip-text">zeros</span> has been a source of gratitude.
                    </p>
                    <p className="text-justify text-md my-2">
                        The power of code enables the creation of solutions to real-world problems, and this fuels the desire to continue growing and learning as a software developer.                                    </p>
                    <p className="text-justify text-md my-2">
                        During leisure time, the go-to choices for <span className="bg-gradient-to-r from-secondary-dark to-ternary-dark text-transparent bg-clip-text"> de-stress </span> after hours of <span className="bg-gradient-to-r from-secondary-dark to-ternary-dark text-transparent bg-clip-text">de-bugging</span>  are video games and workouts hah.
                    </p>
                    <p className="font-semibold text-md mt-4 text-center bg-gradient-to-r from-secondary-dark to-ternary-dark text-transparent bg-clip-text">
                        Create. Code. Design. Debug. Play. Workout. Have Fun !important;
                    </p>
                </div>
            </motion.div>
        </div>
    );
}