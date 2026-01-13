import React, { useEffect, useState } from "react";
import axios from "axios";
import { supabase } from "../lib/supabaseClient";

export const Profile = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Get the current session (which contains the access token)
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          setError("Failed to get session: " + sessionError.message);
          setLoading(false);
          return;
        }

        if (!session) {
          setError("Not authenticated. Please login.");
          setLoading(false);
          return;
        }

        const token = session.access_token;
        
        // Debug: Check token
        console.log("Token exists:", !!token);
        console.log("Token preview:", token ? token.substring(0, 20) + "..." : "null");

        // FIXED: Correct URL with /api prefix
        const response = await axios.get("http://127.0.0.1:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setName(response.data.user_info?.email || "User");
        setError(null);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError(err.response?.data?.detail || "Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Profile</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Profile</h1>
        <p style={{ color: "red" }}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {name}</p>
    </div>
  );
};

export default Profile;