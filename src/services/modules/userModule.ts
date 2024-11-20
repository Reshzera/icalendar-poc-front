import { httpClient } from "../httpClient"; // HTTP client configured for the backend
import { CreateUserDto, UpdateUserDto, UserFromApi } from "../types/user";

class UserModule {
  /**
   * Creates a new user by sending a POST request to the backend.
   *
   * @param {CreateUserDto} user - The data of the user to be created.
   * @returns {Promise<UserFromApi>} - The created user's data.
   * @example
   * const newUser = await userModule.createUser({
   *   email: "example@mail.com",
   *   password: "securePassword",
   *   name: "John Doe",
   * });
   */
  async createUser(user: CreateUserDto): Promise<UserFromApi> {
    const { data } = await httpClient.post<UserFromApi>("/user", user);
    return data;
  }

  /**
   * Updates the current user's information by sending a PATCH request to the backend.
   *
   * @param {UpdateUserDto} user - The updated data for the user.
   * @returns {Promise<UserFromApi>} - The updated user's data.
   * @example
   * const updatedUser = await userModule.updateUser({
   *   email: "new-email@mail.com",
   *   name: "Jane Doe",
   * });
   */
  async updateUser(user: UpdateUserDto): Promise<UserFromApi> {
    const { data } = await httpClient.patch<UserFromApi>("/user/", user);
    return data;
  }

  /**
   * Retrieves the current authenticated user's data by sending a GET request to the backend.
   *
   * @returns {Promise<UserFromApi>} - The current user's data.
   * @example
   * const currentUser = await userModule.getCurrentUser();
   */
  async getCurrentUser(): Promise<UserFromApi> {
    const { data } = await httpClient.get<UserFromApi>("/user/me");
    return data;
  }
}

export default new UserModule();
