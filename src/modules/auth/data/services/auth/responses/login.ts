export type ILoginResponse = {
  name: string
  email: string
  role: {
    id: number
    name: string
  }
  token: string
}