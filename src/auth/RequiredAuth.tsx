import React, { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  isLogin?: boolean;
  children: ReactElement;
};

const RequiredAuth = ({ isLogin, children }: Props) => {
  const location = useLocation();
  if (isLogin) {
    return children;
  }
  return (
    <Navigate
      to="/"
      state={{
        from: location,
      }}
      replace
    />
  );
};

export default RequiredAuth;
