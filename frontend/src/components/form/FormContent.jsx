import React from "react";

import FormTitle from "./FormTitle";
import FormHeader from "./FormHeader";
import FormQuestions from "./FormQuestions";
import FormCompleteButton from "./FormCompleteButton";

const FormContent = ({ step, questions }) => {
  return (
    <div>
      <FormTitle name={"Ana"} />
      <FormHeader step={step * 4} />
      <FormQuestions questions={questions} />
      <FormCompleteButton step={step} />
    </div>
  );
};

export default FormContent;
