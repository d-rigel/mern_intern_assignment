import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BreadcrumbComp } from "../../component/breadcrumb/Breadcrumb.comp";
import { AddSchoolForm } from "../../component/add-school-form/AddSchoolForm.comp";

export const AddSchool = () => {
  return (
    <Container>
      <Row className="mb-5">
        <Col>
          <BreadcrumbComp page="New School" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddSchoolForm />
        </Col>
      </Row>
    </Container>
  );
};
