// There are no parallel threads in JS like Python
// Concurrency happens via event loop
// when a function hits `await`, it pauses ONLY that function,
// the rest of the program keeps running, event loop does other work,
// then resumes the rest of the paused function once its wait is done.

// await only pauses:
// - the function it's inside
// - NOT the whole program
// - code OUTSIDE that function runs unaffected

async function getWeather(latitude, longitude) {  // The execution pauses at 'await' and code after it, in async block, resumes after 'await' call is done executing.
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const data = await response.json(); //This block is pauses until API response is fetched
  return data.current_weather;
}

async function main() {
  console.log("Fetching weather of Hyderabad");
  const weather = await getWeather(17.385, 78.4867);
  console.log(weather);
}

main();





