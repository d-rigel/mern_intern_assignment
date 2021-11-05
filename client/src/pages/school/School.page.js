import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import schools from "../../assets/data/dummy-data.json";

import { BreadcrumbComp } from "../../component/breadcrumb/Breadcrumb.comp";
import { fetchSingleSchool } from "../../pages/school-list/schoolsAction";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

export const School = () => {
  const { sId } = useParams();
  console.log(sId);
  const dispatch = useDispatch();
  const { isLoading, error, selectedSchool } = useSelector(
    (state) => state.schools
  );
  useEffect(() => {
    dispatch(fetchSingleSchool(sId));
  }, [sId, dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="School" />
        </Col>
      </Row>

      <Row>
        <Col>
          {isLoading && <Spinner variant="primary" animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
        </Col>
      </Row>

      <Row>
        <Col className="text-weight-bolder text-secondary">
          <h6 className="school">School Name</h6>
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <p className="school__name">{selectedSchool.university}</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <h6 className="school">Program</h6>
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <p className="school__program">{selectedSchool.program}</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <h6 className="school">Location</h6>
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <p className="school__location">{selectedSchool.location}</p>
        </Col>
      </Row>
    </Container>
  );
};
