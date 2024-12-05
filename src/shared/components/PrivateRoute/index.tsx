"use client";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React from "react";
import { PrivateRouteProps } from "../types";

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const [isContentVisible, setIsContentVisible] = React.useState(false);

  const router = useRouter();
  const token = getCookie("accessToken") as string;

  React.useEffect(() => {
    if (!token) {
      router.replace("/login");
    } else {
      setIsContentVisible(true);
    }
  }, []);

  return isContentVisible ? <>{children}</> : null;
}
