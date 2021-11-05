import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BreadcrumbComp } from "../../component/breadcrumb/Breadcrumb.comp";
import { EditSchoolForm } from "../../component/edit-school/EditSchoolForm.comp";

export const EditSchool = () => {
  return (
    <Container>
      <Row className="mb-5">
        <Col>
          <BreadcrumbComp page="Update School" />
        </Col>
      </Row>
      <Row>
        <Col>
          <EditSchoolForm />
        </Col>
      </Row>
    </Container>
  );
};
