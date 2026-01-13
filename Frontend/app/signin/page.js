"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "../../utils/supabaseClient"

export default function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSignIn = async () => {
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    setLoading(false)
    
    if (error) {
      setMessage(error.message)
    } else {
      setMessage("Sign in successful!")
      console.log(data)
      // Redirect to home or dashboard
      router.push("/")
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
      <button onClick={handleSignIn} disabled={loading}>
        {loading ? "Signing in..." : "Sign In"}
      </button>
      {message && <p>{message}</p>}
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  )
}
