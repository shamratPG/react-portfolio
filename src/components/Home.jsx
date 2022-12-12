import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';

const Home = () => {

  const time = 1500;

  return (
    <div name='home' className='w-full h-screen bg-primary'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <Zoom duration={time} top>
          <p className='text-secondary'>Hi, my name is</p>
        </Zoom>
        <Fade top duration={time}>
          <h1 className='text-4xl sm:text-7xl font-bold text-neutral'>
            Shamrat
          </h1>
        </Fade>
        <Fade bottom duration={time}>
          <h2 className='text-4xl sm:text-7xl font-bold text-accent'>
            I'm a Full Stack Developer.
          </h2>
        </Fade>
        <Zoom bottom duration={time}>
          <p className='text-accent py-4 max-w-[700px]'>
            I'm a full-stack developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused on
            building responsive full-stack web applications.
          </p>
        </Zoom>
        <Flash duration={time}>
          <div>
            <Link to='work' smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-neutral hover:border-accent'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
              </button>
            </Link>
          </div>
        </Flash>
      </div>
    </div>
  );
};

export default Home;
