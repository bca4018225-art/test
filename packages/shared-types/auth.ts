export type UserRole =
  | "CITIZEN"
  | "STUDENT"
  | "FACULTY"
  | "INDUSTRY"
  | "GOVERNMENT"
  | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organizationId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  organizationId?: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}  
