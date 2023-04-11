import React, { useReducer } from "react";
import { validator } from "../Validators/Validator";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
      };
    }
    default: {
      return state;
    }
  }
};

export const Input = ({
  id,
  name,
  type,
  className,
  placeholder,
  label,
  validations,
}) => {
  const [formInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const changeHandler = (event) => {
    console.log(event.target.value);
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validations,
    });
  };

  return (
    <div class="relative">
      <input
        id={id}
        name={name}
        type={type}
        className={`${className} ${
          formInput.isValid ? "border-green-300" : "border-red-200"
        }`}
        placeholder={placeholder}
        value={formInput.value}
        onChange={changeHandler}
      />
      <label
        htmlFor={name}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};
