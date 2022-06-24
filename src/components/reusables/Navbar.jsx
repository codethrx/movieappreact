import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <StyledNav>
      <h3 id="logo" onClick={() => navigate("/")}>
        MoviezX
      </h3>
    </StyledNav>
  );
}
const StyledNav = styled.nav`
  min-height: 10vh;
  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  #logo {
    cursor: pointer;
  }
`;
export default Navbar;
