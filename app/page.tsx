"use client";
import HomeNavbar from "./components/reusable/HomeNavbar";
import { LANDING_PAGE_VIBRANT_COMMUNITIES_IMAGES } from "./utils/constants";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/reusable/Footer";
import "./globals.css";
import Image from "next/image";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <main className="  bg-black h-[125vh] mt-5 w-full bg-center bg-contain bg-no-repeat bg-[url('/background.png')]">
      <div className="  ">
        <HomeNavbar />
      </div>
      <div className="flex ">
        <div className="flex-1">
          <div className="text-white text-7xl  font-rationale ml-24 mt-24">
            Innovate, Fund, Build
            <br />
            Community
          </div>
          <div className="text-lg flex gap-10 text-white mt-10 ml-24 ">
            <p className="pt-2">innovative social-fi app</p>
            <ConnectWallet
              theme={lightTheme({
                colors: { primaryButtonBg: "white" },
              })}
              style={{ color: "black", borderRadius: "9999px" }}
              className="hover:bg-sky-500 text-black"
              switchToActiveChain={true}
              modalSize={"wide"}
              welcomeScreen={{ title: "Voyager" }}
            />
          </div>

          <div className="relative max-w-lg mt-10 ml-24 bg-yellow-300 p-1 clip-top-right-bottom-left rounded-2xl ">
            <Image
              src="/hero2.jpeg"
              alt="hero1"
              width={700}
              height={700}
              className=" w-full h-full clip-top-right-bottom-left  rounded-2xl"
            />
          </div>
        </div>

        <div className="relative  max-w-80 h-fit mx-24 mt-24 bg-pink-600 clip-corner p-1 rounded-2xl flex-1 ">
          <Image
            src="/hero1.png"
            alt="hero1"
            width={700}
            height={700}
            className=" w-[50]  clip-corner rounded-2xl  `"
          />
        </div>
      </div>

      <div className="h-[50vh]"></div>
      <div>
        <div className="flex justify-between p-6 gap-10">
          <div className="border-4 rounded-2xl border-[#FE68FC] p-4 w-1/3">
            <img
              src="/dollar.png"
              alt="Image 1"
              className="w-[80] h-64 object-cover mt-10 "
            />
            <h2 className=" mx-2 text-4xl  text-white mt-10 ">Crowfunding</h2>
            <p className="mx-2 text-white my-10 text-lg">
              Join your quest together, quest can be anything crowfunding for
              local dj party or football.
            </p>
          </div>
          <div className="border-4 rounded-2xl border-[#FE68FC] p-4 w-1/3 mx-4">
            <img
              src="/message.png"
              alt="Image 2"
              className="w-[60] h-64 object-cover mt-10 ml-2"
            />
            <h2 className=" mx-2 text-4xl  text-white mt-10">Random chat</h2>
            <p className="mx-2 text-white my-10 text-lg">
              Can meet new people on the basis of there personality and interest
            </p>
          </div>
          <div className="border-4 rounded-2xl  border-[#FE68FC] p-4 w-1/3">
            <img
              src="profile.png"
              alt="Image 3"
              className="w-[80] h-64 object-cover mt-10"
            />
            <h2 className="mx-2 text-4xl  text-white mt-10">Onchain Profile</h2>
            <p className="mx-2 text-white my-10 text-lg">
              OnChain Profile , where it keep track of what activities who have
              been through , such which raids u have participated
            </p>
          </div>
        </div>
      </div>
      <div className="h-[50vh]"></div>
      <div className="relative">
  {/* Boxes section */}
  <div className="absolute top-0 left-0 w-2/3 z-20 mt-52">
    <div className="grid grid-cols-2 gap-4  text-white w-3/4 h-[50vh] mx-52 mt-20">
      <div className="bg-[#1F2023] p-4 shadow-right-bottom-yellow ">Horizontal Box 1</div>
      <div className="bg-[#1F2023] p-4 shadow-right-bottom-green ">Horizontal Box 2</div>

      <div className="bg-[#1F2023] p-4 shadow-right-bottom-pink col-span-2 md:col-span-1  ">
        Vertical Box 1
      </div>
      <div className="bg-[#1F2023] p-4 shadow-right-bottom-blue col-span-2 md:col-span-1 ">
        Vertical Box 2
      </div>
    </div>
  </div>

  {/* Image and text section */}
  <div className="flex -z-10">
    <div className="flex-1 -z-10">
      <p className="text-white text-6xl font-rationale text-center mt-20">
        How it works?
      </p>
    </div>

    <div className="flex-1 -z-10">
      <Image
        src="/hero3.png"
        alt="hero1"
        width={700}
        height={700}
        className="w-full rounded-2xl -z-10"
      />
    </div>
  </div>
</div>
<div className="h-[50vh]"></div>
<div className="font-rationale text-6xl flex justify-center text-white mx-20 text-justify">Innovative social-fi app for travelers, social<br/> 
networking with financial technology</div>

<div className="bg-[url('/hero4.png')] opacity-80  w-full h-full  mt-44 flex flex-col justify-end  items-start">
<div className="flex ml-32   text-white">

<p className="text-6xl font-semibold">Random Chat App</p>


</div>
<div className="text-white  h-[40vh] text-3xl pt-10 ml-32">
Fusion of meeting new friends and Tinder, helping travelers 
connect with <br/> like-minded individuals as they explore 
new destinations.
</div>


</div>
<div className="h-[18vh]"></div>
<div className="bg-[url('/hero5.png')] opacity-80  bg-cover h-full  mt-44 flex flex-col justify-end  items-start">
<div className="flex ml-32   text-white">

<p className="text-6xl font-semibold">Decentralized Onchain <br/>
Identity</p>


</div>
<div className="text-white  h-[40vh] text-3xl pt-10 ml-32">
allows users to establish a pseudo-anonymous onchain 
identity, ensuring<br/> privacy and security while maintaining a 
trustworthy profile for interactions<br/> within the app.
</div>


</div>
<div className="h-[50vh]"></div>

      {/* <Footer /> */}
    </main>
  );
}
