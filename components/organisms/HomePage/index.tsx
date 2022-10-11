import { Typography } from "antd";

const HomePage = () => {
  return (
    <div>
      <Typography.Title level={2}>The Coding Challenge</Typography.Title>

      <Typography.Paragraph>
        Please build a multi-step register flow that captures all needed details
        like:
      </Typography.Paragraph>

      <ul>
        <li>- Email</li>
        <li>- Password</li>
        <li>- Bank details</li>
        <li>- A selector to choose your car model</li>
        <li>
          - A file upload option (The customer should upload a picture of his
          car registration).
        </li>
      </ul>

      <Typography.Paragraph className="pt-16">
        Please save all the data into a JSON file downloaded once the
        registration is submitted.
      </Typography.Paragraph>
    </div>
  );
};

export default HomePage;
