import { Button, Form, Input, message, Typography } from "antd";
import { useRouter } from "next/router";

import useLocalStorage from "hooks/useLocalStorage";
import useLoggedUser from "hooks/useLoggedUser";

import { UsersDataType } from "types/registrationFormValues";

enum FieldNames {
  Email = "email",
  Password = "password",
}

type LoginFormTypes = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [usersData] = useLocalStorage<UsersDataType>("usersData", {});
  const { user, setUser, logOut } = useLoggedUser();

  const router = useRouter();

  const onFinish = ({ email, password }: LoginFormTypes) => {
    if (Object.keys(usersData).includes(email)) {
      if (usersData[email].password === password) {
        setUser(usersData[email]);
        router.push("/");
        return;
      }
    }

    message.error("Wrong email or password");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleLogOut = () => {
    logOut();
    router.push("/");
  };

  if (user) {
    return (
      <div className="flex flex-col">
        <Typography.Title level={2}>You are already logged in</Typography.Title>

        <div className="flex justify-center">
          <Button onClick={handleLogOut}>Log out</Button>
        </div>
      </div>
    );
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name={FieldNames.Email}
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={FieldNames.Password}
        label="Password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className="bg-primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
