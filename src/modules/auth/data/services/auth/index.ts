'use client'
import { HTTPAdapter } from "@/data/services/api";
import { ILoginResponse, IUserResponse } from "./responses";
import { ILoginSchema } from "./schemas";

class AuthService extends HTTPAdapter {
  login({ email, password }: ILoginSchema) {
    return this.api.post<ILoginResponse>('/login', { email, password })
  }

  me() {
    return this.api.get<IUserResponse>('/users')
  }
}

export { AuthService };
