import { supabase } from "../../config/supabase";
import { useState } from "react";


// supabase.auth.signup();
export default function SignupForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    // The signup form logic
    const handleSignup = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Destructuring the supabase.auth object to unpack data and error properties for auth validation. Same goes for .signUp()
        const {data, error} = await supabase.auth.signUp({
            email,
            password
        });
    }

    return(
        <form onSubmit={handleSignup}>
            <h2>Create your Prepora Account</h2>
            <input 
                type="email" 
                value = {email}
                onChange={(event)=> setEmail(event.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Signup</button>
        </form>
    );
};
