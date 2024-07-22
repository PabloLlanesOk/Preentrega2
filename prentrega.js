alert(
  " Hola Bienvenido a Armar tu mochila, Aqui podes armar tu mochila para el inicio de clases"
);
alert("RECUERDE QUE TODAS SUS RESPUESTAS DEBEN ESTAR EN MINUSCULAS");
let mochila;
let costoMochila = 0;
let costoTotal = 0;
let booleano = false;
do {
  alert("la mochila debe ser grande, mediana o pequeña");
  mochila = prompt("tamaño de mochila");
  switch (mochila) {
    case "pequeña":
      costoMochila = 1000;
      booleano = true;
      break;
    case "mediana":
      costoMochila = 1500;
      booleano = true;
      break;
    case "grande":
      costoMochila += 2000;
      booleano = true;
      break;
    default:
      alert("debe ser pequeña mediana o grande");
  }
  costoTotal += costoMochila;
} while (booleano === false);
console.log(mochila);
console.log(costoTotal);
let cartuchera;
let costoCartuchera;
let booleano2 = false;
do {
  alert("Deseas añadir una cartuchera? debe ser simple de 1 piso o 2 pisos");
  cartuchera = prompt("Que tipo de cartuchera quieres?");
  switch (cartuchera) {
    case "simple":
      costoCartuchera = 300;
      booleano2 = true;
      break;
    case "1 piso":
      costoCartuchera = 700;
      booleano2 = true;
      break;
    case "2 pisos":
      costoCartuchera = 1000;
      booleano2 = true;
      break;
    default:
      alert("la cartuchera debe ser de simple, de 1 piso o 2 pisos");
      costoCartuchera = 0;
  }
  costoTotal += costoCartuchera;
} while (booleano2 === false);
console.log(cartuchera);
console.log(costoTotal);
let lapices;
let costoLapices;
let booleano3 = false;
do {
  alert("De que marca quieres tus lapices? Maped, Faber Castell o Filgo");
  lapices = prompt("Que marca de lapices quieres?");
  switch (lapices) {
    case "maped":
      costoLapices = 400;
      booleano3 = true;
      break;
    case "faber castell":
      costoLapices = 700;
      booleano3 = true;
      break;
    case "filgo":
      costoLapices = 300;
      booleano3 = true;
      break;
    default:
      alert("los lapices deben ser de Maped, Faber Castell o Filgo");
      costoLapices = 0;
  }
  costoTotal += costoLapices;
} while (booleano3 === false);
console.log(lapices);
console.log(costoTotal);
let boligrafo;
let costoBoligrafo;
let booleano4 = false;
do {
  alert("De que marca quieres tus boligrafos? Maped, Bic o Filgo");
  boligrafo = prompt("Que tipo de boligrafo quieres?");
  switch (boligrafo) {
    case "maped":
      costoBoligrafo = 200;
      booleano4 = true;
      break;
    case "bic":
      costoBoligrafo = 400;
      booleano4 = true;
      break;
    case "filgo":
      costoBoligrafo = 100;
      booleano4 = true;
      break;
    default:
      alert("el boligrafo debe ser de Maped, Bic o Filgo");
      costoBoligrafo = 0;
  }
  costoTotal += costoBoligrafo;
} while (booleano4 === false);
console.log(boligrafo);
console.log(costoTotal);
let tijera;
let costoTijera;
let booleano5 = false;
do {
  alert("Tenemos tijeras para tu mochila");
  tijera = prompt("Deseas añadir una tijera a tu mochila?");
  switch (tijera) {
    case "si":
      costoTijera = 300;
      booleano5 = true;
      break;
    case "no":
      costoTijera = 0;
      booleano5 = true;
      break;
    default:
      alert("La respuesta debe ser si o no");
      costoTijera = 0;
  }
  costoTotal += costoTijera;
} while (booleano5 === false);
console.log(tijera);
console.log(costoTotal);
let cancelarCompra = (util) => {
  switch (util) {
    case "mochila":
      return costoMochila;
      break;
    case "cartuchera":
      return costoCartuchera;
    case "lapices":
      return costoLapices;
      break;
    case "boligrafo":
      return costoBoligrafo;
      break;
    default:
      break;
  }
};
alert("Por ultimo, deseas quitar algo de la lista?");
let respuesta = prompt("Si o No?");
let quitarArticulo;
if (respuesta === "si") {
  alert("Que articulo deseas eliminar de tu mochila?");
  quitarArticulo = prompt(
    "el articulo a eliminar es: mochila, cartuchera, lapices o boligrafo"
  );
  costoTotal -= cancelarCompra(quitarArticulo);
  console.log(
    `Tu articulo eliminado es ${quitarArticulo}: -${cancelarCompra(
      quitarArticulo
    )}`
  );
  console.log(`Entonces el total de tu compra es: ${costoTotal}`);
} else if (respuesta === "no") {
  console.log(`Tu mochila es ${mochila}: ${costoMochila}`);
  console.log(`Tu cartuchera es de ${cartuchera}: ${costoCartuchera}`);
  console.log(`Tus Lapices son de marca ${lapices}: ${costoLapices}`);
  console.log(`Tu Boligrafo es de marca ${boligrafo}: ${costoBoligrafo}`);
  console.log(`Y el Total de tu compra seria: ${costoTotal}`);
  alert(`Y el Total de tu compra seria: ${costoTotal}`);
} else {
  console.log(`Tu mochila es ${mochila}: ${costoMochila}`);
  console.log(`Tu cartuchera es de ${cartuchera}: ${costoCartuchera}`);
  console.log(`Tus Lapices son de marca ${lapices}: ${costoLapices}`);
  console.log(`Tu Boligrafo es de marca ${boligrafo}: ${costoBoligrafo}`);
  console.log(`Y el Total de tu compra seria: ${costoTotal}`);
  alert(`Y el Total de tu compra seria: ${costoTotal}`);
}
