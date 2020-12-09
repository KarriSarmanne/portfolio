const nimi = "Karri Sarmanne";
let ika = 16;
let opiskelija = true;

if(opiskelija == true){
  let opiskelija = "opiskelija";
  const surffaajalle = `Hei sivuilleni surffaaja, olen ${nimi} ja olen ${ika} vuotias ${opiskelija}`;
  console.log(surffaajalle);
}else{
  let opiskelija = "ammattilainen";
  const surffaajalle = `Hei sivuilleni surffaaja, olen ${nimi} ja olen ${ika} vuotias ${opiskelija}`;
  console.log(surffaajalle);
};

const ystavat = ['Roope Pesonen', 'Leo Toivonen', 'Antero Ruban', 'Timi Lukumies'];
console.log('1. ystäväni: ' + ystavat[0].split(' ')[0] + ' ' + ystavat[0].split(' ')[1]);
console.log('2. ystäväni: ' + ystavat[1].split(' ')[0] + ' ' + ystavat[1].split(' ')[1]);
console.log('3. ystäväni: ' + ystavat[2].split(' ')[0] + ' ' + ystavat[2].split(' ')[1]);
console.log('4. ystäväni: ' + ystavat[3].split(' ')[0] + ' ' + ystavat[3].split(' ')[1]);

let taysiIkainen;
const perhe = [
  {
    id: 1,
    etunimi: 'Karri',
    ika: 16,
    taysiIkainen: false
  },
  {
    id: 2,
    etunimi: 'Kiia',
    ika: 14,
    taysiIkainen: false
  },
  {
    id: 3,
    etunimi: 'Kaisla',
    ika: 8,
    taysiIkainen: false
  },
  {
    id: 4,
    etunimi: 'Antti',
    ika: 47,
    taysiIkainen: true
  },
  {
    id: 5,
    etunimi: 'Anne',
    ika: 43,
    taysiIkainen: true
  },
];

let taysiIkaiset;
let alaikaiset;
const perheenjasenet = perhe.map(function(perheenjasen){
  if(perheenjasen.taysiIkainen == true){
    let taysiIkaiset = perheenjasen.etunimi
    console.log("Täysi-ikäiset perheenjäseneni: " + taysiIkaiset)
  }else{
    let alaikaiset = perheenjasen.etunimi
    console.log("Alaikäiset perheenjäseneni: " + alaikaiset)
  }
});