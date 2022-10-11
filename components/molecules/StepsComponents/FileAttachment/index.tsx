import { UploadOutlined } from "@ant-design/icons";
import { Form, Upload, message, Button, UploadProps } from "antd";

import StepsWrapper from "@components/molecules/StepsWrapper";

import { CommonStepProps } from "@types";

enum FieldNames {
  Attachments = "attachments",
}

const FileAttachment = ({
  goBack,
  goToNextStep,
  onCancel,
}: CommonStepProps) => {
  const [form] = Form.useForm();

  const saveData = () => {
    // INFO: Can be implemented when we have uploaded files URLs

    goToNextStep();
  };

  const onFormError = (errorInfo: any) => {
    message.error(errorInfo);
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    // INFO: Handle upload process
    console.log(
      "%c%s",
      "color: #ff0000; background: #ffff00; font-size: 24px;",
      "Needs server/storage to handle uploading process!",
      { info }
    );
  };

  return (
    <StepsWrapper
      title="Attachments"
      description="Please upload your attachment"
      onFinish={saveData}
      onCancel={onCancel}
      onBack={goBack}
      onFormError={onFormError}
      form={form}
    >
      <Form.Item name={FieldNames.Attachments} label="Attachments">
        <Upload action="/" onChange={handleChange}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>
    </StepsWrapper>
  );
};

export default FileAttachment;
