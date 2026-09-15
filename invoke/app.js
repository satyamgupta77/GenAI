import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function main(){
    const completion = await groq.chat.completions.create({
        temperature: 0.7,
        // top_p: 0.2,
        // stop: ["\n"],
    // max_completions_tokens: 1000,
    respone_format: {
        'type': "json_object",
       
    }

        // model: "llama-3.1-8b-instant",
        model: "openai/gpt-oss-20b",
        messages: [
            {
                role: 'system',
                content: 'You are a helpful assistant that translates English to French.'
            },
            {
                role: 'user',
                content: 'What is the capital of India?'
            }
        ]
    });
    console.log(completion.choices[0].message.content);
}

main()