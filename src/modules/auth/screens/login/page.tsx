"use client";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FormLoginComponent } from "../../components/login/form";

export function LoginScreen() {
  const router = useRouter();
  const token = getCookie("accessToken") as string;

  React.useEffect(() => {
    if (token) {
      router.replace("/main");
    }
  }, [token]);
  return (
    <div>
      <div className="flex h-screen flex-row items-center justify-center">
        <div className="absolute right-3 top-3">
          <Image
            src="/assets/images/svg/logo.svg"
            width={150}
            height={100}
            alt="Logo"
            className="mx-auto mb-8 mt-4 h-16"
          />
        </div>
        <div
          className="h-full basis-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/png/bg-login.png')" }}
        />
        <div className="flex h-full basis-1/2 items-center justify-center">
          <FormLoginComponent />
        </div>
      </div>
    </div>
  );
}
