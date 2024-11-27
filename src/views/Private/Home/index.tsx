import React from "react";
import useAuth from "../../../hooks/useAuth";
import {
  HomeContainer,
  HomeHeader,
  HomeLogo,
  HomeDescription,
  HomeTitle,
  LogoutButton,
} from "./styles";
import { BiCalendar } from "react-icons/bi";
import useHomeController from "../../controllers/Home/useHomeController";
import Calendar, { Appointments } from "../../../components/Calendar";
import { AppointmentFromApi } from "../../../services/types/appointment";
import { faker } from "@faker-js/faker";
import { UserFromApi } from "../../../services/types/user";
// import { Container } from './styles';

const MockAppointments = Array.from({ length: 10 }).map((_, index) => ({
  id: `${index}`,
  start: faker.date
    .recent({
      days: 10,
    })
    .toISOString(),
  end: faker.date
    .recent({
      days: 10,
    })
    .toISOString(),
  users: faker.helpers.arrayElements(
    Array.from({ length: 5 }).map((_, index) => ({
      id: `${index}`,
      name: faker.person.firstName(),
      email: faker.internet.email(),
    }))
  ),
}));

const Home: React.FC = () => {
  const { appointments, isLoadingAppointments } = useHomeController();
  const { user, signout } = useAuth();

  console.log(appointments?.appointments);

  const calendarAppoinments: Appointments[] = MockAppointments.map(
    (appointment) => ({
      label: appointment.users.map((user) => user.name).join(", "),
      start: appointment.start,
      end: appointment.end,
    })
  );

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

      <Calendar appointments={calendarAppoinments} />
    </HomeContainer>
  );
};

export default Home;
