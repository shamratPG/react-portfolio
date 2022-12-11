import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();

  const notify = () => toast.success("Your Message has successfully received.");


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_77dsnbq', 'template_q51kinh', form.current, 'p2r3YhQb7w4xrTBfQ')
      .then((result) => {
        console.log(result.text);
        notify()

      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
  return (
    <div name='contact' className='w-full py-12 bg-primary flex justify-center items-center p-4'>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-secondary text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email.</p>
        </div>
        <input className='bg-stone-900 p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-stone-900' type="email" placeholder='Email' name='email' />
        <textarea className='bg-stone-900 p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-neutral hover:border-accent px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </form>
    </div>
  )
}

export default Contact