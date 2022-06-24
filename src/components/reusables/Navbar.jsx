import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <StyledNav>
      <h3 id="logo">MoviezX</h3>
      <div className="nav-buttons">
        <button onClick={() => navigate("/")}>Home</button>
      </div>
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
  button {
    border: 1px solid rgb(65, 98, 168);
    font-weight: bold;
  }
`;
export default Navbar;
