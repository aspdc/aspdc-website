import supabase from '../../../../supabase';
import { NextResponse } from 'next/server';

export async function GET() {
        try{
            const leetcodeData=await supabase
            .from('leetcode')
            .select('*')
            const final=leetcodeData.data
            return NextResponse.json(final)
        }
        catch(err){
            console.log(err,"err")
            return NextResponse.json({error:"leetcodeApi"})
        }
}