"use client"
import {  TextField ,Select,MenuItem,Button} from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import supabase from "../../../../supabase";
import { dosis } from "../../page";

export default function RegisterationForm(){

    const schema=yup.object().shape({
        enrollment_no:yup.number().required(),
        name:yup.string().required(),
        leetcode:yup.string(),
        codeforces:yup.string(),
        codechef:yup.string(),
        github:yup.string(),
    })
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })
    
        

    const submit = async (data) => {
        
        const {data:users,errorFetch} = await supabase
        .from('userData')
        .select('*')
        
        const checkExistence = users.filter((user) => user.enrollment_no === data.enrollment_no)
        const checkExistenceName = users.filter((user) => user.leetcode_handle === data.leetcode)
        const checkExistenceCodeforces = users.filter((user) => user.codeforces_handle === data.codeforces)
        const checkExistenceCodechef = users.filter((user) => user.codechef_handle === data.codechef)
        const checkExistenceGithub = users.filter((user) => user.github_handle === data.github)

        if(checkExistence.length !== 0){
            alert("User already exists")
            return
        }
        if(checkExistenceName.length !== 0){
            alert("Leetcode handle already exists")
            return
        }
        if(checkExistenceCodeforces.length !== 0){
            alert("Codeforces handle already exists")
            return
        }
        if(checkExistenceCodechef.length !== 0){
            alert("Codechef handle already exists")
            return
        }
        if(checkExistenceGithub.length !== 0){
            alert("Github handle already exists")
            return
        }

        

        const getCfData=async()=>{
            const codeforces = await fetch('../../api/postData',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    data:data
                })
            })
            const check=await codeforces.json()
            console.log(check,"check")
        }
        
        getCfData()
        const {errorInsert} = await supabase
        .from('userData')
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

    const [alertMsg,setAlertMsg] = useState("")
    const baseAlertStyle = `absolute transition duration-500 top-10 h-[8%] px-10 flex font-semibold justify-center items-center text-center right-4 text-2xl bg-[#00CA08] ${dosis.className} opacity-0 `
    const [alertStyle,setAlertStyle] = useState(baseAlertStyle)

    const alerting=async(msg)=>{
        setAlertStyle(baseAlertStyle+`opacity-100 transition duration-[2000ms] -translate-x-20 `)
        setAlertMsg(msg)
        await new Promise(r => setTimeout(r, 4000));
        setAlertStyle(baseAlertStyle)
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

                <Button onClick={alerting}>
                    Click me
                </Button>

                <div className={alertStyle}>
                    Welcome to the Club {}
                </div>
            </div>
        </div>
    )
}