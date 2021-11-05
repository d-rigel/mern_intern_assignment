import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { LinkContainer } from "react-router-bootstrap";

export const BreadcrumbComp = ({ page }) => {
  return (
    <Breadcrumb>
      <LinkContainer to="/">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item href="/schools" active>
        {page}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
