// This waits for the message to arrive and then prints entire message at once
const completion = await groq.chat.completions.create({message});
console.log(completion.choices[0].message.content); 

