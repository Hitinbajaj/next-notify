"use client"
import Image from "next/image"
import { toast } from "sonner"
export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      
    <div>
      {/* Image at the top */}
      <Image src="/images/bar.jpeg" alt="Top Image" width= {500} height= {500} className="w-110 object-cover mx-auto pb-10 mt-3" />
    </div>
   
    <p className="text-3xl">Notify App...</p>
    <p className="text-xl pt-2 text-slate-300">Lorem ipsum dolor sit amet.</p>

    <div className="flex justify-center items-center flex-grow">
      {/* Image in the middle */}
      <Image src="/images/Illustration.png" width= {500} height= {500} alt="Middle Image" className="max-w-md w-80" />
    </div>
    <div className="mb-8">
      {/* Button at the bottom */}
      <Image src="/images/button.png" onClick={() => toast.success('Developed by Hitin Bajaj', { position: 'top-center' })}  width= {500} height= {500} alt="button Image" className="max-w-md w-96 mb-3" />
      

    </div>
  </div>
  )
}
