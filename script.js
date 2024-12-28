// Generate a random weather joke
function generateWeatherJoke() {
  const weatherJokes = [
    "It’s so hot, even the roadside chaiwala is selling iced tea now!",
    "The monsoon is like my salary—it comes late and disappears quickly.",
    "Why don’t weathermen in India ever promise rain? Because even they don’t trust the monsoons!",
    "It’s so cold, I’m considering wearing two sweaters... and my blanket too.",
    "The Indian summer is like a pressure cooker—always building up steam!",
    "It rained so much last night, even my slippers tried to float away.",
    "The weather is so unpredictable, even my WiFi is more stable!",
    "When it’s foggy here, I can’t tell if it’s weather or pollution.",
    "It’s so windy today, even my umbrella has filed for a transfer.",
    "Indian summer is the only time when the fridge becomes a best friend.",
    "I was sweating so much, even my sweat started sweating!",
    "The rain in India doesn’t just fall—it floods like it's in a Bollywood climax.",
    "The weather is so confusing, it’s like deciding what to eat at a buffet.",
    "Why don’t we ever complain about hot chai? Because it’s the only heat we actually enjoy.",
    "The wind was so strong, I think my neighbor’s clothes ended up in my wardrobe.",
    "It’s so hot, I’m thinking of frying eggs on the pavement for lunch.",
    "Why is the rain in India always late? It’s following Indian Standard Time.",
    "The weather forecast said ‘clear skies,’ but the rain arrived like an uninvited guest at a wedding.",
    "In Indian winters, the only thing colder than the weather is the shower water!"
  ];

  const randomIndex = Math.floor(Math.random() * weatherJokes.length);
  return weatherJokes[randomIndex];
}
function updateJoke() {
  const jokeElement = document.getElementById('joke');
  const joke = generateWeatherJoke();
  jokeElement.textContent = joke; 
}


setInterval(updateJoke, 10000);
updateJoke();

function toweather() {
  const city = document.getElementById("city").value.trim();
  if (!city) {
    alert("Please enter the city");
    return;
  }
  window.location.href = `weather.html?city=${city}`;
  
}
