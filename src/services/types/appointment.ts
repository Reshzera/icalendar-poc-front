import { UserFromApi } from "./user";

export type CreateAppointmentDto = {
  start: Date;
  end: Date;
  users: string[];
};

export type UpdateAppointmentDto = {
  start: Date;
  end: Date;
  users: string[];
};

export type AppointmentFromApi = {
  id: string;
  start: Date;
  end: Date;
  users: UserFromApi[];
};

export type AppointmentListFromApi = {
  appointments: AppointmentFromApi[];
};
