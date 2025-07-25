import React from "react";
import StudentProfileImage from "../../../Student/StudentProfileImage/StudentProfileImg";
import StudentProfileLeft from "../../../Student/StudentProfileCard/StudentProfileleft/StudentProfileleft";
import ViewProfileButton from "../../../../Widgets/Buttons/ViewProfileButton/ViewProfileButton";
import StudentNavTabs from "../../../Student/StudentSubNavTabs/StudentNavTabs";
import heroBackground from "../../../../Assets/BackgroundsImages/Hero-block.png";
import styles from "./StudentProfilemiddle.module.css";

const StudentProfilemiddle = ({ studentId, data }) => {
  return (
    <div
      className={styles.studentProfileTopbarWrapper}
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.studentProfileTopbar}>
        {/* Left Section */}
        <div className={styles.studentProfileLeft}>
          <StudentProfileImage gender={data.gender} />
          <StudentProfileLeft studentId={studentId} data={data} />
        </div>

        {/* Middle Info */}
        <div className={styles.studentProfileMiddle}>
          <InfoItem label="Course Track / Orientation" value={data.course_track} />
          <InfoItem label="Admission Type" value={data.admission_type} />
          <InfoItem label="Admission Status" value={data.admission_status} />
          <InfoItem label="Student Type" value={data.student_type} />
          <InfoItem label="Section" value={data.section} />
        </div>

        {/* Right Section */}
        <div className={styles.studentProfileRight}>
          <ViewProfileButton />
        </div>
      </div>

      {/* Tabs Below */}
      <div className={styles.studentProfileTabs}>
        <StudentNavTabs />
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className={styles.infoItem}>
    <p className={styles.label}>{label}</p>
    <p className={styles.value}>{value || "N/A"}</p>
  </div>
);

export default StudentProfilemiddle;
