import { Step } from "@types";

export const getStepsFlow = () => [
  Step.GetStarted,
  Step.Email,
  Step.Password,
  Step.BankDetails,
  Step.carModelSelecting,
  Step.FileAttachment,
  Step.FlowIsFinished,
];
