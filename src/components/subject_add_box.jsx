import React from "react";
import {useState,useEffect} from "react";
import { format_subject_name } from "../utils/subjects";
import { add_subject } from "../api/subjects";

function Subject_Add_Box(props) {
  
  const [subject_detail,setSubjectDetails] = useState({
    name: "",
    display_name: "",
    credits: 0,
  });

  const AddSubject = () => {
    const disploay_name = format_subject_name(subject_detail.name);
    const subject = {
      ...subject_detail,
      display_name: disploay_name,
    };

    add_subject(subject).then((data) => {
      console.log(data);
    });

    setSubjectDetails({
      name: "",
      display_name: "",
      credits: 0,
    });
  }

  return (
    <div>
      <label>Subject</label>
      <input type="text" placeholder="Subject Name" onChange={(e) => {setSubjectDetails({...subject_detail,name:e.target.value})}} value={subject_detail.name}/>

      <br />

      <label>Credits</label>
      <input type="text" placeholder="Credits" onChange={(e) => {setSubjectDetails({...subject_detail,credits:parseInt(e.target.value,10)})}}/>

      <br />

      <button onClick={AddSubject}>Add Subject</button>
    </div>
  );
}

export default Subject_Add_Box;
