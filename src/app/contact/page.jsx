

import React from 'react';
import Button from "@/components/Button.jsx/Button";
import Image from "next/image";
import contact from "../../../public/contact.png"

const Page = () => {


    return (
        <div className="container">
            <h1 className="title text-[60px] mb-[100px] text-center">Let's Keep in Touch</h1>
            <div className="content flex gap-[100px] items-center">
                <div className="imgContainer relative flex-1 h-[500px]">
                    <Image className="w-full object-contain animate-move" src={contact} alt="contact" />
                </div>
                <form className="form flex flex-1 flex-col gap-[20px]">
                    <input className="input p-[20px] bg-transparent text-[#bbb] border-[3px] border-solid border-white" type="text" placeholder="name" />
                    <input className="input p-[20px] bg-transparent text-[#bbb] border-[3px] border-solid border-white" type="text" placeholder="email" />
                    <textarea className="textarea p-[20px] bg-transparent text-[#bbb] border-[3px] border-solid border-white" placeholder="message" cols="30" rows="10"></textarea>
                    <Button url="#" text="send" />
                </form>
            </div>
        </div>
    );
};

export default Page;