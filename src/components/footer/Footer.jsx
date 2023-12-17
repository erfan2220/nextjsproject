import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <div className="container h-[50px] flex justify-between items-center">
            <div>©2023 Erfan. all right reserved</div>
            <div>
                <div className="social flex items-center gap-[10px] ">
                <Image className="icon opacity-60 cursor-pointer" src="/1.png"  width={15} height={15}alt="Facebook"/>
                <Image className="icon opacity-60 cursor-pointer" src="/2.png"  width={15} height={15} alt="instagram"/>
                <Image className="icon opacity-60 cursor-pointer" src="/3.png"  width={15} height={15}alt="whatsapp"/>
                <Image className="icon opacity-60 cursor-pointer" src="/4.png"  width={15} height={15}alt="Telegram"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;