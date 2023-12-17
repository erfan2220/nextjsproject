"use client"
import React, {useEffect, useState} from 'react';
import useSWR from "swr";

const Dashboard = () => {

    // const [data,setData]=useState([])
    //
    // useEffect(()=>{
    //     const getData=async ()=>
    //     {
    //         const res=await fetch('https://jsonplaceholder.typicode.com/posts',{
    //             cache:"no-store"
    //         })
    //
    //         if(!res.ok)
    //         {
    //             throw new Error("Failed to fetch data")
    //         }
    //
    //         const data=await res.json()
    //         setData(data)
    //     };
    //     getData()
    // },[])

    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const {data,error} = useSWR("https://jsonplaceholder.typicode.com/posts",fetcher)

    return (
        <div>
            dashboard
        </div>
    );
};

export default Dashboard;