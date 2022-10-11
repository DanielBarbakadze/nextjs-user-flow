import { useEffect } from "react";
import { Form, message, Select } from "antd";

import StepsWrapper from "@components/molecules/StepsWrapper";

import useLocalStorage from "hooks/useLocalStorage";

import { FormValuesTypes } from "types/registrationFormValues";
import { CommonStepProps } from "@types";

enum FieldNames {
  CarModel = "carModel",
}

const CAR_MODELS: FormValuesTypes["carModel"][] = [
  "Audi",
  "BMW",
  "Mercedes",
  "Volkswagen",
  "Volvo",
  "Tesla",
  "Other",
];

const CarModelSelecting = ({
  goBack,
  goToNextStep,
  onCancel,
}: CommonStepProps) => {
  const [form] = Form.useForm();

  const [currentUser, setCurrentUser] = useLocalStorage<FormValuesTypes>(
    "currentUser",
    {}
  );

  useEffect(() => {
    if (currentUser?.carModel) {
      form.setFieldValue(FieldNames.CarModel, currentUser.carModel);
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
      title="Car Model"
      description="Please enter your car model"
      onFinish={saveData}
      onCancel={onCancel}
      onBack={goBack}
      onFormError={onFormError}
      form={form}
    >
      <Form.Item
        name={FieldNames.CarModel}
        label="Choose your car model"
        rules={[{ required: true, message: "Car model is mandatory field" }]}
      >
        <Select placeholder="Select a model" allowClear>
          {CAR_MODELS.map((model) => (
            <Select.Option key={model} value={model}>
              {model}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </StepsWrapper>
  );
};

export default CarModelSelecting;
