const emailnappi = document.querySelector('.lahetanappi')
emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("yhteys on toimii");
    };
  };
  const nimi = document.querySelector('#nimi').value;
  const email = document.querySelector('#email').value;
  console.log(nimi);
  const viesti = document.querySelector('#viesti').value;
  console.log(viesti);
  var data = JSON.stringify({
    "EmailMsg": viesti,
    //"EmailAddress": "karri.sarmanne@edu.salpaus.fi",
    "EmailTo": "karri.sarmanne",
    "EmailName": nimi + " " + email
  });
  xhr.send(data);
};

var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    
    xhr.onload = function() {
    
        var status = xhr.status;
        
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    
    xhr.send();
};

getJSON('https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true', function(err, data){
  let taulukko = `<table width="100%" style="border=1px solid black">`;
  /*const historia = data.map(function(paiva){
    if(paiva.confirmedCases != undefined){
      taulukko = taulukko + `<tr><td>${paiva.confirmedCases}</td></tr>`; 
    }
    else if(paiva.testedCases != undefined){
      taulukko = taulukko + `<tr><td>${paiva.testedCases}</td></tr>`; 
    }
    else if(paiva.infected != undefined){
      taulukko = taulukko + `<tr><td>${paiva.infected}</td></tr>`; 
    }
    else{
      taulukko = taulukko + `<tr><td>Ei dataa</td></tr>`; 
    }
  });
  taulukko = taulukko + `</table>`;
  document.body.innerHTML = taulukko;*/
  document.querySelector('#uutiset').innerHTML = "Tartunnan saaneet: " + data.infected + "<br><br>Testatut: " + data.tested + "<br><br>Kuolemat: " + data.deaths + "<br><br><a href='korona.html'>Historiatietoa</a>";
});