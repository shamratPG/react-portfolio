import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Jello from 'react-reveal/Jello';
import Flip from 'react-reveal/Flip';

const Skills = () => {

    const time = 3000;
    return (
        <div name='skills' className='w-full py-12 bg-primary text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <Jello>
                    <div>
                        <p className='text-4xl font-bold inline border-b-4 border-secondary '>Skills</p>
                        <p className='py-4'>// These are the technologies I've worked with</p>
                    </div>
                </Jello>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <Flip duration={time} right>
                        <div className='bg-stone-800 pt-4 shadow-md shadow-stone-900 hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                            <p className='my-4'>HTML</p>
                        </div>
                    </Flip>

                    <Flip duration={time} right>

                        <div className='bg-stone-800 pt-4 shadow-md shadow-stone-900 hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                            <p className='my-4'>CSS</p>
                        </div>
                    </Flip>

                    <Flip duration={time} left>

                        <div className='bg-stone-800 pt-4 shadow-md shadow-stone-900 hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                            <p className='my-4'>JAVASCRIPT</p>
                        </div>
                    </Flip>

                    <Flip duration={time} left>

                        <div className='bg-stone-800 pt-4 shadow-md shadow-stone-900 hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                            <p className='my-4'>REACT</p>
                        </div>
                    </Flip>

                    <Flip duration={time} right>

                        <div className='bg-stone-800 pt-4 shadow-md shadow-stone-900 hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                            <p className='my-4'>GITHUB</p>
                        </div>
                    </Flip>

                    <Flip duration={time} right>

                        <div className='bg-stone-800 pt-4 shadow-md shadow-stone-900 hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                            <p className='my-4'>NODE JS</p>
                        </div>
                    </Flip>

                    <Flip duration={time} left>

                        <div className='bg-stone-800 pt-4 shadow-md shadow-stone-900 hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                            <p className='my-4'>MONGO DB</p>
                        </div>
                    </Flip>

                    <Flip duration={time} left>

                        <div className='bg-stone-800 pt-4 shadow-md shadow-stone-900 hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                            <p className='my-4'>TAILWIND</p>
                        </div>
                    </Flip>

                    <Flip duration={time} right>
                        <div className='bg-stone-800 pt-4 shadow-md shadow-stone-900 hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                            <p className='my-4'>FIREBASE</p>
                        </div>
                    </Flip>
                </div>
            </div>
        </div>
    );
};

export default Skills;
