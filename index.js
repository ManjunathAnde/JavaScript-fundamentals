import 'dotenv/config'; // Loads the .env file
import Groq from "groq-sdk"; // Importing Groq

// Initialize Groq. Automatically searches environment for credentials
const groq = new Groq();

console.log("Groq Instance successfully created!");

async function hello() { // Async - tells that the function is capable of pausing at specific points.
    try {
        const completion = await groq.chat.completions.create({ // Await refers the specific points at which async function pauses.
            // Groq requires an open-source model name specified here
            model: "llama-3.3-70b-versatile", 
            messages: [
                { role: "system", content: "You are a good robotic assistant" },
                { role: "user", content: "Who is JSON" }, 
                ]
        });

        // Log the response data to the console
        console.log("AI Response:", completion.choices[0].message.content);
    } catch (error) {
        console.error("Error running script:", error);
    }
}

hello();

