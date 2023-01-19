import books from "./books.js";


for (let item of books) {
  // console.log(item)
  for (let knyga in item) {
    console.log(`${knyga} knygos:`);
    console.log("-----------------");
    for (let i = 0; i < item[knyga].length; i++) {
    // console.log(item[knyga][i]);
      console.log(`Knygos zanras: ${knyga}`);
      console.log(`ISBN: ${item[knyga][i].ISBN}`);
      console.log(`Metai: ${item[knyga][i].year}`);
      console.log(`Pavadinimas: "${item[knyga][i].name}"`);
      console.log(`Puslapiu skaicius: ${item[knyga][i].pages}`);
      console.log(`Kiekis: ${item[knyga][i].quantity}`);
      console.log(`Kaina: ${item[knyga][i].price}`);
      console.log("===================================");
    }
  }
}
