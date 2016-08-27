
function Produtos(tipo, perimetro) {
    //this.unidade = unidade;
    this.tipo = tipo;
    this.perimetro = perimetro / 100;
    //this.nivel = nivel;
    this.getRadius = function() {
        var raio = (this.perimetro / Math.PI) / 2;
        //return "O raio do depósito é: " + raio;
        return raio;
    };
    this.volume = function(nivel) {
        // In meters
        var altura = nivel / 100;
        // Cubical meters
        var vol = Math.PI * Math.pow(this.getRadius(), 2) * altura;
        var vol_liters = vol.toFixed(3) * 1000;
        // In Liters
        return "O recipiente contém " + vol_liters + " litros de " + this.tipo;
    };
    
}
var genesysTank = new Produtos("Genesys", 200);
//console.log("O volume em litros Tanque Genesys = "+genesysTank);
var carbonateTank = new Produtos("Carbonato de Calcio", 239);
//console.log("O volume em litros Tanque Carbonato = "+carbonateTank);

var display = function(nivel_prod) {
  nivel_prod = document.getElementById("niv").value;
  nivel_prod = Number(nivel_prod);
  var resultado = document.getElementById("show");
  //genesysTank.volume(nivel);
  resultado.innerHTML = genesysTank.volume(nivel_prod);
};

var nivelCarbonato = function(nivel_carbonato) {
  //Nivel carbonato de calcio;
   nivel_carbonato = document.getElementById("carb").value;
   var resulCarbonato = document.getElementById("show2");
   resulCarbonato.innerHTML = carbonateTank.volume(nivel_carbonato);
};


var genesys;
var carbonato;
$("input#genesys").on("click", function() {
 console.log("You clicked me so I'm checked and carbonato is uncheked");
 genesys = true;
 carbonato = false;
 
});

$("input#carbonato").on("click", function() {
 console.log("You clicked me so I'm checked and genesys is unchecked");
 genesys = false;
 carbonato = true;
 
});

console.log ("genesys = "+ genesys);
console.log ("carbonato = "+ carbonato);

