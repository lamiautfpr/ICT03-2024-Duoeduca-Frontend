import { AuthService } from "@/modules/auth/data/services/auth";
import { IUserResponse } from "@/modules/auth/data/services/auth/responses";
import { deleteCookie } from "cookies-next";
import { create } from "zustand";
import { UserStore } from "./types";

export const userStore = create<UserStore>((set) => ({
  data: null,
  setUser: (user: IUserResponse) => set({ data: user }),
  logOut: () => {
    set({ data: null });
    deleteCookie("accessToken");
  },
  fetchUser: async () => {
    const service = new AuthService()
    service.authenticate()
    const { data } = await service.me()
    set({ data })
  }
}))