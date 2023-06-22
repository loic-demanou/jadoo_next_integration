"use client";

import React, { useState } from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";


const navigation = [
    { name: 'Destinations', href: '#', current: true },
    { name: 'Hotels', href: '#', current: false },
    { name: 'Flights', href: '#', current: false },
    { name: 'Bookings', href: '#', current: false },
    { name: 'Login', href: '#', current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="absolute right-0 -z-10">
                <Image src="/image/rightDecore.png" width={766} height={872} alt='université'
                className=' ' 
                />
            </div>
            <nav className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-28 w-full">
                        <div className="flex items-center justify-around w-full">
                            <div className="flex-shrink-0">
                                <Image src="/image/logo.png" alt="Logo" width={115} height={34} />
                            </div>
                            <div className="hidden md:block ">
                                <div className="ml-2 xl:ml-10 flex items-baseline lg:space-x-5 xl:space-x-9">
                                    <a
                                        href="#"
                                        className=" hover:bg-[#FFF1DA] text-gray-800 px-3 py-2 rounded-md text-[17px] font-normal"
                                    >
                                        Destinations
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-800 hover:bg-[#FFF1DA] hover:text-gray-800 px-3 py-2 rounded-md text-[17px] font-normal"
                                    >
                                        Hotels
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-800 hover:bg-[#FFF1DA] hover:text-gray-800 px-3 py-2 rounded-md text-[17px] font-normal"
                                    >
                                        Flights
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-800 hover:bg-[#FFF1DA] hover:text-gray-800 px-3 py-2 rounded-md text-[17px] font-normal"
                                    >
                                        Bookings
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-800 hover:bg-[#FFF1DA] hover:text-gray-800 px-3 py-2 rounded-md text-[17px] font-normal"
                                    >
                                        Login
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-800 hover:bg-[#FFF1DA] border border-gray-800
                                    hover:text-gray-800 px-4 py-1.5 rounded-md text-[17px] font-normal"
                                    >
                                        Sign up
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-800 hover:bg-[#FFF1DA] hover:text-gray-800 px-3 py-2 rounded-md text-[17px] font-normal"
                                    >
                                        EN
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border  shadow-md">
                                <a
                                    href="#"
                                    className="hover:bg-[#1F2937] hover:text-neutral-100 text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Destinations
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-800 hover:bg-[#1F2937] hover:text-neutral-100 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Hotels
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-800 hover:bg-[#1F2937] hover:text-neutral-100 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Flights
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-800 hover:bg-[#1F2937] hover:text-neutral-100 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Bookings
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-800 hover:bg-[#1F2937] hover:text-neutral-100 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Login
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-800 hover:bg-[#1F2937] border border-gray-800 inline-block hover:text-neutral-100 px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Sign up
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-800 hover:bg-[#1F2937] hover:text-neutral-100 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    EN
                                </a>

                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

        </>


    )
}

export default Navbar