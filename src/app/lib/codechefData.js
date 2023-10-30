export default async function codechefData(req, res) {
    const data=await fetch("https://codechef-api.vercel.app/devvrat_singh2")
    const check=await data.json()
    return check
}