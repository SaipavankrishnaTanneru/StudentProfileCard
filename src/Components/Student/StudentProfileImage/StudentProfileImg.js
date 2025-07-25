import React from "react";
import maleImg from "../../../Assets/StudentProfileimages/male.jpg";
import femaleImg from "../../../Assets/StudentProfileimages/female.jpg";
import defaultImg from "../../../Assets/StudentProfileimages/male.jpg"

const StudentProfileImage = ({ gender }) => {
  const img =
    gender === "Male"
      ? maleImg
      : gender === "Female"
      ? femaleImg
      : defaultImg;

  return (
    <img
      src={img}
      alt="Student"
      style={{
        width: "134px",
        height: "134px",
        objectFit: "cover",
        borderRadius: "180px",
        border: "6px solid #FFF",
        boxShadow: "0 0 4px rgba(0, 0, 0, 0.25)",
        background: `lightgray center / cover no-repeat`
      }}
    />
  );
};

export default StudentProfileImage;
