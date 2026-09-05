const currentyear = document.querySelector("#current-year");
const modificationDate = document.querySelector("#lastModified");

const today = new Date();

const formatter = new Intl.DateTimeFormat('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false 
});

currentyear.innerHTML = `&copy; ${today.getFullYear()} `;
modificationDate.innerHTML = ` Last Modification: ${formatter.format(today).replace(',', '')} `;
