"use client"

import {useRef,useEffect,useState } from "react"
import {AiFillFacebook,AiFillInstagram,AiOutlineTwitter} from "react-icons/ai"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function MemberCard(props){

    const [style,setStyle]=useState("flip-inner h-full w-full duration-1000 relative shadow-sm [transform:rotateY(0deg)] [transform-style:preserve-3d] ")
    const [card, inView] = useInView()
    const [flipCount,setFlipCount]=useState(0)
    // useEffect(()=>{
        
    // },[])

    useEffect(()=>{
        if(inView){
            if (flipCount%2===1){
                setFlipCount(flipCount+1)
                setStyle("flip-inner h-full w-full duration-1000 relative shadow-sm [transform:rotateY(0deg)] [transform-style:preserve-3d]")
            }
            else if (flipCount%2===0){
                setFlipCount(flipCount+1)
                setStyle("flip-inner h-full w-full duration-1000 relative shadow-sm [transform:rotateY(180deg)] [transform-style:preserve-3d]")
            }
            else{
                // setFlipCount(flipCount+1)
                setStyle("flip-inner h-full w-full duration-1000 relative shadow-sm [transform:rotateY(180deg)] [transform-style:preserve-3d]")
            }
        }
    },[inView])

    return(
        <div className="font-poppins h-96 w-96 ">
            <div className="flip shadow-lg h-full w-full [perspective:1000px] m-auto"  >
               
               <div className={style}>

                   <div className="front h-full rounded bg-white w-full absolute">
                       {/* hfslkdjfhlskdjhflksdjhf      */}
                   </div>

                   <div className="back flex bg-white rounded m-auto flex-col hover:shadow-2xl justify-center items-center gap-2 w-full h-[100%] text-center  bg-blue absolute [backface-visibility:hidden] [transform:rotateY(-180deg)]" ref={card}>
                       <div className="">
                           <img src={props.img} className="rounded-full m-auto " alt="" />                    
                       </div>
                       <div className="opacity-60" >
                           <h1 className="text-2xl mt-[8%] font-bold">{props.name}</h1>
                           <p className="text-sm font-semibold">{props.position}</p>
                       </div>
                       <div className="flex h-12 gap-20  opacity-50 ">
                           <Link href={props.contact}  >
                               <AiFillInstagram className="text-[190%] hover:text-pink-950"/>
                           </Link>
                           <Link href={props.facebook} >
                               <AiFillFacebook className="text-[190%] hover:text-[#000C36]"/>
                           </Link>
                           <Link href={props.email}>
                               <AiOutlineTwitter className="text-[190%] hover:text-[#000C36]"/>
                           </Link>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}