import Image from 'next/image'
import Button from "@/components/Button.jsx/Button";

const About = () => {
    return (
        <div className="container">
            <div className="imgContainer relative w-full h-[300px]">
                <Image className="img object-cover grayscale" src="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400"
                       fill={true} />

            <div className="imgText absolute text-white bottom-1.5 left-1.5  bg-[#53c28b] p-[5px]">
                <h1 className="imgTitle text-3xl">Digital Storytellers</h1>
                <h2 className="imgDesc text-xl">Handcrafting
                    award winning digital experiences</h2>
            </div>
            </div>
            <div className="textContainer flex gap-6">
                <div className="item flex-1 flex-col gap-[30px] mt-[50px]">
                    <h1 className="title text-3xl">Who Are We?</h1>
                    <p className="itemDesc text-[18px] font-light text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br/><br/>
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="item flex-1 flex-col gap-[30px] mt-[50px] ">
                    <h1 className="title text-3xl">Who Are Do?</h1>
                    <p className="itemDesc text-[18px] font-light text-justify pb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        <br/>
                        <br />-Dynamic Websites
                        <br/>
                        <br/>-Fast and Handy
                        <br/>
                        <br/>-Mobile Apps
                        <br/>
                    </p>
                    <Button url="contact" text="contact"/>
                </div>
            </div>
        </div>
    );
};

export default About;