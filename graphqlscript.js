fetch("https://swapi-graphql.netlify.app/.netlify/functions/index?query={allPeople{people{name}}}")
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    console.log(jsonData)
})