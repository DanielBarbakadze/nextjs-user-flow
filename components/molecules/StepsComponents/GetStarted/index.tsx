import StepsWrapper from "@components/molecules/StepsWrapper";

import { CommonStepProps } from "@types";

const GetStarted = ({ goToNextStep }: CommonStepProps) => {
  return (
    <StepsWrapper
      title="Get Started"
      description="Click the button below to get started"
      onFinish={goToNextStep}
      hideCancellation
    />
  );
};

export default GetStarted;
