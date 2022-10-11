import { ReactNode } from "react";
import { Button, FormInstance, Spin, Typography, Form } from "antd";

import { IconChevronLeft } from "@components/atoms/Icons";

type StepWrapperProps<Values = any> = {
  title: string;
  description?: string;
  nextLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;
  hideCancellation?: boolean;
  isNextDisabled?: boolean;
  initialValues?: Values;
  children?: ReactNode;
  form?: FormInstance;
  onBack?: () => void;
  onCancel?: () => void;
  onFinish: (values: Values) => void;
  onFormError?: (errorInfo: any) => void;
};

const StepWrapper = ({
  title,
  description,
  nextLabel = "Next",
  cancelLabel = "Cancel",
  hideCancellation,
  initialValues,
  isLoading,
  isNextDisabled,
  children,
  form,
  onBack,
  onCancel,
  onFinish,
  onFormError,
}: StepWrapperProps) => {
  if (isLoading) {
    return (
      <div className="w-full h-full flex flex-grow justify-center items-center">
        <Spin />
      </div>
    );
  }

  return (
    <section className="px-16 py-24 pb-96 md:p-24 md:pt-96 flex flex-col grow">
      {onBack && (
        <Button
          type="text"
          size="small"
          onClick={() => onBack()}
          icon={<IconChevronLeft />}
          className="flex"
        >
          Back
        </Button>
      )}

      <div className="flex flex-col items-center grow">
        <Typography.Title level={3}>{title}</Typography.Title>

        {description && (
          <Typography.Text className="inline-block mt-12">
            {description}
          </Typography.Text>
        )}

        <div className="flex grow items-center">
          <Form
            form={form}
            requiredMark={false}
            initialValues={initialValues}
            onFinish={onFinish}
            onFinishFailed={onFormError}
          >
            {children}

            <div
              className={
                "absolute bottom-0 left-0 right-0 px-16 py-8 flex justify-between flex-col md:flex-row"
              }
            >
              <Button
                type="primary"
                htmlType="submit"
                disabled={isNextDisabled}
                className="w-full md:w-auto bg-primary"
              >
                {nextLabel}
              </Button>

              {!hideCancellation && (
                <Button
                  type="default"
                  onClick={onCancel}
                  className="w-full mt-8 md:w-auto md:mt-0"
                >
                  {cancelLabel}
                </Button>
              )}
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default StepWrapper;
