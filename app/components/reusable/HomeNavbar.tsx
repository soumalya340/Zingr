"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import Image from "next/image";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

const Navbar = () => {
  const userAddress = useAddress();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userSubId, setUserSubId] = useState<string | undefined>();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="px-6 py-4 shadow-sm flex justify-between items-center bg-transparent relative">
      <div className="flex gap-2 items-center">
        <div className="text-2xl pl-20">
          <Image
            src="/logo.png"
            alt="TokenFest Logo"
            width={30}
            height={10}
            className="w-auto h-auto"
          />
        </div>
        <div className="text-white text-2xl font-semibold hover:text-gray-800">
          <Link href="/">Ziger</Link>
        </div>
      </div>
      
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="hidden md:flex gap-36 items-center text-white font-space-grotesk font-semibold text-xl">
          <Link
            href={userAddress ? "/voyager/random_chat/new" : "/"}
            className="hover:text-gray-600 px-4 py-2"
          >
            Meet New
          </Link>
          {userAddress && (
            <div className="flex">
              <Link
                href={{
                  pathname: "/voyager/profile",
                  query: {
                    userNo: userSubId,
                    userAddress: userAddress,
                  },
                }}
              >
                <CgProfile className="text-4xl cursor-pointer hover:text-gray-600" />
              </Link>
            </div>
          )}
          <Link
            href={userAddress ? "/voyager/raids" : "/"}
            className="hover:text-gray-600 px-4 py-2"
          >
            Raids
          </Link>
          
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center gap-2 pr-20 pt-5">
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

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-white w-full shadow-lg py-4">
          <Link
            href={userAddress ? "/voyager/random_chat/new" : "/"}
            className="block px-4 py-2 text-black font-semibold hover:text-gray-700"
          >
            Meet New
          </Link>
          <Link
            href={userAddress ? "/voyager/raids" : "/"}
            className="block px-4 py-2 text-black font-semibold hover:text-gray-700"
          >
            Raids
          </Link>
          {userAddress && (
            <div className="flex">
              <Link
                href={{
                  pathname: "/voyager/profile",
                  query: {
                    userNo: userSubId,
                    userAddress: userAddress,
                  },
                }}
              >
                <CgProfile className="text-4xl cursor-pointer" />
              </Link>
            </div>
          )}
          <ConnectWallet
            theme={lightTheme({
              colors: { primaryButtonBg: "white" },
            })}
            style={{ color: "black", borderRadius: "9999px" }}
            className="hover:bg-sky-500"
            switchToActiveChain={true}
            modalSize={"wide"}
            welcomeScreen={{ title: "Voyager" }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
