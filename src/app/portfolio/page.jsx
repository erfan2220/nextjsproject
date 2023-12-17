import React from 'react';
import Link from "next/link";

const Portfolio = () => {
    return (
        <div className="container">
            <h1 className="selectTitle my-[20px] mx-0">Choose a gallery</h1>
            <div className="items flex gap-[50px]">
                <Link href="/portfolio/Illustration" style={{backgroundImage:"url('illustration.png')", backgroundSize: "contain",backgroundRepeat:"no-repeat"}} className="item border-4 border-solid border-white rounded relative w-[300px] h-[300px]">
                    <span  className="title absolute right-[10px] bottom-[10px] text-[27px] font-bold ">Illustrations</span>
                </Link>
                <Link href="/portfolio/websites"  style={{backgroundImage:"url('websites.jpg')", backgroundSize: "cover",backgroundRepeat:"no-repeat"}}
                      className="item border-4 border-solid border-white rounded relative w-[300px] h-[300px]">
                    <span className="title absolute right-[10px] bottom-[10px] text-[30px] font-bold ">websites</span>
                </Link>
                <Link href="/portfolio/Application" style={{backgroundImage:"url('apps.jpg')", backgroundSize: "cover",backgroundRepeat:"no-repeat"}}
                      className="item border-4 border-solid border-white rounded relative w-[300px] h-[300px]">
                    <span className="title absolute right-[10px] bottom-[10px] text-[30px] font-bold ">Application</span>
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;