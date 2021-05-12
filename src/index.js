const searchAlgoliaPlaces = (event) => {
  // when we make a fetch with the POST verb, we need to add options
  // fetch(url, options)
  const url = "https://places-dsn.algolia.net/1/places/query";
  
  const userInput = event.currentTarget.value;
  const dataToSend = { query: userInput };
  const dataAsString = JSON.stringify(dataToSend);

  const options = {
    method: "POST",
    body: dataAsString // we need to pass a string: Deserialization
  };

  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const cityName = data.hits[0].locale_names.default[0]
      const results = document.getElementById('results');
      results.innerText = cityName;
    });
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);
