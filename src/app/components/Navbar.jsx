import Link from "next/link"
import { UserButton } from "@clerk/nextjs";
import {BiLogIn} from "react-icons/bi"
import { useUser } from "@clerk/nextjs";

export default function Navbar(props) {
    const style=`hover:text-white duration-200`
    const aah="text-white"

    const {isSignedIn,user} = useUser();
// changed to aspdc

    return(
        // <div className="bg-[#013D00]">
            <div className={`gap-[20%] justify-around bg-[#013D00] h-16 w-screen flex item-center`}>
                <Link href="/">
                    <div className="logo text-[40px] hover:cursor-pointer text-[#00CA08] animate-pulse font-regular ">
                        {"</>"}
                    </div>
                </Link>
                <div className={`text ${props.textColour} flex gap-10 items-center font-light text-[100%]`}>
                    <Link href="/" className={style} id="home" >Home</Link>
                    <Link href="/pages/events" className={style} id="events">Events</Link>
                    <Link href="/pages/resources" className={style} id="resources"  >Resources</Link>
                    <Link href="/pages/gallery" className={style} id="gallery"  >Gallery</Link>
                    <Link href="/pages/projects" className={style} id="projects"  >Projects</Link>
                    <Link href="/pages/leaderboard" className={style} id="leaderboard" >Leaderboard</Link>
                </div>
                <div>

                { (isSignedIn) &&
                    <div className="items-center h-16 flex absolute right-[2%]">
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
                    <Link href={"/pages/sign-in"} >
                        <div className="w-fit text-gray-300 px-[30%] flex  ">
                            Login
                            <BiLogIn className="border-4 border-hidden m-auto text-[120%]"/>
                        </div>
                    </Link>
                }
                </div>
            </div>
        // </div>
    )
}