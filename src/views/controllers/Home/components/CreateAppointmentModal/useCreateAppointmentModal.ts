import { useForm } from "react-hook-form";
import {
  createAppointmentFormData,
  createAppointmentFormResolver,
} from "./createAppointmentFormValidation";
import appointmentModule from "../../../../../services/modules/appointmentModule";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import userModule from "../../../../../services/modules/userModule";
import { AppointmentToEdit } from "../../../../Private/Home/components/CreateAppointmentModal";

type createAppointmentModalHook = {
  appointmentToEdit?: AppointmentToEdit;
  onClose: () => void;
};

export default function useCreateAppointmentModal({
  appointmentToEdit,
  onClose,
}: createAppointmentModalHook) {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm<createAppointmentFormData>({
    resolver: createAppointmentFormResolver,
    defaultValues: {
      start: appointmentToEdit?.start ?? undefined,
      end: appointmentToEdit?.end ?? undefined,
      users: appointmentToEdit?.users ?? [],
    },
  });

  const queryClient = useQueryClient();

  const users = watch("users");

  const { data: allUsers } = useQuery({
    queryKey: ["users", "all"],
    queryFn: () => userModule.getAllUsers(),
  });

  const { mutateAsync: createAppointment, isPending: isCreateUserPending } =
    useMutation({
      mutationFn: (data: createAppointmentFormData) =>
        appointmentModule.createAppointment(data),
    });

  const { mutateAsync: editAppointment, isPending: isEditingPending } =
    useMutation({
      mutationFn: ({ id, ...data }: AppointmentToEdit) =>
        appointmentModule.updateAppointment(id, data),
    });

  const { mutateAsync: deleteAppointment, isPending: isDeletingPending } =
    useMutation({
      mutationFn: (id: string) => appointmentModule.deleteAppointment(id),
    });

  const handleDeleteAppointment = async () => {
    if (!appointmentToEdit) return;

    await deleteAppointment(appointmentToEdit.id);
    queryClient.invalidateQueries({
      queryKey: ["users", "appointments"],
    });
    onClose();
  };

  const onSubmit = async (data: createAppointmentFormData) => {
    try {
      if (!!appointmentToEdit) {
        await editAppointment({
          id: appointmentToEdit.id,
          ...data,
        });
        queryClient.invalidateQueries({
          queryKey: ["users", "appointments"],
        });
        onClose();
        return;
      }

      await createAppointment(data);
      queryClient.invalidateQueries({
        queryKey: ["users", "appointments"],
      });
      onClose();
    } catch {
      setError("users", {
        type: "manual",
        message: "Unexpected error",
      });
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    allUsers,
    isLoading: isCreateUserPending || isEditingPending,
    isDeletingPending,
    setValue,
    users,
    isEditingModal: !!appointmentToEdit,
    handleDeleteAppointment,
  };
}
