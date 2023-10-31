import supabase from '../../../../supabase';
import { NextResponse } from 'next/server';

export async function GET() {
        try{
            const codeforcesData=await supabase
            .from('codeforces')
            .select('*')
            return NextResponse.json(codeforcesData.data)
        }
        catch(err){
            console.log(err,"err")
            return NextResponse.json({error:"codeforces"})
        }
}