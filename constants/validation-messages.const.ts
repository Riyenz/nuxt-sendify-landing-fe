export const VALIDATION_MESSAGES = {
  email: 'Must be a valid email address.',
  minLength: 'Must have a length no less than {{min}}.',
  minValue: 'Must have a value no less than {{min}}.',
  between: 'Value should be between {{min}} and {{max}}.',
  required: 'Required field.',
  url: 'Must be a valid url.',
  isStrongPassword: 'Must have at least UPPERCASE, lowercase and a number',
} as { [key: string]: string }
