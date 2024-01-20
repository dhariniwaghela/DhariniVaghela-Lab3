fetch("https://swapi.dev/api/people")
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    console.log(jsonData)
})