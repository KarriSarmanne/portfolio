const nimi = "Karri Sarmanne";
let ikani = 16;
let opiskelija = true;

if(opiskelija == true){
  let opiskelija = "opiskelija";
  const surffaajalle = `Hei sivuilleni surffaaja, olen ${nimi} ja olen ${ikani} vuotias ${opiskelija}`;
  console.log(surffaajalle);
}else{
  let opiskelija = "ammattilainen";
  const surffaajalle = `Hei sivuilleni surffaaja, olen ${nimi} ja olen ${ikani} vuotias ${opiskelija}`;
  console.log(surffaajalle);
};

const ystavat = ['Roope Pesonen', 'Leo Toivonen', 'Antero Ruban', 'Timi Lukumies'];
console.log('1. ystäväni: ' + ystavat[0].split(' ').join(' '));
console.log('2. ystäväni: ' + ystavat[1].split(' ').join(' '));
console.log('3. ystäväni: ' + ystavat[2].split(' ').join(' '));
console.log('4. ystäväni: ' + ystavat[3].split(' ').join(' '));

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




function teemaVaihto(){
  let teema = document.getElementById('teemaDIV');
  if (teema.style.display == 'none'){
    teema.style.display = 'block';
  }else{
    teema.style.display = 'none';
  };
};
document.querySelector('.teemaTallennus').addEventListener('click', e =>{
  e.preventDefault();
  const teema = document.querySelector('input[name="theme"]:checked').value;
  if (teema == 'vaalea'){
    document.body.style.background = '#e7f2ff';
    document.body.style.color = '#202020';
    document.body.style.textShadow = '';
    document.getElementById('alue1').style.background = '#6969ff80';
    document.getElementById('alue1').style.color = '#202020';
    document.getElementById('alue1').style.borderColor = '#6969ff';
    document.getElementById('opinnot').style.background = '#bbbbff';
    document.getElementById('opinnotTaulukko').style.background = '#bbbbff';
    document.getElementById('laatikko').style.background = '#6969ff50';
    document.getElementById('laatikko').style.border = '3px double #6969ff';
  }else if (teema == 'tumma'){
    document.body.style.background = '#424242';
    document.body.style.color = '#e7f2ff';
    document.body.style.textShadow = '0px 0px 2px black';
    document.getElementById('alue1').style.background = '#6969ff80';
    document.getElementById('alue1').style.color = '#e6e6e6';
    document.getElementById('alue1').style.borderColor = '#6969ff';
    document.getElementById('opinnot').style.background = '#6969ff70';
    document.getElementById('opinnotTaulukko').style.background = '#6969ff80';
    document.getElementById('laatikko').style.background = '#6969ff80';
    document.getElementById('laatikko').style.border = '3px double #6969ff';
  }else{
    document.body.style.background = '#ff0033';
    document.body.style.color = '#00cc00';
    document.body.style.textShadow = '0px 0px 2px #0000ff';
    document.getElementById('alue1').style.background = '#33cc33';
    document.getElementById('alue1').style.color = '#fff';
    document.getElementById('alue1').style.borderColor = '#0000ff';
    document.getElementById('opinnot').style.background = '#6969ff';
    document.getElementById('opinnotTaulukko').style.background = '#ffff00';
    document.getElementById('laatikko').style.background = '#00ff00';
    document.getElementById('laatikko').style.border = '3px double #6969ff';
  };
});