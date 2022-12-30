import React, { useRef } from "react";

import { DynamicForm } from "@oneui/6d-dynamic-form";
import { formFields } from "./constant";
import "@oneui/6d-dynamic-form/dist/index.css";
import "react-datepicker/dist/react-datepicker.min.css";
import "@oneui/6d-base-theme/build/theme.css";

const ParentComponent = () => {
  const formRef = useRef();

  const handleSubmit = () => {
    let formData = formRef.current.submit();
    //console.log(formData);
  };

  const handleReset = () => {
    formRef.current.reset();
  };

  const populateValues = {
    // This can come from Other API or Any Pros
    text: "New Text",
    dependentText: "jeevan kumar",
    email: "jeevankumar@gmail.com",
    select: "",
    checkbox: "NO",
    checkboxGroup: "NO,YES",
    multiselect: "orange, red",
    radioGroup: "NO",
    radioGroup_pro: "NO",
    date: new Date(),
    selectapi: "1",
  };

  return (
    <DynamicForm
      ref={formRef}
      fields={formFields}
      populateData={populateValues}
    />
  );
};
export default ParentComponent;
