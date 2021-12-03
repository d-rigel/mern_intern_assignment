import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

import {
  updateASchool,
  fetchSingleSchool,
} from "../../pages/school-list/schoolsAction";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export const EditSchoolForm = () => {
  const { isLoading, selectedSchool } = useSelector((state) => state.schools);
  const [uni, setUni] = useState(selectedSchool.university);
  const [prog, setProg] = useState(selectedSchool.program);
  const [loca, setLoca] = useState(selectedSchool.location);
  console.log(selectedSchool);

  const dispatch = useDispatch();
  const history = useHistory();
  const { sId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleSchool(sId));
  }, [dispatch, sId]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const updatedSch = {
      university: uni,
      program: prog,
      location: loca,
    };

    dispatch(updateASchool(sId, updatedSch));
    history.push("/schools");
  };

  return (
    <div>
      {isLoading ? (
        <>
          <Spinner variant="primary" animation="border" />
        </>
      ) : (
        <>
          <Container className=" mb-3 mt-3 bg-light add-new-university w-70">
            <Row>
              <h1 className="text-center text-info mt-3">Update School</h1>
              <hr />

              <Col sm={12}>
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                  <Form.Group as={Row} className="mt-5">
                    <Form.Label column sm={3}>
                      School Name:
                    </Form.Label>
                    <Col sm={9} className="mb-3">
                      <Form.Control
                        type="text"
                        name="university"
                        placeholder="School name"
                        minLength="3"
                        maxLength="50"
                        required
                        value={uni}
                        onChange={(e) => setUni(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm={3}>
                      Program:
                    </Form.Label>
                    <Col sm={9} className="mb-3">
                      <Form.Control
                        type="text"
                        name="program"
                        placeholder="program"
                        minLength="3"
                        maxLength="50"
                        required
                        value={prog}
                        onChange={(e) => setProg(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm={3}>
                      Location:
                    </Form.Label>
                    <Col sm={9} className="mb-3">
                      <Form.Control
                        type="text"
                        name="location"
                        placeholder="School location"
                        minLength="3"
                        maxLength="50"
                        required
                        value={loca}
                        onChange={(e) => setLoca(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button
                        type="submit"
                        variant="info"
                        className="mt-3 mb-2 w-100">
                        Update
                      </Button>
                    </Col>

                    <Col>
                      <Link to="/schools">
                        <Button
                          type="submit"
                          variant="info"
                          className="mt-3 mb-5 w-100">
                          Cancel
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};
