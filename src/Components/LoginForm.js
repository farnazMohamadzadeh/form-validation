import React from "react";
import {
  maxValidator,
  minValidator,
  requireValidator,
} from "../Validators/rules";
import { Input } from "./Input";

export const LoginForm = () => {
  return (
    <div class="min-h-screen bg-blue-900 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 w-[30rem] sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <form class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class=" mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Login Form</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <Input
                  id="email"
                  name="email"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Email address"
                  label="Email Address"
                  validations={[
                    requireValidator(),
                    minValidator(6),
                    maxValidator(10),
                  ]}
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
                />

                <div class="relative">
                  <button class="bg-blue-500 text-white rounded-md px-2 py-1">
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
