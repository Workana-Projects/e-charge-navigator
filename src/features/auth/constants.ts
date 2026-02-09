import { LoginCredentials, User } from './types';

export const DEFAULT_CREDENTIALS: LoginCredentials = {
  email: 'demo@pluggon.com.br',
  password: 'demo123',
};

export const MOCK_USER: User = {
  id: '1',
  name: 'Guilherme B.',
  email: 'demo@pluggon.com.br',
  role: 'admin',
  company: 'Pluggon',
  avatarInitials: 'GB',
};
