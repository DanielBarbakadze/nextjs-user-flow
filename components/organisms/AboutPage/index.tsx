import { List, Typography } from "antd";
import Link from "next/link";
import React from "react";

type LinksType = {
  href: string;
  title: string;
};

const links = [
  {
    title: "Github",
    href: "https://github.com/DanielBarbakadze",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-barbakadze-2792631a0",
  },
];

const AboutPage = () => {
  return (
    <div>
      <Typography.Title level={2}>You can contact me here</Typography.Title>

      <List
        size="small"
        bordered
        dataSource={links}
        renderItem={({ title, href }) => (
          <List.Item>
            <Link href={href}>{title}</Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default AboutPage;
