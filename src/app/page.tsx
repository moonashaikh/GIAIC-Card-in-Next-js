import React from "react";
import Image from "next/image";

export default function IDCard() {
  return (
    <div className=" flex flex-col min-h-screen bg-white">
<div className=" flex-grow  flex items-center justify-center p-6">
  <div className="bg-slate-200 p-2 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-center border-4 border-sky-300">
    
{/* background img */}

<div className="absolute inset-0 flex items-center justify-center">
 <div className="relative w-full h-full max-width[400px] max-height[300px]">
 
 <Image 
src="/images/kamran.png"
alt="kamran.png"
width={700}
height={300}
objectFit="cover"
className="opacity-10"/>

</div>
</div>

{/*left section  */}
<div className="w-2/3 pr-4 pt-16 relative z-10">

{/* logo */}
<img
src="/images/logo.png"
alt="card logo"
className="absolate top-[-20px] left-0 w-16 h-18 z-10"/>
    <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Name:-</strong> </span>
      <span className="text-black">Rashida Shaikh</span>

      </p>

      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Roll-No:-</strong> </span>
      <span className="text-black">0024489</span>

      </p>
      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Distance Learning:-</strong> </span>
      <span className="text-black">NO</span>

      </p>
      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>City:-</strong> </span>
      <span className="text-black">Karachi</span>

      </p>
      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Centre:-</strong> </span>
      <span className="text-black">Governor House</span>

      </p>
      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Day/Time:-</strong> </span>
      <span className="text-black">Saturday 2:00 pm to 5:00Pm</span>

      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Batch:-</strong> </span>
      <span className="text-black">1</span>

      </p>
      </p>
   
    


     {/* button section */}
     <div className="flex flex-col mt-4">
        <button className="relative w-full p-1 rounded-lg border border-gray-300 bg-blue-900 text-white items-center justify-center flex">

      
      <span className="absolute inset-0 bg-slate-500" 
      style={{ width: "50%" }}> 
     
       </span>

       <span className="relative z-10">Q1 & WMD </span>
       </button>
            </div>  
      </div>

{/* Right Section */}
<div className="w-1/3 text-center relative z-10">
<Image 
src="/images/pic.png"
alt="profile picture"
width={700}
height={800}
// objectFit="cover"
className="rounded-1g mb-6 w-full"/> 
<p border-t-2 border-t-slate-400  pt-2 font-bold text-skyblue-300 at-10 text-2xl>Authorized Signature</p>

</div>



    </div>  
</div>
</div>
  ); 

}