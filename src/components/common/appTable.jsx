import React from "react";

const AppTable = ({ valueData }) => {
  const { useravalue, userbvalue, usercvalue, userdvalue } = valueData;
  return (
    <div className="table-responsive-sm">
      <table className="table">
        <caption className="text-center">
          Input Variance of User A with the rest
        </caption>
        <thead className="thead-dark">
          <tr>
            <th scope="col">User A</th>
            <th scope="col">User B</th>
            <th scope="col">User C</th>
            <th scope="col">User D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <span className="badge badge-primary">{useravalue}</span>
            </th>
            <td>
              <span className="badge badge-warning">{userbvalue}</span>
            </td>
            <td>
              <span className="badge badge-warning">{usercvalue}</span>
            </td>
            <td>
              <span className="badge badge-warning">{userdvalue}</span>
            </td>
          </tr>
          <tr>
            <th scope="row">Variance</th>
            <td>
              <span className="badge badge-danger">
                {useravalue - userbvalue}
              </span>
            </td>
            <td>
              <span className="badge badge-danger">
                {useravalue - usercvalue}
              </span>
            </td>
            <td>
              <span className="badge badge-danger">
                {useravalue - usercvalue}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppTable;
