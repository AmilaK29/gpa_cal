import React from "react";

function SubjectTable(props) {
  return (
    <div>

        <table  className="table">
            <thead  className="thead-dark">
                <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">Credits</th>
                    <th scope="col">Grade</th>
                </tr>
            </thead>
            <tbody>
                {props.subjects.map((subject, index) => (
                    <tr key={index}>
                        <td>{subject.name}</td>
                        <td>{subject.credits}</td>
                        <td>{subject.grade}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default SubjectTable;