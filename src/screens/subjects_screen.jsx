import React from "react";
import Subject_Add_Box from "../components/subject_add_box";
import Subject_Display_Table from "../components/subject_dsiplay_table";
import { get_subjects } from "../api/subjects";
import { useEffect ,useState} from "react";

function Subject_Screen(props) {

const [subjects_data, setSubjects] = useState([]);

 useEffect(()=>{
    get_subjects().then((subjects) => {
        setSubjects(subjects);
    });
 })

  return (
    <div>
        <Subject_Add_Box/>
        <Subject_Display_Table subjects = {subjects_data}/>
    </div>
  );
}

export default Subject_Screen;