"use client";
import { userStore } from "@/data/states/zustand/user";
import SecureTemplatesComponents from "@/shared/components/templates/SecureTemplates";
import { Props } from "@/shared/components/types";
import React from "react";

export default function SecureTemplate({ children }: Props) {
  const user = userStore();

  React.useEffect(() => {
    user.fetchUser();
  }, []);

  return <SecureTemplatesComponents>{children}</SecureTemplatesComponents>;
}
