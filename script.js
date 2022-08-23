const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings-btn');
const imageSection = document.querySelector('.imageSection');

const days = document.querySelector('.days-count');
const hours = document.querySelector('.hours-count');
const minutes = document.querySelector('.minutes-count');
const seconds = document.querySelector('.seconds-count');
const eventSpan = document.querySelector('.event');

const eventName = document.querySelector('.event-name');
const eventDay = document.querySelector('.event-day');
const eventMonth = document.querySelector('.event-month');
const eventYear = document.querySelector('.event-year');
const eventImage = document.querySelector('.event-image');

const saveBtn = document.querySelector('.save');
let usersTime;

settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('active');
});
