export type UpdateUserDto = {
  email?: string;
  name?: string;
};

export type CreateUserDto = {
  email: string;
  password: string;
  name: string;
};

export type UserFromApi = {
  id: string;
  email: string;
  name: string;
};

export type UsersListFromApi = {
  users: UserFromApi[];
};
