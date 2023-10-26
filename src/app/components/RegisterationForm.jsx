"use client"
import { FormControl, FormControlLabel, TextField ,Select,MenuItem} from "@mui/material"
import { FilledInput,Button } from '@mui/material';
import { useState } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import supabase from "../../../supabase";

export default function RegisterationForm(){

    // Get filled inoput using materia ui
    
    
    const schema=yup.object().shape({
        enrollment_no:yup.number().required(),
        name:yup.string().required(),
        leetcode:yup.string().required(),
        codeforces:yup.string().required(),
        codechef:yup.string().required(),
        github:yup.string().required(),
    })
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })
    
    
    const submit = async (data) => {
        
        console.log(data)

        const {data:users,errorFetch} = await supabase
        .from('users')
        .select('*')
        console.log(users,"users")
        
        const checkExistence = users.filter((user) => user.enrollment_no === data.enrollment_no)
        console.log(checkExistence,"checkExistence")

        if(checkExistence.length !== 0){
            alert("User already exists")
            return
        }

        const {errorInsert} = await supabase
        .from('users')
        .insert([
            {
                enrollment_no:data.enrollment_no,
                Name:data.name,
                leetcode_handle:data.leetcode,
                codeforces_handle:data.codeforces,
                codechef_handle:data.codechef,
                github_handle:data.github,
            }
        ])
        
        console.log("hello")
    }
    
    
    const [platform,setPlatform] = useState("CSE")
    
    const selectPlatform = (e) => {
        console.log(e.target.value)
        setPlatform(e.target.value)
        
    }



    return(
        <div className="h-screen">

            <div className="flex justify-center items-center h-full">
                <form onSubmit={handleSubmit(submit)} className="grid grid-cols-2 gap-2">
                    <TextField
                        id="enrollment_no"
                        label="Enrollment No"
                        variant="outlined"
                        {...register("enrollment_no")}
                        />  
                    {/* <p>{errors.enrollment_no?.message}</p> */}

                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        {...register("name")}
                        />
                    
                    <TextField
                        id="leetcode"
                        label="Leetcode Handle"
                        variant="outlined"
                        {...register("leetcode")}
                        />
                    <TextField
                        id="cf"
                        label="Codeforces Handle"
                        variant="outlined"
                        {...register("codeforces")}
                        />
                    <TextField
                        id="chjef"
                        label="Codechef Handle"
                        variant="outlined"
                        {...register("codechef")}
                        />
                    <TextField
                        id="github"
                        label="Github Handle"
                        variant="outlined"
                        {...register("github")}
                        />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Branch"
                        defaultValue={"CSE"}
                        onChange={selectPlatform}
                        value={platform}
                        className="text-black col-span-2"

                        >
                        <MenuItem value={"CSE"}>CSE</MenuItem>
                        <MenuItem value={"Civil"}>Civil</MenuItem>
                        <MenuItem value={"ICT"}>ICT</MenuItem>
                    </Select>
                    <input type="submit" className="bg-blue-500 border-0 rounded h-12"/>
                </form>
            </div>
        </div>
    )
}