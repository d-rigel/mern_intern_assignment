import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const HomePage = () => {
  return (
    <>
      <div className="entry-page bg-info">
        <div className=" form-box p-5 bg-light">
          <Container>
            <Row>
              <Col>
                <h2 className="text-info text-center">welcome!!!</h2>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <h4 className="text-info text-center">
                  Here to serve you better...
                </h4>
              </Col>
            </Row>
            <hr />
            <Row className="mt-5">
              <Col>
                <h4 className="text-info text-center">
                  Click on schools to see list of schools.
                </h4>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
