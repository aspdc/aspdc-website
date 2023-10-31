import About from "../../components/Home/about/About"
import Hero from "../../components/Home/hero/Hero"
import Team from "../../components/Home/team/Team"

export default function Home() {


    return(
        <div className="h-full">
            <Hero/>
            <About/>
            <Team/>
        </div>
    )
}