"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "../../utils/supabaseClient"

export default function Register() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleregister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email, password
    });
    if (error) {
      setMessage(error.message)
    } else {
      setMessage("Registration successful! Please check your email to verify your account.")
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