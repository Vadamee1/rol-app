export type Character = {
  id?: number
  name: string
  nickname?: string | null
  age?: string | null
  occupation?: string | null
  race?: string | null
  fandom?: string | null
  image?: string | null
  description?: string | null
  userId?: string 
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}

export type CreateCharacter = {
  name: string
  nickname: string
  age: string
  occupation: string
  race: string
  fandom: string
  description: string
  userId: string
}

