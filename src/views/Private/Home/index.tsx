import { faker } from "@faker-js/faker";
import React from "react";
import { BiCalendar } from "react-icons/bi";
import Calendar, { Appointments } from "../../../components/Calendar";
import useAuth from "../../../hooks/useAuth";
import useHomeController from "../../controllers/Home/useHomeController";
import {
  HomeContainer,
  HomeDescription,
  HomeHeader,
  HomeLogo,
  HomeTitle,
  LogoutButton,
} from "./styles";
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
  const { appointments } = useHomeController();
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

      <Calendar appointments={calendarAppoinments} type="month" />
    </HomeContainer>
  );
};

export default Home;
