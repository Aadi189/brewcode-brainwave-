import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email, password
    });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Signin successful! Welcome back.");
      const {data}=await supabase.auth.getSession();
      const accessToken=data.session?.access_token;
      if(accessToken){
        localStorage.setItem("token",accessToken);
      }
      navigate("/")
    }
  }

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignin}>Sign In</button>
      {message && <p>{message}</p>}
    </div>
  )

};