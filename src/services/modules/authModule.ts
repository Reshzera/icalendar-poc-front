import { httpClient } from "../httpClient"; // HTTP client configured for the backend
import { AuthRequest, AuthResponse } from "../types/auth";

class AuthModule {
  /**
   * Logs in a user by sending a POST request to the `/login` endpoint.
   *
   * @param {AuthRequest} credentials - The user's credentials (email and password).
   * @returns {Promise<AuthResponse>} - The authentication response, typically including a token and user information.
   * @example
   * const authResponse = await authModule.login({
   *   email: "example@mail.com",
   *   password: "securePassword",
   * });
   */
  async login(credentials: AuthRequest): Promise<AuthResponse> {
    const { data } = await httpClient.post<AuthResponse>("/login", credentials);
    return data;
  }
}

export default new AuthModule();
