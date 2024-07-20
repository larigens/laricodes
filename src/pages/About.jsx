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
                        Hello World,
                    </h3>
                    <p className="text-justify text-md mt-4">
                        I'm Larissa Guilherme, a passionate and dedicated Frontend Software Engineer based in Roswell, Georgia.
                    </p>
                    <p className="my-3 p-4 text-lg text-right text-secondary-light">With a Full Stack Web Development certification from Georgia Tech,
                        <span className="font-normal"> I've been on a mission to make the web a better (and more fun) place since 2022.</span>
                    </p>
                    <p className="text-justify text-md my-2">
                        By day, I’m a CSR Analyst and Underwriter at G Squared Funding, LLC, where I’ve developed our load board app and given our website a full makeover—all while juggling my other responsibilities. Our company doesn't have an IT department, so I took on both projects from mock-up to completion all by myself. Some might call it crazy, but I love coding, and these projects were just fun side gigs.
                    </p>
                    <p className="my-3 p-4 text-lg text-right text-secondary-light">
                        It’s definitely challenging to switch between such different roles during my 8 work hours, and it makes me wonder how much more I could accomplish if I could focus solely on coding 40 hours a week.
                    </p>
                    <p className="text-justify text-md my-2">
                        By night, you may find me experimenting with JavaScript and React, crafting quirky web projects that blend creativity and functionality. Or maybe just doing some puzzles, playing Wordle, being extra competitive on Stop, or watching a random documentary about space or anything related to science. Yeah, I'm a big nerd. But what can I do? I just love learning new stuff 🤓
                    </p>
                    <p className="text-justify text-md my-2">
                        I’m not just about coding, though. I hold a Bachelor of Science in Clinical Nutrition, proving I can not only debug your app but also suggest a healthy snack while doing it! Or I might invite you to go for a run —I’m an ex-sedentary person preparing to run a half-marathon. Oh, and I’m also a Certified Associate in Project Management (CAPM)®, which brings a touch of order to the world of development.
                    </p>
                    <p className="my-3 p-4 text-lg text-left text-secondary-light">
                        Collaboration is my jam. I love bouncing ideas off fellow tech and non-tech enthusiasts and turning wild ideas into polished products. Recognized for my top-notch performance and innovative solutions, I’m ready to dive into new challenges with a smile and a keyboard at the ready.                    </p>
                    <p className="text-right text-lg sm:text-xl mt-3 mb-0 px-4 py-1 text-indigo-500">
                        Ready to create something awesome together?
                    </p>
                    <p className="mt-0 mb-3 px-4 pt-0 pb-4 text-lg text-right text-secondary-light">
                        Let’s &#123;code&#125;, &lt;Laugh /&gt;, and make magic (!not-happen)!
                    </p>
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