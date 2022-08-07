import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useRedirectSign = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const data = await axios.post("/dj-rest-auth/token/refresh/");
        console.log(data);
        console.log("RedirectSign");
        // if user is logged in
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // if user is not logged in
        // if (userAuthStatus === "loggedOut") {
        //   history.push("/");
        // }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};

export default useRedirectSign