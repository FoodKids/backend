var express = require("express"),
  app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// template
// app.get("/", function(request, response){
//   response.end("");
// }); 

function getFoods(restriction, meal) {
  var foods = new Array();

  switch (restriction) {
    case "celiaca":
      if (meal == "cafe") {
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Tapioca recheada com banana e mel" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Crepioca de cacau" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Pão de queijo vegano" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Pão de linhaça" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Pãezinhos de abóbora" });
      } else if (meal == "almoco") {
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Bifes de frango com tomate e hortelã" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Strogonoff sem glúten e sem leite" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Fusili sem glúten" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Quibe de couve flor" });
      } else if (meal == "jantar") {
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Pizza com massa de frango" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Kibe sem glúten" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Spaghetti de legumes" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Hamburguer de quinoa" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Nhoque de batata doce" });
      }
      break;
    case "vegetariano":
      if (meal == "almoco" || meal == "jantar") {
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Estrogonofe de carne de soja." });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Curry de carne de soja com legumes." });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Carne de soja com cream cheese." });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Mini suflês ou omeletes de forno." });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Nhoque de mandioquinha recheado com gorgonzola na manteiga de ervas." });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Penne verde com creme de brie e cebolas caramelizadas." });
      }
      break;
    case "vegano":
      if (meal == "almoco" || meal == "jantar") {
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Macarrão integral com legumes." });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Assado de lentilhas e cogumelos." });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Strogonoff de berinjela e palmito." });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Couve-flor assada com molho de tahine." });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Kibe de berinjela com quinua." });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Batata assada com creme de couve-flor." });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Ravioli com queijo de amêndoas." });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Guisado de lentilha com legumes." });
      }
      break;
    case "no-restriction":
      if(meal == "cafe") {
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Cestinhas de brioche com ovo" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Tapioca com linhaça dourada" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Pão de queijo de frigideira" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Ovos mexidos com cogumelos" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Smoothie de morango e jabuticaba" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Panqueca de banana com pasta de amendoim" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Pão de queijo de caneca" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Pão de micro-ondas" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Crepioca" });
      } else if(meal == "almoco") {
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": " Panqueca" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Robalo grelhado" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": " Talharim de abobrinha" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Salmão grelhado com molho de limão" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Bisteca de porco grelhada" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Quinoa com legumes, homus e pão pita" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Frango com legumes" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Salada árabe" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Frango grelhado ao molho de laranja e purê de batatas" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Farofa de soja" });
      } else if(meal == "janta") {
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Atum com crosta de quinoa" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Omelete à florentina" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Macarrão caprese com frango" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Salada verde com salmão selado" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Legumes salteados" });
        foods.push({ "price-max": 28.0, "price-min": 20.0, "name": "Massa chinesa com legumes e filetes de cavala" });
      }
      break;
    default:
      break;
  }

  return foods;
}

function calculateIMC(height, weight) {
  var imc = 0;
  imc = weight / (height * height);
  return imc;
}

function suffleArray(foods, timesAWeek) {
  foods.sort(function (a, b) {
    return Math.floor(Math.random() * 10);
  });

  let foodsSelected = [];
  let count = 0;
  for(const food of foods) {
    console.log(food);
    if(count < timesAWeek) {
      foodsSelected.push(food);
    } else {
      break;
    }
    count ++;
  }

  return foodsSelected;
}

function extractFoods(restrictions, meals, timesAWeek) {
  var foods = [];

  if (meals != undefined || meals != "") {
    if (meals.length > 0) {
      if (restrictions != undefined || restrictions != "") {
        if (restrictions.length > 0) {
          for (const restriction of restrictions) {
            for (const meal of meals) {
              if(timesAWeek != undefined || timesAWeek != "") {
                foods.push(getFoods(restriction, meal, timesAWeek));
              }
            }
          }
        } else {
          for (const meal of meals) {
            if(timesAWeek != undefined || timesAWeek != "") {
              foods.push(getFoods("no-restriction", meal, timesAWeek));
            }
          }
        }
      }
    }
  }

  let foodsSelected = [];
  for(const listfood of foods) {
    if(listfood.length > 0) {
      for(let food of listfood) {
        foodsSelected.push(food);
      }
    }
  }

  return foodsSelected = suffleArray(foodsSelected, timesAWeek);
}

app.post("/get-foods", function (request, response) {
  response.send("" + JSON.stringify(extractFoods(request.body.restrictions, request.body.meals, request.body.timesAWeek)));
});


app.get("/calculateIMC", function (request, response) {
  const height = parseFloat(request.query.height);
  const weight = parseFloat(request.query.weight);

  response.end("" + calculateIMC(height, weight));
});



app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();
