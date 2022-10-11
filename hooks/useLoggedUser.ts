import { FormValuesTypes } from "types/registrationFormValues";
import useLocalStorage from "./useLocalStorage";

const useLoggedUser = () => {
  const [loggedUser, setLoggedUser] = useLocalStorage<FormValuesTypes>(
    "loggedUser",
    {}
  );

  return {
    user: Object.keys(loggedUser).length > 0 ? loggedUser : null,
    setUser: setLoggedUser,
    logOut: () => setLoggedUser({}),
  };
};

export default useLoggedUser;
