import { useRef } from "react";
import { Button, Form, message, Typography } from "antd";

import StepsWrapper from "@components/molecules/StepsWrapper";

import useLocalStorage from "hooks/useLocalStorage";
import { saveJson } from "utils";

import { FormValuesTypes } from "types/registrationFormValues";
import { CommonStepProps } from "@types";

const FlowIsFinished = ({ goBack, goToNextStep }: CommonStepProps) => {
  const [form] = Form.useForm();
  const exporterRef = useRef(null);

  const [currentUser] = useLocalStorage<FormValuesTypes>("currentUser", {});

  const saveData = () => {
    saveJson(currentUser, exporterRef.current);
    goToNextStep();
  };

  const onFormError = (errorInfo: any) => {
    message.error(errorInfo);
  };

  return (
    <StepsWrapper
      title="Success Registration"
      onFinish={saveData}
      onBack={goBack}
      onFormError={onFormError}
      nextLabel={"Finish"}
      form={form}
      hideCancellation={true}
    >
      <Typography.Text>Congrats 🎉 Registration is finished!</Typography.Text>

      <Typography.Text className="block">
        Now you can{" "}
        <Button type="link" onClick={saveData} className="p-0">
          Log In
        </Button>{" "}
        with your email{" "}
        <Typography.Text strong>{currentUser.email}</Typography.Text>!
      </Typography.Text>

      <a href="" className="invisible" ref={exporterRef} tabIndex={0}></a>
    </StepsWrapper>
  );
};

export default FlowIsFinished;
