"use client"

import {useRef,useEffect,useState } from "react"
import {AiFillFacebook,AiFillInstagram,AiOutlineTwitter} from "react-icons/ai"
import Link from "next/link"

export default function MemberCard(props){

    const card=useRef()
    const [style,setStyle]=useState("flip-inner relative h-full duration-1000 shadow-lg [transform-style:preserve-3d] ")
    const [once,setOnce]=useState(false)
    useEffect(()=>{
        const observer=new IntersectionObserver((entries)=>{
            const entry=entries[0]
            console.log("card check",entry)
            if(entry.isIntersecting){
                setOnce(true)
                console.log(once,"once")
                setStyle("flip-inner relative duration-1000 shadow-sm [transform:rotateY(180deg)] [transform-style:preserve-3d]")
            }
            else if (!entry.isIntersecting){
                console.log(once,"once")
                setStyle("flip-inner relative [transform-style:preserve-3d]")
            }
            // else{
            //     setStyle("flip-inner relative duration-1000 shadow-sm [transform:rotateY(180deg)] [transform-style:preserve-3d]")
            // }
        })
        observer.observe(card.current)
    }
    ,[])
    useEffect(()=>{
        if(once){
            setStyle("flip-inner relative duration-1000 shadow-sm [transform:rotateY(180deg)] [transform-style:preserve-3d]")
        }
    },[once])



    return(
        <div className="font-poppins h-72 w-72 ml-[26%] ">
            <div className="flip shadow-lg perspective[1000px] m-auto" >
                <div className={style} ref={card}>
                    <div className="front [backface-visibility:hidden] h-full w-full">
                        
                    </div>

                    <div className="back flex flex-col hover:shadow-2xl justify-center items-center gap-2 h-fit w-96 text-center  bg-blue absolute [backface-visibility:hidden] [transform:rotateY(180deg)] ">
                        <div>
                            <img src={props.img} className="rounded-full m-auto mt-12" alt="" />                    
                        </div>
                        <div className="opacity-60" >
                            <h1 className="text-2xl mt-[8%] font-bold">{props.name}</h1>
                            <p className="text-sm font-semibold">{props.position}</p>
                        </div>
                        <div className="flex h-12 gap-20 mt-[12%] opacity-50 ">
                            <Link href={props.contact}  >
                                <AiFillInstagram style={{ fontSize:'30px'}}/>
                            </Link>
                            <Link href={props.facebook} >
                                <AiFillFacebook style={{ fontSize:'30px'}}/>
                            </Link>
                            <Link href={props.email}>
                                <AiOutlineTwitter style={{ fontSize:'30px' }}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}