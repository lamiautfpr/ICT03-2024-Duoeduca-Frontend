export type IUser = {
  id: number
  status: number
  name: string
  email: string
  city: string
  avatar: string
  description: string
  created_games: string
  educationLevel: string
  role: {
    id: number
    name: string
  }
  instituition: {
    id: number
    name: string
    acronym: string
  }
}