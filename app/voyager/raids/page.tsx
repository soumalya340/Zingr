"use client"
import Link from "next/link";
import Footer from '@/app/components/reusable/Footer';
import Navbar from '@/app/components/reusable/HomeNavbar'
import React from 'react'
import Image from 'next/image';

const Raids = () => {
    const cards = [
        {
            title: "Solo raids",
            description: "Browse securely with advanced encryption, safeguarding your data from threats anywhere.",
            image: "/solo.png"
        },
        {
            title: "Event raids",
            description: "Offers unrestricted global access, allowing you to bypass censorship and content limitations seamlessly from home or office.",
            image: "/event.png"
        },
        {
            title: "Welcome to the den",
            description: "Secures your network, providing reliable access and expanding capabilities with cloud storage and computing.",
            image: "/den.png"
        },
        {
            title: "Wizards Opinion",
            description: "Enables future-ready, secure, and anonymous payments with NFT subscriptions, ensuring optimal performance.",
            image: "/opinion.png"
        }
    ];
    return (
        <div className=' bg-gradient-custom'>
            <Navbar />
            
           
            
                    <div className=" text-center  ">
                        <h1 className="text-7xl mt-48 text-white font-rationale">
                            Embark on Unforgettable <br/>Adventures
                        </h1>
                        <a href="/voyager/soloraids"><button className="mt-5 px-5 py-2 text-lg text-black bg-white hover:bg-[#2a73ae] rounded-lg shadow-md">
                            Start your adventure
                        </button></a>
                 
               

                {/* <div className='text-5xl mt-28 ml-20 text-gray-800'>
                    <h1>
                        Embark on Unforgettable <br />Adventures
                    </h1>
                </div> */}
   <div className="relative w-full h-screen  flex items-center justify-center">
      <div className="relative w-3/5 h-2/4 ">
        {/* Left image */}
        <img
          src="/raid1.png"
          alt="Left image"
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-1/3 h-full object-cover rounded-lg shadow-lg"
        />
        
        {/* Right image */}
        <img
          src="/raid3.png"
          alt="Right image"
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-1/3 h-full object-cover rounded-lg shadow-lg "
        />
        
        {/* Center overlapping image */}
        <img
          src="/raid2.png"
          alt="Center image"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-full object-cover rounded-lg shadow-xl z-10 mt-40 bg-black p-2"
        />
      </div>
    </div>
    <div className="h-[30vh]"></div>
    <div className="font-rationale flex  text-7xl text-white ml-40">What more you can explore</div>

    <div className="min-h-screen p-10 mt-20 text-white">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="relative flex flex-col items-center p-5 text-white">
      <img src="/raid4.png" className=" bg-cover object-cover  mb-4 mt-4 w-5/6 h-[50vh] shadow-right-bottom-yellow" />
      <div className="absolute inset-0 flex flex-col justify-end h-4/5  rounded-3xl">
        <h2 className="text-xl flex ml-28">Solo raids</h2>
        <p className="mt-1 flex ml-28">Browse securely with advanced encryption, safeguarding your 
        data from threats anywhere.</p>
      </div>
    </div>
    <div className="relative flex flex-col items-center p-5 text-white">
      <img src="/raid5.png" className="bg-cover object-cover  mb-4 mt-4 w-5/6 h-[50vh] shadow-right-bottom-yellow " />
      <div className="absolute inset-0 flex flex-col justify-end  h-4/5  rounded-3xl">
        <h2 className="text-xl flex ml-28">Event raids</h2>
        <p className="mt-1  flex ml-28">Offers unrestricted global access, allowing you to bypass <br/>
censorship and content limitations seamlessly from home or 
office.</p>
      </div>
    </div>
    <div className="relative flex flex-col items-center p-5 text-white">
      <img src="/raid6.png" className="bg-cover object-cover  mb-4 mt-4 w-5/6 h-[50vh] shadow-right-bottom-yellow" />
      <div className="absolute inset-0 flex flex-col justify-end h-4/5  rounded-3xl">
        <h2 className="text-xl flex ml-28">Welcome to the den</h2>
        <p className="mt-1 flex ml-28">Secures your network, providing reliable access and expanding <br/>
        capabilities with cloud storage and computing.</p>
      </div>
    </div>
    <div className="relative flex flex-col items-center p-5 text-white">
      <img src="/raid7.png" className="bg-cover object-cover  mb-4 mt-4 w-5/6 h-[50vh] shadow-right-bottom-yellow" />
      <div className="absolute inset-0 flex flex-col justify-end h-4/5   rounded-3xl">
        <h2 className="text-xl flex ml-28">Wizards Opinion </h2>
        <p className="mt-1 flex ml-28">Enables future-ready, secure, and anonymous payments with <br/>
        NFT subscriptions, ensuring optimal performance.</p>
      </div>
    </div>
  </div>
</div>


            </div>
            <div className="h-[30vh]"></div>
            <div className="text-white"> <Footer/></div>
            
        </div>
        
        
    )
}

export default Raids