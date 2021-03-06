import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = (props) => {
  return (
    <>
      <h2> Manage Course</h2>
      {props.match.params.slug}
      <Prompt when={true} message="Are you sure you want to leave? " />
    </>
  );
};

export default ManageCoursePage;
