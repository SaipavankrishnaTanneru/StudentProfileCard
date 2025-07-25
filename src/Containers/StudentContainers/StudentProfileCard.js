import React from "react";

import StudentProfilemiddle from "../../Components/Student/StudentProfileCard/StudentProfilemiddle/StudentProfilemiddle";

const dummyStudentData = {
  studentName: "Sai",
  gender: "Male",
  course_track: "CBSE",
  admission_type: "Direct",
  admission_status: "Confirmed",
  student_type: "Regular",
  section: "A",
};

const StudentProfileContainer = () => {
  const studentId = 12345;

  return (
    <div
      className="StudentProfileCard" style={{paddingLeft:'5px'}}>
      <StudentProfilemiddle studentId={studentId} data={dummyStudentData} />
    </div>
  );
};

export default StudentProfileContainer;
