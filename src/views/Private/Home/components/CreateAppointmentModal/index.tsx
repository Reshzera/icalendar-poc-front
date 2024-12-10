import React from "react";
import Input from "../../../../../components/Input";
import useCreateAppointmentModal from "../../../../controllers/Home/components/CreateAppointmentModal/useCreateAppointmentModal";
import { CreateAppointmentContainer } from "./styles";
import AutoComplete from "../../../../../components/AutoCompleteWithTags";
import { ThreeCircles } from "react-loader-spinner";

// import { Container } from './styles';
export type AppointmentToEdit = {
  id: string;
  start: Date;
  end: Date;
  users: string[];
};
type CreateAppointmentModalProps = {
  appointmentToEdit?: AppointmentToEdit;
  onClose: () => void;
};

const CreateAppointmentModal: React.FC<CreateAppointmentModalProps> = ({
  appointmentToEdit,
  onClose,
}) => {
  const {
    allUsers,
    errors,
    handleSubmit,
    register,
    setValue,
    users,
    isLoading,
    isDeletingPending,
    isEditingModal,
    handleDeleteAppointment,
  } = useCreateAppointmentModal({ appointmentToEdit, onClose });

  const autoCompleteOptions =
    allUsers?.users?.map((user) => ({
      value: user.id,
      label: user.email,
    })) ?? [];

  return (
    <CreateAppointmentContainer onSubmit={handleSubmit}>
      <Input
        label="Start"
        type="datetime-local"
        error={errors.start?.message}
        {...register("start")}
      />

      <Input
        label="End"
        type="datetime-local"
        error={errors.end?.message}
        {...register("end")}
      />

      <AutoComplete
        error={errors.users?.message}
        label="Users"
        options={autoCompleteOptions}
        tags={users ?? []}
        setTags={(tags) => setValue("users", tags)}
      />

      <button type="submit" className="submit">
        {!isLoading ? (
          "Create"
        ) : (
          <ThreeCircles visible={true} height="20" width="20" color="#232426" />
        )}
      </button>

      {isEditingModal && (
        <button
          type="button"
          className="delete"
          onClick={() => handleDeleteAppointment()}
        >
          {!isDeletingPending ? (
            "Delete"
          ) : (
            <ThreeCircles
              visible={true}
              height="20"
              width="20"
              color="#232426"
            />
          )}
        </button>
      )}
    </CreateAppointmentContainer>
  );
};

export default CreateAppointmentModal;
