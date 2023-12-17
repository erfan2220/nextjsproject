import React from 'react';
import Link from "next/link";
import Image from "next/image";

async function getData()
{
    const res =await fetch("http://localhost:3000/api/posts",{
        cache:"no-store",})

    if(!res.ok)
    {
        throw new Error("Failed to fetch data");
    }


    return res.json();
}


const Blog = async () =>
{
     const data= await getData();

    return (
    <div className="mainContainer flex  flex-col gap-[50px]">
        {data.map((item)=>
        <Link key={item.id} href={item._id} className="container flex gap-[50px] items-center">
            <div className="imgContainer">
                <Image
                    src={item.img}
                    alt=""
                    width={400}
                    height={250}
                    className="image"
                />
            </div>
            <div className="content">
                <h1 className="title text-3xl">{item.title}</h1>
                <p className="desc">{item.desc}</p>
            </div>
        </Link>
        )}
    </div>
)
};

export default Blog;