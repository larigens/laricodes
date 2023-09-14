import React, { useState } from 'react';
import { motion } from 'framer-motion';
import card from '../assets/images/card.png';

export default function Contact({ fullName, setFullName, email, setEmail, message, setMessage }) {
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    if (name === 'fullName') {
      setFullName(value)
    }
    else if (name === 'email') {
      setEmail(value)
    }
    else if (name === 'message') {
      setMessage(value)
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState('');

  const handleCloseModal = () => setShowModal(false);

  const handleShowModal = (title, body) => {
    setModalTitle(title);
    setModalBody(body);
    setShowModal(true);
  };

  const handleBlur = (fieldName) => {
    if (fieldName === "fullName" && !fullName) {
      handleShowModal("Error", "Please enter your name!");
      return;
    } else if (fieldName === "email" && !email) {
      handleShowModal("Error", "Please enter your email address!");
      return;
    } else if (fieldName === "message" && !message) {
      handleShowModal("Error", "Please enter a message!");
      return
    }
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if (!emailRegex.test(email)) {
      handleShowModal("Error", "Please enter a valid email address!");
      return;
    }
    else if (!fullName || !email || !message) {
      handleShowModal("Error", "Please fill in all required fields!");
      return;
    }
    else {
      // Alert the user their message was submited successfully, and clear the inputs/textarea
      handleShowModal(`Thank you ${fullName}!`, "I received your message and will respond within 24 hours!");
      setFullName('');
      setEmail('');
      setMessage('')
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.8, delay: 0.2 }}
      className="px-3 py-1 text-sm text-gray-300"
    >
      <div className="mx-auto max-w-2xl py-32 sm:py-30 md:py-38 lg:py-40 xl:mb-16 relative item-center flex justify-center">
        <div className='w-full justify-center p-2 bg-light-shades shadow-xl rounded-2xl max-w-md bg-gradient-to-b from-primary-dark via-gray-900 to-primary-dark p-2 sm:p-4'>
          <h2 className="text-4xl text-ternary-light font-bold text-center mb-1 p-4">Contact Me</h2>
          <div className='flex justify-center mb-3'>
            <img src={card} alt='qr code' width='80px' height='80px' className='rounded-md' />
          </div>
          <h4 className='text-2xl font-bold text-center mb-4 text-gray-300'>Or complete the form below:</h4>
          <form id="contact" name="newMessage" method="post" action="newMessage" className="card-body p-6" >
            <div className="mb-4">
              <input
                value={fullName}
                name="fullName"
                onChange={handleInputChange}
                type="fullName"
                placeholder="Name"
                required
                className='bg-gray-900 text-gray-300 rounded-lg p-3 w-full'
                onBlur={(e) => handleBlur(e.target.name)}
              />
            </div>
            <div className="mb-4">
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email Address"
                required
                className='bg-gray-900 text-gray-300 rounded-lg p-3 w-full'
                onBlur={(e) => handleBlur(e.target.name)}
              />
            </div>
            <div className="mb-4">
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                rows={6}
                placeholder="I am contacting you because..."
                required
                className='bg-gray-900 text-gray-300 rounded-lg p-3 w-full'
                onBlur={(e) => handleBlur(e.target.name)}
              />
            </div>
            <div className="flex justify-center">
              <button type="button" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleFormSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>


      <div className={`fixed z-50 inset-0 overflow-y-auto ${showModal ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          </div>
          <div className="inline-block align-bottom text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:w-2/3 lg:w-1/2" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="bg-gray-900 p-4">
              <h3 className="text-lg text-ternary-light font-bold" id="modal-headline">{modalTitle}</h3>
              <div className="mt-2">
                <p className="text-md text-gray-300 font-semibold">{modalBody}</p>
              </div>
            </div>
            <div className="bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
