import { useEffect } from "react";
import { Form, Input, message } from "antd";

import StepsWrapper from "@components/molecules/StepsWrapper";

import useLocalStorage from "hooks/useLocalStorage";

import { FormValuesTypes, UsersDataType } from "types/registrationFormValues";
import { CommonStepProps } from "@types";

enum FieldNames {
  Email = "email",
}

const Email = ({ goBack, goToNextStep, onCancel }: CommonStepProps) => {
  const [form] = Form.useForm();

  const [usersData] = useLocalStorage<UsersDataType>("usersData", {});
  const [currentUser, setCurrentUser] = useLocalStorage<FormValuesTypes>(
    "currentUser",
    {}
  );

  useEffect(() => {
    if (currentUser?.email !== "") {
      form.setFieldValue(FieldNames.Email, currentUser.email);
    }
  }, [currentUser, form]);

  const saveData = () => {
    setCurrentUser({
      ...currentUser,
      ...form.getFieldsValue(),
    });

    goToNextStep();
  };

  const onFormError = (errorInfo: any) => {
    message.error(errorInfo.errorFields[0].errors[0]);
  };

  return (
    <StepsWrapper
      title="Email Address"
      description="Please enter your email address"
      onFinish={saveData}
      onBack={goBack}
      onFormError={onFormError}
      onCancel={onCancel}
      form={form}
    >
      <Form.Item
        name={FieldNames.Email}
        label="Your Email"
        help="example@mail.com"
        rules={[
          { type: "email", required: true },
          () => ({
            validator(_, value) {
              if (usersData && Object.keys(usersData).includes(value)) {
                return Promise.reject(
                  new Error("This email is already taken!")
                );
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>
    </StepsWrapper>
  );
};

export default Email;
