import codechefData from "@/app/lib/codechefData"

export default async function codechef(){
    const data=await codechefData()
    console.log(data,"data")
    return(
        <div>
            Codechef
        </div>
    )
}