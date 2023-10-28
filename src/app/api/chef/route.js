import supabase from "../../../../supabase"

// export default async function GET(request) {
//     const URL="https://jsonplaceholder.typicode.com/posts"
//     const response = await fetch(URL)
//     const data = await response.json()
//     return data
// }

export default async function GET(request) {
    const data=await supabase
        .from('users')
        .select('*');
    console.log(data,"data");
    return data
}

// import supabase from "../../../../supabase"
//     const { data, error } = await supabase
//         .from('users')
//         .select('*');

// export default async function libChef() {
//     const { data, error } = await supabase
//         .from('users')
//         .select('*');

//     if (error) {
//         console.error('Error fetching data:', error);
//         return null;
//     }

//     console.log(data);
//     return data;
// }

// import { NextResponse } from "next/server";

// const url="https://jsonplaceholder.typicode.com/todos"

// export default async function GET() {
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data[0],"data");

//     return NextResponse.json(data)
// }

