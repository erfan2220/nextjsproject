"use client"

import React, {useContext} from 'react';
import {ThemeContext} from "../../context/ThemeContext";

const DarkModeToggle = () => {
    const {toggle,mode}=useContext(ThemeContext)
    return (
        <div className="container p-[2px] relative items-center flex justify-between  w-[50px] h-[24px] border-2 border-solid border-[#53c28570] rounded-[30px]"
        onClick={toggle}>
            <div className="icon text-[12px]">🌙</div>
            <div className="icon text-[10px]">🌟</div>
            <div className="ball w-[15px] h-[15px] bg-[#53c28b] rounded-[50%] absolute cursor-pointer"
            style={mode=== "light"? {left:"2px"}:{right:"2px"}}
            />

        </div>
    );
};

export default DarkModeToggle;