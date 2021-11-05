import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteASchool } from "../../pages/school-list/schoolsAction";
export const SchoolTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { searchSchoolList, updateMsg, updateMsgError } = useSelector(
    (state) => state.schools
  );
  console.log("update", updateMsg.payload, "updaterror", updateMsgError);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>School Name</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {searchSchoolList.length ? (
          searchSchoolList.map((row) => (
            <tr key={row._id}>
              <td>{row.university}</td>
              <td>
                <Link to={`/school/${row._id}`}>Click to find out more</Link>
              </td>

              <td>
                <Link to={`/edit-school/${row._id}`}>
                  <Button className="me-md-4">
                    <li className="fas fa-edit"></li>
                  </Button>
                </Link>

                <Button
                  className="ml-md-4"
                  variant="danger"
                  onClick={() =>
                    dispatch(deleteASchool(row._id)) && history.go(0)
                  }>
                  <li className="fas fa-trash"></li>
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No School to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
