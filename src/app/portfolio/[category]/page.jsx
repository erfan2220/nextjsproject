import React from 'react';
import Button from "@/components/Button.jsx/Button";
import Image from "next/image";
import {items} from "@/app/portfolio/[category]/data";
import {notFound} from "next/navigation";

const getData =(cat)=>
{
    const data =items[cat]

    if(data)
    {
        return data
    }

    return notFound()
}

const Category = ({params}) => {

    const data=getData(params.category)

    return (
        <div className="container">
            <h1 className="catTitle text-3xl text-[#53c28b]">{params.category}</h1>
            {data.map(item =>(
            <div key={item.id} className="item flex flex-row gap-[50px] mt-[50px] mb-[100px]">

                <div className="content flex-1 flex flex-col gap-[20px] justify-center">
                    <h1 className="title text-[50px]">{item.title}</h1>
                    <p className="Desc text-[20px]">{item.desc}</p>
                    <Button text="See More" url="#"/>
                </div>

                <div className="imgContainer relative h-[500px] flex-1">
                  <Image className="object-cover" fill={true} src={item.image} alt=""/>
                </div>

            </div>
            ))}



        </div>
    );
};

export default Category;