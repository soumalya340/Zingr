"use client"
import HomeNavbar from "./components/reusable/HomeNavbar";
import { LANDING_PAGE_VIBRANT_COMMUNITIES_IMAGES } from "./utils/constants";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/reusable/Footer";


const images = [
  { src: "/mug.png", caption: "Voyager has been a" },
  { src: "/button.png", caption: "I've made lifelong" },
  { src: "/lady.png", caption: "Voyager's" },
  { src: "/china2.png", caption: "The interactive demo" },
];

export default function Home() {
  return (
    <main className="  bg-black">
      <div
        className=" h-screen w-full bg-origin-padding p-10  bg-center bg-contain bg-[url('/background.png')]"
      >
        <HomeNavbar />
        
        
      </div>
      {/* <Footer /> */}
    </main>
  );
}
