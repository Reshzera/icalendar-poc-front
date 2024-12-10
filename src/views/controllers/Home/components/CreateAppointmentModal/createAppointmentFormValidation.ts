import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createAppointmentForm = z
  .object({
    start: z.coerce.date(),
    end: z.coerce.date(),
    users: z.array(z.string()).min(1),
  })
  .refine((data) => data.start < data.end, {
    message: "End date must be greater than start date",
    path: ["end"],
  });

export type createAppointmentFormData = z.infer<typeof createAppointmentForm>;

export const createAppointmentFormResolver = zodResolver(createAppointmentForm);
