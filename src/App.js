import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./theme.js";
import { useState } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import CodeEditor from "./components/CodeEditorElements/index.js";
import "./index.css";
import { IoArrowRedoOutline } from "react-icons/io5";
import data1 from "./tables/table1.js";
import data2 from "./tables/table2.js";
import data3 from "./tables/table3.js";
import data4 from "./tables/table4.js";
import data5 from "./tables/table5.js";
import data6 from "./tables/table6";
import data7 from "./tables/table7.js";
import data8 from "./tables/table8.js";
import data9 from "./tables/table9";
import data10 from "./tables/table10.js";
import { CsvToHtmlTable } from "react-csv-to-table";
import { MDBDataTable } from "mdbreact";

function App() {
  const [theme, setTheme] = useState("light");

  var tables = [
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
    data10,
  ];

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [table, setTable] = useState();

  function handleSubmit() {
    const randomNumber = Math.floor(Math.random() * 10);
    setTable(tables[randomNumber]);
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledApp>
        <Navbar>
          <Container>
            <NavbarBrand>
              <h4 className="navbar-brand">SQL Code Editor</h4>
            </NavbarBrand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <ThemeButton onClick={() => themeToggler()}>
                {theme === "light" ? (
                  <BiMoon style={{ color: "#000" }} />
                ) : (
                  <BsSun />
                )}
              </ThemeButton>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h4 className="heading">
          Choose one of the methods for running the SQL command
        </h4>
        <CodeEditor />
        <Container>
          <Row>
            <Col className="submit-button-wrapper">
              <button onClick={handleSubmit}>
                Submit <IoArrowRedoOutline className="icon" />
              </button>
            </Col>
          </Row>
        </Container>

        <div className="tableWrapper">
          <br />
          <CsvToHtmlTable
            x-scroll
            className="table"
            data={table}
            csvDelimiter=","
            tableClassName="table"
          />
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

const StyledApp = styled.div``;

const NavbarBrand = styled(Navbar.Brand)`
  font-weight: bold;
`;

const ThemeButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 20px;
`;
