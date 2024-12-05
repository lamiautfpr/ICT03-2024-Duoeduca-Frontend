import { IUser } from "@/shared/types";
import React from "react";

export type Props = {
  children: React.ReactNode;
}

export type NavBarProps = {
  user?: IUser | null;
}

export type PrivateRouteProps = {
  children: React.ReactNode;
};