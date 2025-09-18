// Wir holen uns die relevanten HTML-Elemente
const portionsInput = document.getElementById('portions');
const adjustBtn = document.getElementById('adjust-btn');
const ingredients = document.querySelectorAll('.ingredient');

// Basisportionen festlegen
const basisPortions = 4; // Annahme: Die Mengen im HTML sind für 4 Portionen
const basisAmounts = []; // Array, um die Originalmengen zu speichern

// Zuerst speichern wir alle Originalmengen der Zutaten
ingredients.forEach(ingredient => {
  const amountElement = ingredient.querySelector('.amount');
  basisAmounts.push(parseFloat(amountElement.textContent)); // Wir speichern die Zahl als Dezimalzahl
});

// Event-Listener für den Button, der die Anpassung startet
adjustBtn.addEventListener('click', () => {
  // Aktuelle Portionen aus dem Eingabefeld holen
  const newPortions = parseFloat(portionsInput.value);

  // Überprüfen, ob die Eingabe gültig ist
  if (isNaN(newPortions) || newPortions < 1) {
    alert('Bitte gib eine gültige Zahl ein.');
    return;
  }

  // Jede Zutat anpassen
  ingredients.forEach((ingredient, index) => {
    const amountElement = ingredient.querySelector('.amount');
    const basisAmount = basisAmounts[index];

    // Neue Menge berechnen und auf 2 Nachkommastellen runden
    const newAmount = (basisAmount / basisPortions) * newPortions;
    amountElement.textContent = newAmount.toFixed(0);
  });
});