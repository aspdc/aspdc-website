import Link from "next/link"
import { UserButton } from "@clerk/nextjs";
export default function Navbar(props) {
    const style=`hover:${props.hoverColour} duration-200`
    const aah="text-white"
    return(
        <div className="bg-[#013D00] w-screen flex items-center ">
            <div className={`gap-96 justify-between w-fit m-auto flex item-center`}>
                <div className="logo text-[40px] text-[#00CA08] animate-pulse font-regular ">
                    {"</>"}
                </div>
                <div className={`text ${props.textColour}  flex gap-10 items-center font-light text-[18px] `}>
                    <Link href="/" className={style} id="home" >Home</Link>
                    <Link href="/pages/events" className={`hover:${props.hoverColour} duration-200`} id="events">Events</Link>
                    <Link href="/pages/resources" className={style} id="resources"  >Resources</Link>
                    <Link href="/pages/gallery" className={style} id="gallery"  >Gallery</Link>
                    <Link href="/pages/projects" className={style} id="projects"  >Projects</Link>
                    <Link href="/pages/leaderboard" className={style} id="leaderboard" >Leaderboard</Link>
                    <UserButton afterSignedOutUrl="/" />
                </div>
            </div>
        </div>
        // </div>
    )
}