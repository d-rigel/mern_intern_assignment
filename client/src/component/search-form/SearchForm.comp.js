import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { filterSearchSchool } from "../../pages/school-list/schoolsAction";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    const { value } = e.target;
    dispatch(filterSearchSchool(value));
  };
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Search:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="searchStr"
              placeholder="Search ..."
              // value={str}
              onChange={handleOnchange}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
