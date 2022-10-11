import { useEffect, useState } from "react";
import { Modal, Typography } from "antd";
import { NextRouter, useRouter } from "next/router";

import StepsHeader from "@components/molecules/StepsHeader";
import GetStarted from "@components/molecules/StepsComponents/GetStarted";
import Email from "@components/molecules/StepsComponents/Email";
import Password from "@components/molecules/StepsComponents/Password";
import BankDetails from "@components/molecules/StepsComponents/BankDetails";
import CarModelSelecting from "@components/molecules/StepsComponents/CarModelSelecting";
import FileAttachment from "@components/molecules/StepsComponents/FileAttachment";
import FlowIsFinished from "@components/molecules/StepsComponents/FlowIsFinished";

import useLoggedUser from "hooks/useLoggedUser";
import useLocalStorage from "hooks/useLocalStorage";
import { getStepsFlow } from "utils/steps";

import { Step } from "@types";
import { FormValuesTypes, UsersDataType } from "types/registrationFormValues";

const LoggedUserScreen = ({ router }: { router: NextRouter }) => {
  setTimeout(() => {
    router.push("/", {});
  }, 3000);

  return (
    <div>
      <Typography.Title level={2}>You are already logged in</Typography.Title>
      <Typography.Text className="block text-center">
        Redirecting to <Typography.Text strong>Home Page</Typography.Text>...
      </Typography.Text>
    </div>
  );
};

const stepsFlow = getStepsFlow();

const RegisterPage = () => {
  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useLoggedUser();
  const [currentUser] = useLocalStorage<FormValuesTypes>("currentUser", {});
  const [usersData, setUsersData] = useLocalStorage<UsersDataType>(
    "usersData",
    {}
  );

  const router = useRouter();

  if (user) {
    return <LoggedUserScreen router={router} />;
  }

  const isLastStep = step === stepsFlow.length - 1;
  const stepIndex = stepsFlow[step];

  const handleOnFinish = () => {
    // TODO: Need to take a look at useLocalStorage hook
    const currentData =
      Object.keys(currentUser).length > 0
        ? currentUser
        : JSON.parse(localStorage.getItem("currentUser") || "{}");

    setUsersData({
      ...usersData,
      [currentData.email as string]: currentData,
    });

    localStorage.removeItem("currentUser");
    router.push("/login");
  };

  const handleOnCancel = () => {
    localStorage.removeItem("currentUser");
    setIsModalOpen(false);
    router.push("/");
  };

  const handleOnBackStep = () => {
    if (step) {
      setStep(step - 1);
    }
  };

  const handleOnNextStep = () => {
    if (isLastStep) {
      handleOnFinish();
    } else {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const commonProps = {
    goToNextStep: handleOnNextStep,
    goBack: handleOnBackStep,
    onCancel: () => setIsModalOpen(true),
  };

  return (
    <section className="flex flex-col w-full h-full max-w-900 grow">
      <StepsHeader current={step} max={stepsFlow.length} />

      <div className="container relative flex flex-col max-w-900 mx-auto grow">
        {stepIndex === Step.GetStarted && <GetStarted {...commonProps} />}
        {stepIndex === Step.Email && <Email {...commonProps} />}
        {stepIndex === Step.Password && <Password {...commonProps} />}
        {stepIndex === Step.BankDetails && <BankDetails {...commonProps} />}
        {stepIndex === Step.carModelSelecting && (
          <CarModelSelecting {...commonProps} />
        )}
        {stepIndex === Step.FileAttachment && (
          <FileAttachment {...commonProps} />
        )}
        {stepIndex === Step.FlowIsFinished && (
          <FlowIsFinished {...commonProps} />
        )}
      </div>

      <Modal
        title="You sure to cancel registration?"
        open={isModalOpen}
        onOk={handleOnCancel}
        onCancel={() => setIsModalOpen(false)}
      >
        <Typography.Text>All the provided info will be removed</Typography.Text>
      </Modal>
    </section>
  );
};

export default RegisterPage;
