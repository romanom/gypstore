import { Navbar } from "../../component/Navbar";

import styled from "@emotion/styled";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <SignUp />
      </Container>
    </div>
  );
};
