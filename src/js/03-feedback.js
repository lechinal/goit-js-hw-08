// Îndeplinește acest task în fișierele 03-feedback.html și 03-feedback.js. Împarte-l în mai multe subsarcini:

// Urmărește în formular evenimentul de input și la fiecare modificare să se salveze local un obiect cu câmpurile email și message,
// unde vor fi stocate valorile curente ale câmpurilor din formular. Cheia obiectului va fi "feedback-form-state"

// La încărcarea paginii, verifică starea storage-ului, iar dacă există date salvate, completează câmpurile formularului cu aceste date.
// În caz contrar, câmpurile vor fi goale.

// Când se trimite formularul, la evenimentul submit, șterge câmpurile din local storage și afișează în consolă obiectul cu câmpurile email,
// message și valorile lor curente.

// Asigură-te că datele vor fi stocate și actualizate doar o dată la 500 de milisecunde.
// Pentru a face acest lucru, adaugă la proiect și utilizează librăria lodash.throttle.

// Imi aduc form, email si submit in js

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('label [name="email"]');
const messageInput = document.querySelector('label [name="message"]');

const STORAGE_KEY = 'feedback-form-state';

console.log(emailInput);
console.log(messageInput);

form.addEventListener('input', throttle(changeInput, 500));

// * Stocare data pe LocalStorage

function changeInput() {
  const email = emailInput.value;
  const message = messageInput.value;

  const formData = { email, message };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// * Recuperare data din LocalStorage si adaugare in formular

whenPageLoads();

function whenPageLoads() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveData) {
    emailInput.value = saveData.email;
    messageInput.value = saveData.message;
  }
}

// * Afisare in consola si stergere de pe localStorage

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = emailInput.value;
  const message = messageInput.value;

  console.log(`Email: ${email} / Mesaj:${message}`);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
