import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import { useNavigate } from "react-router-dom"

export const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const navigate=useNavigate()

  const handleregister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email, password
    });
    if (error) {
      setMessage(error.message)
    } else {
      setMessage("Registration successful! Please check your email to verify your account.")
      navigate("/signin")
      console.log(data)
    }
  }

  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleregister}>Register</button>
      {message && <p>{message}</p>}
    </div>
  )
}