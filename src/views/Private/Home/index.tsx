import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import Calendar, { CalendarType } from "../../../components/Calendar";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";
import useAuth from "../../../hooks/useAuth";
import useHomeController from "../../controllers/Home/useHomeController";
import CreateAppointmentModal, {
  AppointmentToEdit,
} from "./components/CreateAppointmentModal";
import {
  CalendarControlContainer,
  CreateEventButton,
  HomeContainer,
  HomeDescription,
  HomeHeader,
  HomeLogo,
  HomeTitle,
  LogoutButton,
} from "./styles";

const CALENDAR_OPTIONS = [
  {
    value: "day",
    label: "Day",
  },
  {
    value: "week",
    label: "Week",
  },
  {
    value: "month",
    label: "Month",
  },
];

const Home: React.FC = () => {
  const { appointments: appointmentsResponse } = useHomeController();
  const { user, signout } = useAuth();

  const [selectedType, setSelectedType] = useState<CalendarType>("month");
  const [openCreateEvent, setOpenCreateEvent] = useState<boolean>(false);
  const [selectedAppointment, setSelectedAppointment] = useState<
    AppointmentToEdit | undefined
  >();

  const appointments = appointmentsResponse?.appointments ?? [];

  const calendarAppointments = appointments.map((appointment) => ({
    id: appointment.id,
    label: appointment.users.map((user) => user.name).join(", "),
    start: appointment.start,
    end: appointment.end,
  }));

  return (
    <HomeContainer>
      <HomeHeader>
        <HomeLogo>
          <BiCalendar />
          <HomeTitle>iCalendar</HomeTitle>
        </HomeLogo>
        <LogoutButton
          onClick={() => {
            signout();
          }}
        >
          Logout
        </LogoutButton>
      </HomeHeader>
      <HomeDescription>
        <h1>Welcome Back, {user?.name}!</h1>
        <p>
          This is a simple calendar application that allows you to create and
          manage events.
        </p>
      </HomeDescription>
      <CalendarControlContainer>
        <CreateEventButton onClick={() => setOpenCreateEvent(true)}>
          Create Event
        </CreateEventButton>
        <Select
          options={CALENDAR_OPTIONS}
          value={selectedType}
          onChange={(value) => setSelectedType(value as CalendarType)}
        />
      </CalendarControlContainer>
      <Calendar
        appointments={calendarAppointments}
        type={selectedType}
        onAppointmentClick={(appointment) => {
          const selectedAppointment = appointments.find(
            (item) => item.id === appointment.id
          );

          if (!selectedAppointment) return;

          setSelectedAppointment({
            end: new Date(selectedAppointment.end),
            start: new Date(selectedAppointment.start),
            id: selectedAppointment.id,
            users: selectedAppointment.users.map((user) => user.id),
          });
          setOpenCreateEvent(true);
        }}
      />
      <Modal
        title="Create Event"
        isOpen={openCreateEvent}
        setIsOpen={setOpenCreateEvent}
        children={
          <CreateAppointmentModal
            appointmentToEdit={selectedAppointment}
            onClose={() => {
              setOpenCreateEvent(false);
              setSelectedAppointment(undefined);
            }}
          />
        }
      />
    </HomeContainer>
  );
};

export default Home;
