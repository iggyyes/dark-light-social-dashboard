console.log('no w koncu');

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
    localStorage.setItem('colorMode', 'dark');
  };
  
const setLightMode = () => {
    document.querySelector('body').classList = 'light';
    localStorage.setItem('colorMode', 'light');
  };

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
  radioButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      darkButton.checked ? setDarkMode() : setLightMode();
    });
  });
