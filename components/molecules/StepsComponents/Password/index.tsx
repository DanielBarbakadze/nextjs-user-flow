import { Form, Input, message } from "antd";

import StepsWrapper from "@components/molecules/StepsWrapper";

import useLocalStorage from "hooks/useLocalStorage";

import { FormValuesTypes } from "types/registrationFormValues";
import { CommonStepProps } from "@types";
import { useEffect } from "react";

enum FieldNames {
  Password = "password",
  ConfirmPassword = "confirmPassword",
}

const Password = ({ goBack, goToNextStep, onCancel }: CommonStepProps) => {
  const [form] = Form.useForm();

  const [currentUser, setCurrentUser] = useLocalStorage<FormValuesTypes>(
    "currentUser",
    {}
  );

  useEffect(() => {
    if (currentUser?.password !== "") {
      form.setFieldValue(FieldNames.Password, currentUser.password);
      form.setFieldValue(FieldNames.ConfirmPassword, currentUser.password);
    }
  }, [currentUser, form]);

  const saveData = () => {
    setCurrentUser({
      ...currentUser,
      [FieldNames.Password]: form.getFieldValue(FieldNames.Password),
    });

    goToNextStep();
  };

  const onFormError = (errorInfo: any) => {
    message.error(errorInfo);
  };

  return (
    <StepsWrapper
      title="Choose Password"
      description="Please choose a strong password for your account"
      onFinish={saveData}
      onCancel={onCancel}
      onBack={goBack}
      onFormError={onFormError}
      form={form}
    >
      <Form.Item
        name={FieldNames.Password}
        label="Your Password"
        help="G3!d.fur.3Aut0"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name={FieldNames.ConfirmPassword}
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue(FieldNames.Password) === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
    </StepsWrapper>
  );
};

export default Password;
