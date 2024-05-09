import {
  Button,
  DropdownItem,
  DropdownMenu,
  NavDropdown,
  NavItem,
  NavLink,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import books from "../data/books";

export default function Header() {
  return (
    <header>
      <Navbar
        className="navbar navbar-expand-lg bg-primary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
            <Link className="navbar-brand" to='/'>Event Weather</Link>
          {/* <NavbarToggle></NavbarToggle> */}
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <NavbarCollapse
            className="collapse navbar-collapse"
            id="navbarColor01"
          >
            <ul className="navbar-nav me-auto">
              <NavItem className="nav-item">
                <Link className="nav-link active" to='/city'>City</Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link className="nav-link" to='/book/le-club-des-incorrigibles-optimistes'>Book</Link>
              </NavItem>
              <NavItem className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </NavLink>
                <DropdownMenu className="dropdown-menu">
                  <DropdownItem className="dropdown-item" href="#">
                    Action
                  </DropdownItem>
                  <DropdownItem className="dropdown-item" href="#">
                    Another action
                  </DropdownItem>
                </DropdownMenu>
              </NavItem>
            </ul>
          </NavbarCollapse>
        </div>
      </Navbar>
    </header>
  );
}
