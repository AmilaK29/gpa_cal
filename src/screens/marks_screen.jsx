import React from "react";
import { useState, useEffect } from "react";
import MarksEnterBox from "../components/marks_enter_box";
import SubjectTable from "../components/subject_table";
import subjectsData from "../mock_data/table_data.json";
import SGPA_Display from "../components/sgpa_display";
import { calculate_sgpa } from "../utils/calculations";
import { get_subjects } from "../api/subjects";

function Marks_Screen(props) {

  const [subjects, setSubjects] = useState([]);
  const [subject_data, setSubjectData] = useState([]);
  

  const [sgpa, setSGPA] = useState(0);

  const add_sub_func = (sub) => {
    setSubjects([...subjects, sub]);
  };

  

 useEffect(()=>{
    console.log(calculate_sgpa(subjects));
    console.log(subjects);
    setSGPA(calculate_sgpa(subjects));
 },[subjects]);

 useEffect(()=>{
    get_subjects().then((subjects) => {
        setSubjectData(subjects);
    });
    
 })

  return (
    <div>
      <MarksEnterBox add_sub_func = {add_sub_func} subjects = {subject_data}/>
      <SubjectTable subjects = {subjects}/>
      <SGPA_Display sgpa = {sgpa}/>
    </div>
  );
}

export default Marks_Screen;
