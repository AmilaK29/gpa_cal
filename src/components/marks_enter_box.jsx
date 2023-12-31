import React from "react";
import subjectsData from "../mock_data/table_data.json";
import { useEffect, useState } from "react";

function MarksEnterBox(props) {
  const [subject_name, setSubject] = useState('');
  const [grade, setGrade] = useState(0);

  const subjects_data = subjectsData.subjects;

  const add_subject = (subject_name) => {
    const data = props.subjects.filter((subject) => subject.name === subject_name);
    return data[0];
  };

  const handleOnClicked = () => {
    const subject = add_subject(subject_name);
    console.log(grade);
    console.log(subject);
    console.log("STARTED");
    if (!subject.hasOwnProperty('grade')) {
        // Add a new key-value pair to the object
        subject.grade = grade;
      }
    
    console.log("FINISHED")
    props.add_sub_func(subject);
    
    setSubject('');
    setGrade(0);

  }

  const direct_to_subjects = () => {
    window.open("/subjects", "_blank");
  }

  return (
    <div>
        <select onChange={(e) => {setSubject(e.target.value)}} value={subject_name}>
            <option value="" disabled selected>Select your option</option>
            {props.subjects.map((subject, index) => (
                <option key={index} value={subject.name}>{subject.display_name}</option>
            ))}
        </select>

        <input type="text" placeholder="Grade" onChange={(e) => {setGrade(e.target.value)}}/>

        <button onClick={handleOnClicked} value={grade}>Add</button>
        <button onClick={direct_to_subjects}>Add Subjects</button>

    </div>
  
  );
}

export default MarksEnterBox;
