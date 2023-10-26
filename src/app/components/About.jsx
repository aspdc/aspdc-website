import {poppins} from "../page"
export default function About(){

    const scrollToTeam=()=>{
        window.scrollTo({
            top:window.innerHeight,
            behavior:"smooth"
        })
    }



    return(
            <div className={`h-fit w-[50%] text-[100%] ${poppins.className} m-auto`}>
                <div className="about-us m-auto text-[330%] font-regular  w-fit ">
                    About Us
                </div>
                <div className="mt-[5%] text-[125%]">
                    "Embrace the challenges as opportunities to learn, grow, and evolve. In every obstacle lies a chance to discover your strength and resilience."
                </div>
                <div className="mt-[1%] text-[125%]">
                Welcome to Club ASPD, where coding passion thrives! 🚀 We're a vibrant community of diverse coders—students to professionals—united by our love for technology. From hackathons to workshops, we're all about fostering creativity and continuous learning. Join us in crafting solutions, building dreams, and shaping the future of tech. Let's code together at {} 
                    <span className="font-bold">
                        ASPDC! 
                    </span>
                </div>
                <div className="text-center text-[330%] mt-[60%] m-auto font-poppins " onClick={scrollToTeam} > 
                    Meet The Team
                </div>
                <div className="w-[50%] m-auto"> 
                    <hr />
                </div>
                <div className="text-center mt-[1%]">
                    Club ASPD
                </div>
            </div>
        
    )
}