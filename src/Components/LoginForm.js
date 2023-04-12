import React from "react";
import { useForm } from "../hooks/useForm";
import {
  maxValidator,
  minValidator,
  requireValidator,
} from "../Validators/rules";
import { Input } from "./Input";

export const LoginForm = () => {
  const [formState, onInputHandler] = useForm(
    {
      username: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );
  const submitHandler = (event) => {
    event.preventDefault();
    if (formState.isFormValid) {
      const username = formState.inputs["username"].value;
      alert(`you logged in successfully ${username}`);
    }
  };
  return (
    <div className="min-h-screen bg-blue-900 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 w-[30rem] sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <form
          className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
          onSubmit={submitHandler}
        >
          <div className=" mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <Input
                  id="username"
                  name="username"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="username "
                  label="Username"
                  validations={[
                    requireValidator(),
                    minValidator(6),
                    maxValidator(10),
                  ]}
                  onInputHandler={onInputHandler}
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full border-b-2  text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                  label="Password"
                  validations={[
                    requireValidator(),
                    minValidator(6),
                    maxValidator(10),
                  ]}
                  onInputHandler={onInputHandler}
                />

                <div className="relative">
                  <button
                    type="Submit"
                    className={` text-white rounded-md px-2 py-1 mt-5 ${
                      formState.isFormValid ? "bg-blue-600" : "bg-blue-500"
                    }`}
                    disabled={!formState.isFormValid}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
