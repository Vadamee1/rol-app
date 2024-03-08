export interface User {
  id: string
  name: string
  secondName: string | null
  lastName: string
  nickname: string | null 
  email?: string;
  password?: string
  image: string | null
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}

export interface CreateUserType {
  name: string;
  lastName: string;
  email: string;
  password: string;
}
