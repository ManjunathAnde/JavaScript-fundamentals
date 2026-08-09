// There are no parallel threads in JS like Python
// Concurrency happens via event loop
// when a function hits `await`, it pauses ONLY that function,
// the rest of the program keeps running, event loop does other work,
// then resumes the rest of the paused function once its wait is done.

// await only pauses:
// - the function it's inside
// - NOT the whole program
// - code OUTSIDE that function runs unaffected

