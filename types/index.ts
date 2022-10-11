export enum Step {
  GetStarted = "getStarted",
  Email = "email",
  Password = "password",
  BankDetails = "bankDetails",
  carModelSelecting = "CarModelSelecting",
  FileAttachment = "fileAttachment",
  FlowIsFinished = "LAST",
}

export type CommonStepProps = {
  goToNextStep: () => void;
  goBack?: () => void;
  onCancel?: () => void;
};
