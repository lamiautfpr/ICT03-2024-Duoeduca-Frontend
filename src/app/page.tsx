"use client";

import { userStore } from "@/data/states/zustand/user";
import NavBar from "@/shared/components/NavBar";
import { getCookie } from "cookies-next";
import React from "react";

export default function Home() {
  const token = getCookie("accessToken") as string;
  const user = userStore();

  React.useEffect(() => {
    if (token) user.fetchUser();
  }, []);

  return (
    <>
      <NavBar user={user.data} />
      <main className="flex h-screen items-center justify-center">
        <h1>Home Page</h1>
      </main>
    </>
  );
}
