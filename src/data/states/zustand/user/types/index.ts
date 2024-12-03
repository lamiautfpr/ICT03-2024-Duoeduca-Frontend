import { IUserResponse } from "@/modules/auth/data/services/auth/responses"

export type UserStore = {
  data: IUserResponse | null
  setUser: (data: IUserResponse) => void
  logout: () => void
  feathUser: () => void
}