"use client"
import Footer from '@/app/components/reusable/Footer'
import Navbar from '@/app/components/reusable/HomeNavbar'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import { useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";
// import MyTokenABI from "@/app/abi/MyToken.json"


const SoloMint = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get("title");
    const userAddress = useAddress();

    const initialTime = 24 * 60 * 60;
    const [timeRemaining, setTimeRemaining] = useState(initialTime);

    const contractAddress = "0xEf598661d2F2294147F95038CA68E3dDCe53eB93";
    const contractABI = [
        {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              }
            ],
            "name": "safeMint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
    ]
    const handleMint = async () => {

        try {
            // Get provider and signer
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            // Create a contract instance
            const contract = new ethers.Contract(contractAddress, contractABI, signer);

            // Call the safeMint method
            const tx = await contract.safeMint(userAddress);

            // Wait for the transaction to be mined
            await tx.wait();

            console.log("Mint successful!");
        } catch (error) {
            console.error("Error minting:", error);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hours.toString().padStart(2, '0')} Hours ${minutes.toString().padStart(2, '0')} Minutes ${secs.toString().padStart(2, '0')} Seconds`;
    };


    return (
        <div>
            <Navbar />

            <div className="bg-black flex mx-10 my-10">
                <div className="w-[50%]">
                    <img
                        src="/goa.png"
                        alt="Small Bro #8587"
                        className="w-[100%] rounded-md"
                    />
                </div>
                <div className="w-2/3 pl-6 bg-black border-2 border-white mx-10 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-3xl font-bold mt-10">Trip to Goa</h2>
                            <p className="text-lg text-white">Owned by <span className="text-blue-600">Suraj</span></p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg text-white">0 People Joined</p>
                        <p className="text-lg text-white">0 Supports</p>
                        <p className="text-lg text-white">Number Of NFTs Left : 5 </p>
                    </div>
                    <div className="mb-4">
                        <p className="text-red-500 font-bold text-xl">
                            Raid Joing Time Ends
                        </p>
                        <div className="flex space-x-2 text-white text-xl">
                            {formatTime(timeRemaining)}
                        </div>
                    </div>
                    <div className=" mb-4">
                        <p className="text-white">Current Price</p>
                        <p className="flex text-2xl font-bold mt-2">1 MATIC &nbsp; <img src="/maticlogo.webp" className='w-[3%] h-[3%]' /></p>
                    </div>
                    <div className='flex gap-8 mt-10'>
                            <button className="bg-blue-500 text-white py-4 px-16 rounded  mb-2" onClick={handleMint}>
                                Mint Now
                            </button>
                        <a href="/voyager/opinion"><button className="border border-gray-300 text-white py-4 px-16 rounded ">
                            Provide Support
                        </button></a>
                    </div>

                    <div className="mt-4 text-white text-xl">
                        Supports creator: This listing is paying the collection creator their suggested creator earnings.
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <Footer />
            </div>
        </div>
    )
}

export default SoloMint

function uuidv4() {
    throw new Error('Function not implemented.');
}
