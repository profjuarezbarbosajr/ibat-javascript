import OpenAI from "openai";

// const openai = new OpenAI();
const openai = new OpenAI("demo");

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Who is Ayrton Senna?" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);  
}

main();
