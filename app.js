fetch('https://corona.lmao.ninja/v2/countries/USA')
    .then((Response)=> {
        return Response.json()
    })
    .then((data) => {
        // console.log(data);
        document.getElementById("flag").src = data.countryInfo.flag;
        document.getElementById("country").innerHTML = data.country;
        document.getElementById("cases").innerHTML = data.cases;
        document.getElementById("critical").innerHTML = data.critical;
        document.getElementById("deaths").innerHTML = data.deaths;
        document.getElementById("Recovered").innerHTML = data.recovered;
        document.getElementById("tests").innerHTML = data.tests;
        document.getElementById("active").innerHTML = data.active;
})