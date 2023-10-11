import Events from "../templates/Events"

import { Link } from "react-router-dom"
export default function Navbar() {
    
    function currentPage(events){
        localStorage.setItem('currentPage',events.target.id)
        console.log(events.target.id)
    }

    return(
        <div className="gap-72 w-fit translate-y-[30%] m-auto text-gray-300 flex item-center">
                <div className="logo text-[40px] text-[#00CA08] animate-pulse font-regular ">
                    {"</>"}
                </div>
                <div className=" font-poppins text-gray-300 flex gap-10 items-center font-bold">
                    <Link className="hover:text-white  duration-200" id="home" onClick={currentPage} to='/'>Home</Link>
                    <Link className="hover:text-white duration-200" id="events" onClick={currentPage}  to='/events'>Events</Link>
                    <Link className="hover:text-white duration-200" id="resources" onClick={currentPage}  to='/resources'>Resources</Link>
                    <Link className="hover:text-white duration-200" id="gallery" onClick={currentPage}  to='/gallery'>Gallery</Link>
                    <Link className="hover:text-white duration-200" id="projects" onClick={currentPage}  to='/projects'>Projects</Link>
                    <Link className="hover:text-white duration-200" id="leaderboard" onClick={currentPage}  to='/leaderboard'>Leaderboard</Link>
                </div>

            </div>
        // </div>
    )
}