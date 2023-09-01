import React from "react";
import LoginValidation from "../utils/LoginValidation";

function SignUp() {
  return (
    <div className="w-[100%] max-w-[1200px]	 h-[80vh] flex flex-col	items-center justify-center	 mx-auto">
      <h2 className="text-red-300 text-5xl	font-semibold">SIGNUP</h2>
      <LoginValidation />
    </div>
  );
}

export default SignUp;
