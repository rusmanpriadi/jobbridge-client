import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }

  if (email.length > 254) {
    return "Email is too long";
  }

  return undefined;
};

export const composeFormValidation = (
  ...validators
) => {
  return (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
};

export  class FormValidators {
  static required(value) {
    return value ? undefined : "Required";
  }
}
