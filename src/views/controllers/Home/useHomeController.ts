import { useQuery } from "@tanstack/react-query";
import appointmentModule from "../../../services/modules/appointmentModule";

export default function useHomeController() {
  const { data, isLoading } = useQuery({
    queryKey: ["users", "appointments"],
    queryFn: () => appointmentModule.getAppointments(),
  });

  return {
    appointments: data,
    isLoadingAppointments: isLoading,
  };
}
