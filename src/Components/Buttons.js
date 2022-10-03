import React from "react";

export const SubmitButton = ({
  className,
  onClick,
  style,
  disabled,
  type,
  children,
}) => {
  return (
    <button
      className={`mt-4 w-2/4 bg-custom-button-blue text-white mx-auto text-center rounded-lg py-2 px-4 box-border font-medium text-base shadow-md hover:shadow-lg ${
        className || ""
      }`}
      onClick={onClick}
      style={style}
      // disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export const DeleteButton = ({
  className,
  onClick,
  style,
  disabled,
  type,
  children,
}) => {
  return (
    <button
      className={`p-2 ml-4 bg-custom-error text-white mx-auto text-center rounded-lg py-2 px-4 box-border font-medium text-base shadow-md hover:shadow-lg ${
        className || ""
      }`}
      onClick={onClick}
      style={style}
      // disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
