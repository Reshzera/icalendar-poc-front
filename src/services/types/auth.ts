export type AuthRequest = {
  email: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
};
