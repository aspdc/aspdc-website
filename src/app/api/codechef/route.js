import { NextResponse } from 'next/server'

// export default async function GET(req, res) {

    // const data=await fetch("https://codechef-api.vercel.app/devvrat_singh2")
    // const data2=await data.json()

    // return new NextResponse(JSON.stringify(data2), {
    //     headers: {
    //         'status': 400,
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    //       'content-type': 'application/json',
    //     },
    //   })
    
// }

export const getStaticProps = async () => {
    const data=await fetch("https://codeforces.com/api/user.info?handles=devvrat_singh2")
    const data2=await data.json()
    return data2
}