import { CustomHelpers } from '@hapi/joi';

export const passwordValidator = (value: string, helper: CustomHelpers) => {
  const hasNumber = /[0-9]/.test(value);
  const hasUpperCase = value.toLowerCase() !== value;
  const hasSpecial = /[^0-9a-zA-ZÇ]/.test(value);

  if (hasNumber && hasUpperCase && hasSpecial && value.length >= 8) {
    return value;
  }

  helper.message({
    'password.invalid':
      'Password must have 8 caracters, at least one capital case letter, at least one special letter and at least one number',
  });

  return helper.error('password.invalid');
};
