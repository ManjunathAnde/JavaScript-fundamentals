import 'dotenv/config'; //It loads the .env file.
import OpenAI from "openai"; // Importing OpenAI

// Initialize the OpenAI instance by securely passing the configuration object
const openai = new OpenAI()

// When left empty, it automatically searches the environment for credentials


// To check if it initialized, log the instance correctly
console.log("OpenAI Instance successfully created!");
