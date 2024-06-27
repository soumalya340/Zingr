"use client";
import Footer from '@/app/components/reusable/Footer';
import Navbar from '@/app/components/reusable/HomeNavbar';
import Dropdown from '@/app/utils/dropdown';
import React from 'react';
import { useSearchParams } from "next/navigation";
import { useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import MyTokenABI from "@/app/abi/MyToken.json"

const SoloRaids = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get("title");
    const userAddress = useAddress();

    const contractAddress = "0xEf598661d2F2294147F95038CA68E3dDCe53eB93";
    const contractABI = MyTokenABI;

    const handleStake = async () => {

        try {
            // Get provider and signer
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            // Create a contract instance
            const contract = new ethers.Contract(contractAddress, contractABI, signer);

            // Call the safeMint method
            const tx = await contract.stake({value: 1000000000000000});

            await tx.wait();

            console.log("Stake successful!");
        } catch (error) {
            console.error("Error minting:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex min-h-screen">
            <aside className="bg-[#1F2023] w-80 p-12">
    <div className="mb-6 bg-[#1F2023] p-4 gradient-border rounded">
        <img src="/calendar.jpg" className="rounded-full w-[20%]" />
        <a href="/createEvent">
        <span className='text-white text-lg '>Events I am Organizing</span>
            <button className="w-[80%] bg-black text-white py-2 rounded mt-6">+ Create an Event</button>
        </a>
    </div>
    <div className="mb-6 bg-[#1F2023] p-4 gradient-border rounded">
        <img src="/calendar.jpg" className="rounded-full w-[20%]" />
        <a href="/voyager/profile">
            <h2 className="text-lg mb-2 mt-8 text-white">
                <span className="text-4xl float-right text-white">↗</span>Solo raid I am Attending
            </h2>
        </a>
    </div>
    <div className="mb-6 bg-[#ffffff] px-2  rounded">
        <h2 className="text-lg mb-2 text-black">
            <Dropdown />
        </h2>
    </div>
</aside>


                <main className="bg-black flex-grow p-8">
                    <div className="flex items-center justify-between mb-8">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-[50%] px-4 py-2 border border-gray-300 bg-black rounded-full focus:outline-none"
                        />
                        <div>
                            <button onClick={handleStake} className='p-2 px-4 bg-black rounded-full text-white'>Stake Now</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {title &&
                            <div className="bg-white  ">
                                <img src="/soloraid1.png" className="  rounded-lg" />
                                <h3 className="text-3xl mb-2">{title}</h3>
                                <p className="text-gray-700 mb-4">No Of Ticket Available: 5 </p>
                                <a href="/voyager/solomint"> <button className="w-[50%] bg-black text-white py-2 rounded">Join now</button></a>
                            </div>
                        }
                        <div className="bg-white rounded-lg h-[80] ">
                            <img src="/soloraid1.png" className=" h-[80]  bg-cover rounded-lg mb-4" />
                            <h3 className="text-3xl mb-2 px-5">Trip to Bali</h3>
                            <p className="text-gray-700 mb-4 px-5">No Of Ticket Available: 3</p>
                            <a href="/voyager/solomint"><button className="w-[50%] bg-black text-white py-2 rounded  mb-2 ml-5">Join now</button></a>
                        </div>
                        <div className="bg-white rounded-lg h-[80] ">
                            <img src="/soloraid2.png" className=" h-[80]  bg-cover rounded-lg mb-4" />
                            <h3 className="text-3xl mb-2 px-5">Trip to Bali</h3>
                            <p className="text-gray-700 mb-4 px-5">No Of Ticket Available: 3</p>
                            <a href="/voyager/solomint"><button className="w-[50%] bg-black text-white py-2 rounded  mb-2 ml-5">Join now</button></a>
                        </div>
                        <div className="bg-white rounded-lg h-[80] ">
                            <img src="/soloraid3.png" className=" h-[80]  bg-cover rounded-lg mb-4" />
                            <h3 className="text-3xl mb-2 px-5">Trip to Bali</h3>
                            <p className="text-gray-700 mb-4 px-5">No Of Ticket Available: 3</p>
                            <a href="/voyager/solomint"><button className="w-[50%] bg-black text-white py-2 rounded  mb-2 ml-5">Join now</button></a>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default SoloRaids;

function uuidv4() {
    throw new Error('Function not implemented.');
}
