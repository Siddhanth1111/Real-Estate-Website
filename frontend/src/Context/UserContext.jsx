import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [credits, setCredits] = useState(0);
  const [loading, setLoading] = useState(true); // <-- loading state

  // Load user from localStorage initially
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false); // Mark as loaded
  }, []);

  // Fetch credits if user is present
  useEffect(() => {
    const fetchCredits = async () => {
      if (!user) return;

      try {
        const res = await fetch("http://localhost:3000/credits", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();
        setCredits(data.totalCredits);
      } catch (err) {
        console.error("Error fetching credits:", err);
      }
    };

    fetchCredits();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, credits, setCredits, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
