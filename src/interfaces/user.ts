export interface User {
  id?: number;
  name: string;
  secondNam?: string;
  lastName: string;
  nickname?: string;
  email: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface CreateUserType {
  name: string;
  lastName: string;
  email: string;
  password: string;
}
