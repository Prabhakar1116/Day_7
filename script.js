// Day_7 Tasks
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();

request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);

  // Task_1:- Countries that are in Asia
  console.log("--------Countries that are in Asia--------")
  var res = result.filter((ele) => ele.region === "Asia");
  var final = res.map((ele) => console.log(ele.name.common));
  // -----------------------------------------------------------------------------------------------------------------------
  // Task_2:- -Population less than 200k
  console.log("--------Population less than 200k:--------");
  var res_1 = result.filter((ele_1) => ele_1.population < 200000);
  var final_1 = res_1.map((ele_1) => console.log(ele_1.name.common));
  // ----------------------------------------------------------------------------------------------------------------------
  // Task_3 Countries Name, Capital, Flag
  console.log("--------Name, Capital, Flag:-------------");
  var res_2 = result.filter((ele_2) => ele_2.subregion);
  var final_1 = res_1.forEach((ele_2) => {
    console.log(
      `Name: ${ele_2.name.common}, Capital: ${ele_2.capital}, Flag: ${ele_2.flags.svg}`
    );
  });
  // ------------------------------------------------------------------------------------------------------------------------

  // Task_4 Total population of countries
  console.log("----------total population of countries----------");
  var res_3 = result.reduce((acc, country) => acc + country.population, 0);
  console.log("Total Population is :", res_3);

  // --------------------------------------------------------------------------------------------------------------------

  //  Task_5 Countries that uses USD
  console.log("---------Countries that uses USD---------");
  var money = result.filter((country) => {
    const currencies = country.currencies;
    return currencies && currencies.USD;
  });

  var final = money.map((country) =>
    console.log(country.name.common)
  );
};

