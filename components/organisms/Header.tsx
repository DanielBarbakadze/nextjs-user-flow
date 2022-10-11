import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";

import useLoggedUser from "hooks/useLoggedUser";
import { green1, red1 } from "@components/atoms/core/colors";
import { Button } from "antd";
import { useRouter } from "next/router";

const Routes = [
  {
    href: "/",
    title: "Home",
    id: "home",
  },
  {
    href: "/login",
    title: "Login",
    id: "login",
  },
  {
    href: "/register",
    title: "Register",
    id: "register",
  },
  {
    href: "/about",
    title: "About",
    id: "about",
  },
];

const Header = () => {
  const { user } = useLoggedUser();
  const router = useRouter();

  return (
    <header className="border-b-1 border-solid border-gray-1">
      <div className="max-w-1100 mx-auto flex w-full flex-col-reverse md:flex-row p-16 align-center">
        <nav className="w-full">
          <ul className="flex w-full">
            {Routes.map(({ href, title, id }) => (
              <li className="px-16 md:px-40 text-18" key={id}>
                <Link href={href}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-center md:pr-40">
          <UserOutlined
            style={{ color: user ? green1 : red1, fontSize: "14px" }}
          />
          {user && (
            <Button
              type="link"
              className="p-0 px-4 rounded-4 text-black-0"
              onClick={() => router.push("/login")}
            >
              {user.email}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
