const emailnappi = document.querySelector('.lahetanappi')

emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("yhteys on toimii");
    }
  };

  var data = JSON.stringify({
    "EmailMsg": "Tähän tulee postin sisältö",
    "EmailAddress": "karri.sarmanne@edu.salpaus.fi",
    "EmailTo": "karri.sarmanne@edu.lahti.fi",
    "EmailName": "Teppo Tyyppi"
  });
  
  xhr.send(data);
};