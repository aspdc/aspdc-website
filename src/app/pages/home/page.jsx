import About from "../../components/About"
import Hero from "../../components/Hero"
import Team from "../../components/Team"

export default function Home() {


    return(
        <div className="h-full">
            <Hero/>
            <About/>
            <Team/>
        </div>
    )
}