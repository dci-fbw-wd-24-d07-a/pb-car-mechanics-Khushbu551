const brands = ["Ford", "VW", "Porsche"];
const parts = ["Keilriemen", "Bremsklötze"];
const stock = [
  [3, 4],
  [5, 8],
  [1, 0],
];

const search = "Ford";

const brandIndex = brands.indexOf(search);

if (brandIndex === -1) {
  console.log(`Sorry, wir nehmne keine ${search} an!`);
} else {
  console.log(`Suchergenisse für : ${search}`);
}

for (let i = 0; i < parts.length; i++) {
  const part = parts[i];
  const amount = stock[brandIndex][i];

  if (amount > 0) {
    console.log(`${i + 1}. ${search} ${part} ${amount}`);
  } else {
    console.log(`${i + 1}. Nicht auf Lager: ${search} ${part} ${amount}`);
  }
}
