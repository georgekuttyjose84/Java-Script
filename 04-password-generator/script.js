const btn = document.querySelector('.btn');
const inputItem = document.getElementById('text');
const passwordLength = document.getElementById('password-length');
const upperCase = document.getElementById('upper-case');
const lowerCase = document.getElementById('lower-case');
const digits = document.getElementById('digits');
const symbols = document.getElementById('symbols');

const chars = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  num: '0123456789',
  sym: '~!@#$%^&*()_+}{":?></*-+.',
};

btn.addEventListener('click', () => {
  let list = '';
  if (upperCase.checked) list += chars.upper;
  if (lowerCase.checked) list += chars.lower;
  if (digits.checked) list += chars.num;
  if (symbols.checked) list += chars.sym;

  if (!list) return alert('Please select at least one option!');
  if (!passwordLength.value) return alert('Please enter password length!');

  const length = parseInt(passwordLength.value);
  let password = '';

  for (let i = 0; i < length; i++) {
    password += list[Math.floor(Math.random() * list.length)];
  }

  inputItem.value = password;
});
