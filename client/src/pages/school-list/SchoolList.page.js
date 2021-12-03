import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BreadcrumbComp } from "../../component/breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../component/search-form/SearchForm.comp";
import { SchoolTable } from "../../component/school-table/SchoolTable.comp";
// import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSchools } from "./schoolsAction";
import { useHistory } from "react-router-dom";

export const SchoolList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error, updateMsg, updateMsgError } = useSelector(
    (state) => state.schools
  );

  useEffect(() => {
    dispatch(fetchAllSchools());
    if (updateMsg.payload) {
      return history.go(0);
    }
  }, [dispatch, history]);

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="schools list" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm={6}>
          <Link to="/add-schools">
            <Button variant="info">Add School</Button>
          </Link>
        </Col>
        <Col className="text-end" sm={6}>
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Col className="text-center" sm={12}>
        <div>
          {/* {isLoading && <Spinner variant="primary" animation="border" />} */}
          {error && <Alert variant="danger">{error}</Alert>}
          {/* {updateMsg && <Alert variant="success">{updateMsg.payload}</Alert>} */}
          {updateMsgError && <Alert variant="success">{updateMsgError}</Alert>}
        </div>
      </Col>
      <Row className="mt-5">
        <Col>
          <SchoolTable />
        </Col>
      </Row>
    </Container>
  );
};
