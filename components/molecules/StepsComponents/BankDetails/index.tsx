import { useEffect } from "react";
import { Form, Input, message } from "antd";

import StepsWrapper from "@components/molecules/StepsWrapper";

import useLocalStorage from "hooks/useLocalStorage";

import { FormValuesTypes } from "types/registrationFormValues";
import { CommonStepProps } from "@types";

enum FieldNames {
  BankDetails = "bankDetails",
  accountNumber = "accountNumber",
  expirationDate = "expirationDate",
  securityCode = "securityCode",
}

const BankDetails = ({ goBack, goToNextStep, onCancel }: CommonStepProps) => {
  const [form] = Form.useForm();

  const [currentUser, setCurrentUser] = useLocalStorage<FormValuesTypes>(
    "currentUser",
    {}
  );

  useEffect(() => {
    if (currentUser?.bankDetails) {
      form.setFieldValue(FieldNames.BankDetails, currentUser.bankDetails);
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
    message.error(errorInfo);
  };

  return (
    <StepsWrapper
      title="Email Address"
      description="Please enter your email address"
      onFinish={saveData}
      onCancel={onCancel}
      onBack={goBack}
      onFormError={onFormError}
      form={form}
    >
      <Form.Item
        name={[FieldNames.BankDetails, FieldNames.accountNumber]}
        label="Your Account Number"
        help="1234 5678 9012 3456"
        rules={[{ min: 16, max: 16, required: true, type: "string" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={[FieldNames.BankDetails, FieldNames.expirationDate]}
        label="Expiration Date"
        help="MM/YY"
        rules={[{ min: 5, max: 5, required: true, type: "string" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={[FieldNames.BankDetails, FieldNames.securityCode]}
        label="Security Code"
        help="123"
        rules={[{ min: 3, max: 3, required: true, type: "string" }]}
      >
        <Input />
      </Form.Item>
    </StepsWrapper>
  );
};

export default BankDetails;
