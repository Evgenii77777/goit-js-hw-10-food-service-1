const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcher = document.querySelector('.theme-switch__toggle');
let newTheme = JSON.parse(localStorage.getItem('theme'))

if (newTheme === null) {
  localStorage.setItem('theme',false)
}

if (newTheme) {
  document.body.classList.add(Theme.DARK);
  switcher.checked = true;
} else {
  document.body.classList.add(Theme.LIGHT);
}

switcher.addEventListener('change', () => {
  document.body.classList.toggle(Theme.DARK);
  if (!newTheme) {
    newTheme = true;
    localStorage.setItem('theme',true)
  } else {
    newTheme = false;
     localStorage.setItem('theme',false)
  }
})
