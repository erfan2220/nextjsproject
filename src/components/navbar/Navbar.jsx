import React from 'react';
import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle/DarkModeToggle";


const links=[
    {
        id:1,
        title:"Home",
        url:"/",
    },
    {
        id:2,
        title:"Portfolio",
        url:"/portfolio",
    },
    {
        id:3,
        title:"Blog",
        url:"/blog",
    },
    {
        id:4,
        title:"About",
        url:"/about",
    },
    {
        id:5,
        title:"Contact",
        url:"/contact",
    },
    {
        id:6,
        title:"Dashboard",
        url:"/dashboard",
    },
];


const Navbar = () => {
    return (
        <div className="container h-[100px] flex justify-between items-center">
            <Link href="/" className="logo text-[22px] font-bold">Test page</Link>
            <div className="links flex  items-center gap-3.5">
                <DarkModeToggle/>
            {links.map((link)=>
                (
                    <Link key={link.id} href={link.url}>{link.title}</Link>
            ))}
            <button  className="logout bg-[#53c28b] text-white p-[5px] border-none rounded">logout</button>
            </div>
        </div>
    );
};

export default Navbar;