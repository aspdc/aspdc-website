import Link from "next/link"
export default function Navbar() {
    return(
        <div className="gap-72 w-fit translate-y-[30%] m-auto text-gray-300 flex item-center">
                <div className="logo text-[40px] text-[#00CA08] animate-pulse font-regular ">
                    {"</>"}
                </div>
                <div className={`text text-gray-300 flex gap-10 items-center font-light`}>
                    <Link href="/" className="hover:text-white  duration-200" id="home" to='/'>Home</Link>
                    <Link href="/pages/events" className="hover:text-white duration-200" id="events"  to='/events'>Events</Link>
                    <Link href="/pages/resources" className="hover:text-white duration-200" id="resources"  to='/resources'>Resources</Link>
                    <Link href="/pages/gallery" className="hover:text-white duration-200" id="gallery"  to='/gallery'>Gallery</Link>
                    <Link href="/pages/projects" className="hover:text-white duration-200" id="projects"  to='/projects'>Projects</Link>
                    <Link href="/pages/leaderboard" className="hover:text-white duration-200" id="leaderboard"  to='/leaderboard'>Leaderboard</Link>
                </div>

            </div>
        // </div>
    )
}