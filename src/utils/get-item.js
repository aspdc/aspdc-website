// import { createClient } from "@supabase/supabase-js"
import supabase from "../../supabase"

// import { cache } from 'react'
 
// export const revalidate = 3600 // revalidate the data at most every hour


export const getItem = async () => {
    const item = await supabase.from('userData').select()
    return item
}