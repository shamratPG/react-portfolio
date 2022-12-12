import React from 'react';
import Fade from 'react-reveal/Fade';
import Jello from 'react-reveal/Jello';


const About = () => {
  return (
    <div name='about' className='w-full min-h-screen py-12 bg-primary text-gray-300 flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <Jello>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-secondary'>
                About
              </p>
            </div>
            <div></div>
          </div>
        </Jello>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <Fade left>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Md. Shamrat Hossain, nice to meet you. Please take a look around.</p>
            </div>
          </Fade>
          <Fade right>
            <div>
              <p>I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all the
                way to large enterprise corporations. What would you do if you had
                a software expert available at your fingertips?</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
