export type UserRole = 'admin' | 'analyst' | 'viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  company: string;
  avatarInitials: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
