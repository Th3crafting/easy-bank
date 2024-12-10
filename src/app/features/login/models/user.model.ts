export interface MockUser {
  email: string;
  password: string;
  role: 'client' | 'employee';
  firstName: string;
  lastName: string;
}
