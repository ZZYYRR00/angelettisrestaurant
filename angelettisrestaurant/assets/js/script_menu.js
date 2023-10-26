
//----------------------PER L'XML------------------------//

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "./assets/xml_xsd/Menu.xml", true);
    xhttp.send();
}

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var antipasti = xmlDoc.getElementsByTagName("Antipasto");
    var primi = xmlDoc.getElementsByTagName("Primo");
    var secondi = xmlDoc.getElementsByTagName("Secondo");
    var contorni = xmlDoc.getElementsByTagName("Contorno");
    var dolci = xmlDoc.getElementsByTagName("Dolce");
    var bevande = xmlDoc.getElementsByTagName("Bevanda");
    var vini = xmlDoc.getElementsByTagName("Vino");
    var drinks = xmlDoc.getElementsByTagName("Drink");

    //----------------------Antipasti----------------------//

    for (var i = 0; i < antipasti.length; i++) {
        var nomeAntipasto = antipasti[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
        var descrizioneAntipasto = antipasti[i].getElementsByTagName("descrizione")[0].childNodes[0].nodeValue;
        var prezzoAntipasto = antipasti[i].getElementsByTagName("prezzo")[0].childNodes[0].nodeValue;

        
        document.querySelectorAll(".card-title")[i].innerHTML = nomeAntipasto;
        document.querySelectorAll(".card-text.label-1")[i].innerHTML = descrizioneAntipasto;
        document.querySelectorAll(".span.title-2")[i].innerHTML = prezzoAntipasto;
    }

    //----------------------Primi----------------------//

    for (var j = 0; j < primi.length; j++) {
        var nomePrimo = primi[j].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
        var descrizionePrimo = primi[j].getElementsByTagName("descrizione")[0].childNodes[0].nodeValue;
        var prezzoPrimo = primi[j].getElementsByTagName("prezzo")[0].childNodes[0].nodeValue;


        document.querySelectorAll(".card-title")[j + antipasti.length ].innerHTML = nomePrimo;
        document.querySelectorAll(".card-text.label-1")[j + antipasti.length].innerHTML = descrizionePrimo;
        document.querySelectorAll(".span.title-2")[j + antipasti.length].innerHTML = prezzoPrimo;
    }

     //----------------------Secondi----------------------//

    for (var k = 0; k < secondi.length; k++) {
        var nomeSecondo = secondi[k].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
        var descrizioneSecondo = secondi[k].getElementsByTagName("descrizione")[0].childNodes[0].nodeValue;
        var prezzoSecondo = secondi[k].getElementsByTagName("prezzo")[0].childNodes[0].nodeValue;

       
        document.querySelectorAll(".card-title")[k + antipasti.length + primi.length].innerHTML = nomeSecondo;
        document.querySelectorAll(".card-text.label-1")[k + antipasti.length + primi.length].innerHTML = descrizioneSecondo;
        document.querySelectorAll(".span.title-2")[k + antipasti.length + primi.length].innerHTML = prezzoSecondo;
    }

    //----------------------Contorni----------------------//

    for (var y = 0; y < contorni.length; y++) {
        var nomeContorno = contorni[y].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
        var descrizioneContorno = contorni[y].getElementsByTagName("descrizione")[0].childNodes[0].nodeValue;
        var prezzoContorno = contorni[y].getElementsByTagName("prezzo")[0].childNodes[0].nodeValue;

        
        document.querySelectorAll(".card-title")[y + antipasti.length + primi.length + secondi.length].innerHTML = nomeContorno;
        document.querySelectorAll(".card-text.label-1")[y + antipasti.length + primi.length + secondi.length].innerHTML = descrizioneContorno;
        document.querySelectorAll(".span.title-2")[y + antipasti.length + primi.length + secondi.length].innerHTML = prezzoContorno;
    }

    //----------------------Dolci----------------------//

    for (var z = 0; z < dolci.length; z++) {
        var nomeDolce = dolci[z].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
        var descrizioneDolce = dolci[z].getElementsByTagName("descrizione")[0].childNodes[0].nodeValue;
        var prezzoDolce = dolci[z].getElementsByTagName("prezzo")[0].childNodes[0].nodeValue;

        
        document.querySelectorAll(".card-title")[z + antipasti.length + primi.length + secondi.length + contorni.length].innerHTML = nomeDolce;
        document.querySelectorAll(".card-text.label-1")[z + antipasti.length + primi.length + secondi.length + contorni.length].innerHTML = descrizioneDolce;
        document.querySelectorAll(".span.title-2")[z + antipasti.length + primi.length + secondi.length + contorni.length].innerHTML = prezzoDolce;
    }

        //----------------------BEVANDE----------------------//

        for (var w = 0; w < bevande.length; w++) {
            var nomeBevanda = bevande[w].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
            var descrizioneBevanda = bevande[w].getElementsByTagName("descrizione")[0].childNodes[0].nodeValue;
            var prezzoBevanda = bevande[w].getElementsByTagName("prezzo")[0].childNodes[0].nodeValue;
    
            
            document.querySelectorAll(".card-title")[w + antipasti.length + primi.length + secondi.length + contorni.length + dolci.length].innerHTML = nomeBevanda;
            document.querySelectorAll(".card-text.label-1")[w + antipasti.length + primi.length + secondi.length + contorni.length + dolci.length].innerHTML = descrizioneBevanda;
            document.querySelectorAll(".span.title-2")[w + antipasti.length + primi.length + secondi.length + contorni.length + dolci.length].innerHTML = prezzoBevanda;
        }

        //----------------------VINI----------------------//

        for (var h = 0; h < vini.length; h++) {
            var nomeVino = vini[h].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
            var descrizioneVino = vini[h].getElementsByTagName("descrizione")[0].childNodes[0].nodeValue;
            var prezzoVino = vini[h].getElementsByTagName("prezzo")[0].childNodes[0].nodeValue;
    
            
            document.querySelectorAll(".card-title")[h + antipasti.length + primi.length + secondi.length + contorni.length + dolci.length + bevande.length].innerHTML = nomeVino;
            document.querySelectorAll(".card-text.label-1")[h + antipasti.length + primi.length + secondi.length + contorni.length + dolci.length + bevande.length].innerHTML = descrizioneVino;
            document.querySelectorAll(".span.title-2")[h + antipasti.length + primi.length + secondi.length + contorni.length + dolci.length + bevande.length].innerHTML = prezzoVino;
        }

        //----------------------DRINKS----------------------//

        for (var o = 0; o < drinks.length; o++) {
            var nomeDrink = drinks[o].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
            var descrizioneDrink = drinks[o].getElementsByTagName("descrizione")[0].childNodes[0].nodeValue;
            var prezzoDrink = drinks[o].getElementsByTagName("prezzo")[0].childNodes[0].nodeValue;
    
            
            document.querySelectorAll(".card-title")[o + antipasti.length + primi.length + secondi.length + contorni.length + dolci.length + bevande.length + vini.length].innerHTML = nomeDrink;
            document.querySelectorAll(".card-text.label-1")[o + antipasti.length + primi.length + secondi.length + contorni.length + dolci.length + bevande.length + vini.length].innerHTML = descrizioneDrink;
            document.querySelectorAll(".span.title-2")[o + antipasti.length + primi.length + secondi.length + contorni.length + dolci.length + bevande.length + vini.length].innerHTML = prezzoDrink;
        }
}
