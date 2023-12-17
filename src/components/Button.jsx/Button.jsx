import React from 'react';
import Link from "next/link";

const Button = ({text,url}) => {
    return (
        <Link href={url}>
            <button className="container
            p-[20px] cursor-pointer text-white bg-[#53c28b] border-none rounded w-max ">{text}</button>
        </Link>
    );
};

export default Button;