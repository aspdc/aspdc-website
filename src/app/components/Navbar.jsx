import Link from "next/link"
import { UserButton } from "@clerk/nextjs";
import {BiLogIn} from "react-icons/bi"
import { useUser } from "@clerk/nextjs";

export default function Navbar(props) {
    const style="hover:text-white duration-200"
    const {isSignedIn,user} = useUser();



    // const addPulse=(e)=>{
    //     e.target.classList.add("animate-pulse-once")
    //     console.log(e.target.class)
        
    // }


    return(
        // <div className="bg-[#013D00]">
            <div className={`gap-[20%] justify-around w-[100%] bg-[#013D00] h-16 flex item-center`}>
                <Link href="/">
                    <div className="logo text-[40px] hover:cursor-pointer text-[#00CA08] animate-pulse font-regular ">
                        {"</>"}
                    </div>
                </Link>
                <div className={`text ${props.textColour} flex gap-10 items-center font-light text-[100%]`}>
                    <Link href="/" className={style} id="home" >Home</Link>
                    <Link href="/pages/events" className={style}  id="events">Events</Link>
                    <Link href="/pages/resources" className={style} id="resources"  >Resources</Link>
                    <Link href="/pages/gallery" className={style} id="gallery"  >Gallery</Link>
                    <Link href="/pages/projects" className={style} id="projects"  >Projects</Link>
                    <Link href="/pages/leaderboard" className={style} id="leaderboard" >Leaderboard</Link>
                </div>
                <div className="flex items-center">

                { (isSignedIn) &&
                    <div className="items-center text-white h-16 flex ">
                        <div className="">
                            <UserButton className="" afterSignedOutUrl="/" />
                        </div>
                        <div className="">
                            {user.firstName}
                        </div>
                    </div>
                }
                {
                    (!isSignedIn) && 
                    <Link href={"/pages/sign-up"} >
                        <div className="w-min text-gray-300 px-[30%] flex">
                            Login
                            <BiLogIn className="border-4 w-fit border-hidden m-auto text-[120%]"/>
                        </div>
                    </Link>
                }
                </div>
            </div>
    )
}