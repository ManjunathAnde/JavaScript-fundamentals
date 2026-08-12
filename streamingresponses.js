// This waits for the message to arrive and then prints entire message at once
const completion = await groq.chat.completions.create({message});
console.log(completion.choices[0].message.content);  //Non streaming responses

// Streaming: get the response in small pieces (chunks) as it's generated
const stream = await groq.chat.completions.create({ message, stream: true });
for await (const chunk of stream) {  // printing the content using for await loop
  process.stdout.write(chunk.choices[0].delta.content || "");
}

