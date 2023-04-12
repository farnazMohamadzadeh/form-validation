import rules from "./rules";

export const validator = (value, validations) => {
 
  let validationResult = [];
  for (const validation of validations) {
    if (validation.value === rules.requireValue) {
      value.trim().length === 0 && validationResult.push(false);
    }
    if (validation.value === rules.minValue) {
      value.trim().length < validation.min && validationResult.push(false);
    }
    if (validation.value === rules.maxValue) {
      value.trim().length > validation.max && validationResult.push(false);
    }
  }

  if (validationResult.length) {
    return false;
  } else {
    return true;
  }
};
