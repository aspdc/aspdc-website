import RegistrationForm from "@/app/components/ProfilePage"
import { useRef } from "react"

export default function Register() {
    const username = useRef(null)

    const check = (e) => {
        e.preventDefault()
        console.log(username.current.value)
    }

    return (
        <div>
            {/* <RegistrationForm/> */}
            <form action="" onSubmit={check}>
                <input type="text"
                    ref={username({ required: true })}
                    />
                <button type="submit">Submit</button>
            </form>
            Register
        </div>
)}