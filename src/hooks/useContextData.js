import { useState } from "react";
import { isAuth } from "../utilities/helper";

const useContextData = () => {
  const [user, setUser] = useState(isAuth());
  const [isLoading, setIsLoading] = useState(false);

  const [packageChargeTimeName, setPackageChargeTimeName] = useState([]);

  //car rent upload data state

  return {
    user,
    setUser,

    isLoading,
    setIsLoading,

    packageChargeTimeName,
    setPackageChargeTimeName,
  };
};

export default useContextData;
