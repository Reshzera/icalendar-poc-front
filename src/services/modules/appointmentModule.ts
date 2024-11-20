import { httpClient } from "../httpClient"; // HTTP client configured for backend communication
import {
  AppointmentFromApi,
  AppointmentListFromApi,
  CreateAppointmentDto,
  UpdateAppointmentDto,
} from "../types/appointment";

class AppointmentModule {
  /**
   * Fetches all appointments for the current user.
   *
   * @param {string} userId - The ID of the current user.
   * @returns {Promise<AppointmentListFromApi>} - A list of appointments.
   * @example
   * const appointments = await appointmentModule.getAppointments();
   */
  async getAppointments(): Promise<AppointmentListFromApi> {
    const { data } = await httpClient.get<AppointmentListFromApi>(
      `/appointment/all`
    );
    return data;
  }

  /**
   * Fetches details of a single appointment by its ID.
   *
   * @param {string} id - The ID of the appointment.
   * @returns {Promise<AppointmentFromApi>} - The details of the appointment.
   * @example
   * const appointment = await appointmentModule.getAppointment("appointment-id-123");
   */
  async getAppointment(id: string): Promise<AppointmentFromApi> {
    const { data } = await httpClient.get<AppointmentFromApi>(
      `/appointment/${id}`
    );
    return data;
  }

  /**
   * Creates a new appointment.
   *
   * @param {CreateAppointmentDto} appointment - The data for the new appointment.
   * @returns {Promise<AppointmentFromApi>} - The created appointment.
   * @example
   * const newAppointment = await appointmentModule.createAppointment({
   *   title: "Team Meeting",
   *   date: "2024-11-20",
   *   users: ["user-id-123", "user-id-456"],
   * });
   */
  async createAppointment(
    appointment: CreateAppointmentDto
  ): Promise<AppointmentFromApi> {
    const { data } = await httpClient.post<AppointmentFromApi>(
      `/appointment`,
      appointment
    );
    return data;
  }

  /**
   * Updates an existing appointment by its ID.
   *
   * @param {string} id - The ID of the appointment to update.
   * @param {UpdateAppointmentDto} appointment - The updated data for the appointment.
   * @returns {Promise<AppointmentFromApi>} - The updated appointment.
   * @example
   * const updatedAppointment = await appointmentModule.updateAppointment("appointment-id-123", {
   *   title: "Updated Meeting",
   *   users: ["user-id-123"],
   * });
   */
  async updateAppointment(
    id: string,
    appointment: UpdateAppointmentDto
  ): Promise<AppointmentFromApi> {
    const { data } = await httpClient.patch<AppointmentFromApi>(
      `/appointment/${id}`,
      appointment
    );
    return data;
  }

  /**
   * Deletes an appointment by its ID.
   *
   * @param {string} id - The ID of the appointment to delete.
   * @returns {Promise<AppointmentFromApi>} - The deleted appointment's data.
   * @example
   * const deletedAppointment = await appointmentModule.deleteAppointment("appointment-id-123");
   */
  async deleteAppointment(id: string): Promise<AppointmentFromApi> {
    const { data } = await httpClient.delete<AppointmentFromApi>(
      `/appointment/${id}`
    );
    return data;
  }
}

export default new AppointmentModule();
