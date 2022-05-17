import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AceEditor from "react-ace";
import "../../index.css";

import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const CodeEditor = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <label>Select an SQL Command from here...</label>
            <div>
              <select style={{ width: "100%", marginRight: "20px" }}>
                <option></option>
                <option>
                  CREATE TABLE customer_data ( customerID VARCHAR,
                  <br /> companyName VARCHAR, contactName String);
                </option>
                <option>
                  CREATE TABLE customer_info (contactTitle VARCHAR, address
                  String, city String, postalCode INT);
                </option>
                <option>
                  CREATE TABLE customer_contact_details (phone INT, fax INT,
                  postalCode INT);
                </option>
                <option>
                  DELETE FROM customer_data WHERE customer_ID = AROUT;
                </option>
                <option>
                  DELETE FROM customer_info WHERE customerTitle = Marketing
                  Manager;
                </option>
                <option>
                  DELETE FROM customer_contact_details WHERE postalCode=05023;
                </option>
                <option>
                  SELECT * FROM customer_data;", "SELECT * FROM customer_info;
                </option>
                <option>SELECT * FROM customer_contact_details;</option>
                <option>SELECT customer_ID FROM customer_data;</option>
                <option>SELECT companyName FROM customer_data; </option>
                <option>SELECT contactName FROM customer_data; </option>
                <option>SELECT contactTitle FROM customer_info;</option>
                <option>SELECT address FROM customer_info;</option>
                <option>SELECT city FROM customer_info;</option>
                <option>SELECT postalCode FROM customer_info;</option>
                <option>SELECT phone FROM customer_contact details;</option>
                <option>SELECT fax FROM customer_contact details;</option>
                <option>
                  UPDATE customer_info SET contactTitle = Sales Representative
                  WHERE contactTilte = Owner;
                </option>
                <option>
                  UPDATE customer_data SET companyName = B's Beverages WHERE
                  customerID = AROUT;
                </option>
                <option>
                  UPDATE customer_contact_details SET phone = 88.60.15.31 WHERE
                  fax = 0921-12 34 67";
                </option>
              </select>
            </div>
          </Col>

          <Col md={12} lg={6}>
            <div className="editor-container">
              <div className="editor-title">SQL Editor</div>
              <AceEditor
                height="120px"
                width="100%"
                style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.3)" }}
                className="editor"
                mode="sql"
                editorProps={{ $blockScrolling: true }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CodeEditor;
