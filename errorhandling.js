try {
  const completion = await groq.chat.completions.create({...});
} catch (error) {
  console.error("Error:", error);
}
//Catches and handles the errors