import { extend } from 'vee-validate';
import { messages } from 'vee-validate/dist/locale/pt_BR.json';
import { email, min, required } from 'vee-validate/dist/rules';

extend('email', {
  ...email,
  message: messages.email
});

extend('min', {
  ...min,
  message: messages.min
});

extend('required', {
  ...required,
  message: messages.required
});
