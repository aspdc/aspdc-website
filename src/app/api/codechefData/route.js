import supabase from '../../../../supabase';
import { NextResponse } from 'next/server';

export async function GET() {
        try{
            const codechef=await supabase
            .from('codechef')
            .select('*')
            return NextResponse.json(codechef.data)
        }
        catch(err){
            console.log(err,"err")
            return NextResponse.json({error:"codechef"})
        }
}