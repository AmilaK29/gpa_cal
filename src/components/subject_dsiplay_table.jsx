import React from "react";
import SubjectsData from "../mock_data/table_data.json";

function Subject_Display_Table(props) {

  const subjects = SubjectsData.subjects;

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
            <tr>
                <th scope="col">Subject</th>
                <th scope="col">Credits</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            {props.subjects.map((subject, index) => (
                <tr key={index}>
                    <td>{subject.name}</td>
                    <td>{subject.credits}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Subject_Display_Table;
