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