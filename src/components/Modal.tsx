import React, { useState } from "react";
import { ForgotPasswordForm, LoginForm, SignupForm } from "../components";
import WriteReview from "./WriteReview";

const Modal = ({ guitarTitle }: any) => {
  const [form, setForm] = useState("review");

  return (
    <div className="fixed bottom-0 inset-x-0 p-4 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div className="bg-white rounded-lg p-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        {form === "review" && (
          <WriteReview setForm={setForm} guitarTitle={guitarTitle} />
        )}
        {/* {form === "login" && <LoginForm setForm={setForm} />} */}
        {/* {form === "signup" && <SignupForm setForm={setForm} />} */}
        {/* {form === "forgot" && <ForgotPasswordForm setForm={setForm} />} */}
      </div>
    </div>
  );
};

export default Modal;
