"use client";

import { useEffect } from "react";

export default function AuthInitializer({ user }: { user: any }) {
  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user_id", user.id);
      sessionStorage.setItem("user_name", user.name);
      sessionStorage.setItem("user_email", user.email);
      sessionStorage.setItem("user_role", user.role);
      console.log("User data saved to sessionStorage:", user);
    } else {
      sessionStorage.removeItem("user_id");
      sessionStorage.removeItem("user_name");
      sessionStorage.removeItem("user_email");
      sessionStorage.removeItem("user_role");
        console.log("No User data found. Cleared sessionStorage.");
    }
  }, [user]);

  return null;
}
