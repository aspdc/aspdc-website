"use client"
import UserNames from "@/app/components/ProfilePage"
import MemberCard from "@/app/components/Home/team/MemberCard"
import { useRef } from "react"
import {AiFillFacebook,AiFillInstagram,AiOutlineTwitter} from "react-icons/ai"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
export default function Register() {
    const username = useRef(null)

    const check = (e) => {
        e.preventDefault()
        console.log(username.current.value)
    }

    return (
        <div className="bg-[#FFF6E3] flex justify-center items-center h-screen">


            {/* <div className="flex flex-col w-fit ">
                <div className="w-fit" >Leetcode</div>
                <div className="w-fit" >codeforces</div>
                <div className="w-fit" >codechef</div>
                <div className="w-fit" >github</div>
            </div> */}
            {/* <UserNames/> */}
        </div>
)}