import {useRef,useEffect,useState } from "react"
import MemberCard from "./MemberCard"
import Footer from "./Footer"


export default function Team(){
    // const [check,setCheck]=useState(false)
    // const teamRef=useRef()
    // useEffect(()=>{
    //     const observer=new IntersectionObserver((entries)=>{
    //         const entry=entries[0]
    //         setCheck(entry.isIntersecting)
    //         console.log("team check",entry)
    //     })
    //     observer.observe(teamRef.current)
    // },[])
    return (
        <div className="h-fit">

            <div className="grid-cols-3 grid gap-44 w-[80%] m-auto">

                <MemberCard 
                    name="Devvrat Singh"
                    position="Treasurer"
                    img="https://i.ibb.co/rytYmFm/dp.png"
                    facebook="https://www.facebook.com/devvrat.singh.754/"
                    email="devvratsingh@gmail.com"
                    contact="tel:+91 9876543210"
                    
                    />
                <MemberCard 
                    name="Devvrat Singh"
                    position="Treasurer"
                    img="https://i.ibb.co/rytYmFm/dp.png"
                    facebook="https://www.facebook.com/devvrat.singh.754/"
                    email="devvratsingh@gmail.com"
                    contact="tel:+91 9876543210"
                    
                    />
                <MemberCard 
                    name="Devvrat Singh"
                    position="Treasurer"
                    img="https://i.ibb.co/rytYmFm/dp.png"
                    facebook="https://www.facebook.com/devvrat.singh.754/"
                    email="devvratsingh@gmail.com"
                    contact="tel:+91 9876543210"
                    
                    />
                <MemberCard 
                    name="Devvrat Singh"
                    position="Treasurer"
                    img="https://i.ibb.co/rytYmFm/dp.png"
                    facebook="https://www.facebook.com/devvrat.singh.754/"
                    email="devvratsingh@gmail.com"
                    contact="tel:+91 9876543210"
                    
                    />
                <MemberCard 
                    name="Devvrat Singh"
                    position="Treasurer"
                    img="https://i.ibb.co/rytYmFm/dp.png"
                    facebook="https://www.facebook.com/devvrat.singh.754/"
                    email="devvratsingh@gmail.com"
                    contact="tel:+91 9876543210"
                    
                    />
                <MemberCard 
                    name="Devvrat Singh"
                    position="Treasurer"
                    img="https://i.ibb.co/rytYmFm/dp.png"
                    facebook="https://www.facebook.com/devvrat.singh.754/"
                    email="devvratsingh@gmail.com"
                    contact="tel:+91 9876543210"
                    
                    />
                <MemberCard 
                    name="Devvrat Singh"
                    position="Treasurer"
                    img="https://i.ibb.co/rytYmFm/dp.png"
                    facebook="https://www.facebook.com/devvrat.singh.754/"
                    email="devvratsingh@gmail.com"
                    contact="tel:+91 9876543210"
                    
                    />
                <MemberCard 
                    name="Devvrat Singh"
                    position="Treasurer"
                    img="https://i.ibb.co/rytYmFm/dp.png"
                    facebook="https://www.facebook.com/devvrat.singh.754/"
                    email="devvratsingh@gmail.com"
                    contact="tel:+91 9876543210"
                    
                    />
                <MemberCard 
                    name="Devvrat Singh"
                    position="Treasurer"
                    img="https://i.ibb.co/rytYmFm/dp.png"
                    facebook="https://www.facebook.com/devvrat.singh.754/"
                    email="devvratsingh@gmail.com"
                    contact="tel:+91 9876543210"
                    
                    />
                </div>
            <Footer/>

        </div>
    )
}