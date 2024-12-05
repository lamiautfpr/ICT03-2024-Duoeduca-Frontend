"use client";
import { userStore } from "@/data/states/zustand/user";
import React from "react";

export default function MainApp() {
  const user = userStore();

  React.useEffect(() => {
    user.fetchUser();
  }, []);

  return (
    <main className="flex h-screen items-center justify-center">
      <pre>{JSON.stringify(user.data, null, 2)}</pre>
    </main>
  );
}
