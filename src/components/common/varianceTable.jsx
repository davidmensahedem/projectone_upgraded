import React from "react";

const VarianceTable = ({ timeData, getVarianceInfo }) => {
  var { useratime, userbtime, userctime, userdtime } = timeData;

  return (
    <div className="table-responsive-sm">
      <table className="table">
        <caption className="text-center">
          Time Variance of User A with the rest
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
              <span className="badge badge-primary">{useratime}</span>
            </th>
            <td>
              <span className="badge badge-warning">{userbtime}</span>
            </td>
            <td>
              <span className="badge badge-warning">{userctime}</span>
            </td>
            <td>
              <span className="badge badge-warning">{userdtime}</span>
            </td>
          </tr>
          <tr>
            <th scope="row">Variance</th>
            <td>
              <span className="badge badge-danger">
                {getVarianceInfo(useratime, userbtime)}
              </span>
            </td>
            <td>
              <span className="badge badge-danger">
                {getVarianceInfo(useratime, userctime)}
              </span>
            </td>
            <td>
              <span className="badge badge-danger">
                {getVarianceInfo(useratime, userdtime)}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VarianceTable;
