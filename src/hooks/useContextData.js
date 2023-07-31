import { useState } from "react";
import { isAuth } from "../utilities/helper";

const useContextData = () => {
  const [user, setUser] = useState(isAuth());
  const [isLoading, setIsLoading] = useState(false);

  const [cartInfo, setCartInfo] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  //car rent upload data state

  return {
    user,
    setUser,
    totalAmount,
    setTotalAmount,
    isLoading,
    setIsLoading,
    cartInfo,
    setCartInfo,
  };
};

export default useContextData;
