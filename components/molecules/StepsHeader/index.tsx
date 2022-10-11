import { Progress, Typography } from "antd";

type StepsHeaderProps = {
  current: number;
  max: number;
};

const StepsHeader = ({ current, max }: StepsHeaderProps) => {
  return (
    <div className="flex flex-col">
      <Progress
        percent={Math.floor((current / max) * 100)}
        showInfo={false}
        status="normal"
        strokeWidth={4}
      />

      <Typography.Title level={5} className="text-center">
        Step {current + 1} / {max}
      </Typography.Title>
    </div>
  );
};

export default StepsHeader;
