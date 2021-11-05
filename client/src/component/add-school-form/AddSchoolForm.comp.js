import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { shortText } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createASchool } from "./addSchoolAction";

const initialFrmData = {
  university: "",
  program: "",
  location: "",
};

const initialFrmError = {
  university: false,
  program: false,
  location: false,
};

export const AddSchoolForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { university, program, location } = useSelector(
    (state) => state.newSchool
  );

  const [frmData, setFrmData] = useState(initialFrmData);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);
  useEffect(() => {}, [frmData, frmDataError]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataError(initialFrmError);
    const isUniversityValid = await shortText(frmData.university);
    const isProgramValid = await shortText(frmData.program);
    const isLocationValid = await shortText(frmData.location);

    setFrmDataError({
      ...initialFrmError,
      university: !isUniversityValid,
      program: !isProgramValid,
      location: !isLocationValid,
    });

    const newSch = {
      university,
      program,
      location,
    };
    dispatch(
      createASchool({
        ...frmData,
        newSch,
      })
    );
    history.push("/schools");
    history.go(0);
  };

  return (
    <div>
      <Container className=" mb-3 mt-3 bg-light add-new-school w-50">
        <Row>
          <h1 className="text-center text-info mt-3">Add New School</h1>
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
                    value={frmData.university}
                    onChange={handleOnchange}
                  />
                  <Form.Text className="text-danger">
                    {frmDataError.school && "School is required!"}
                  </Form.Text>
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
                    value={frmData.program}
                    onChange={handleOnchange}
                  />
                  <Form.Text className="text-danger">
                    {frmDataError.program && "Program is required!"}
                  </Form.Text>
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
                    value={frmData.location}
                    onChange={handleOnchange}
                  />
                  <Form.Text className="text-danger">
                    {frmDataError.location && "Location is required!"}
                  </Form.Text>
                </Col>
              </Form.Group>

              <Button type="submit" variant="info" className="mt-3 mb-5 w-100">
                Add New School
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
