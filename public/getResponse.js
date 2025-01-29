import OpenAI from "openai";
import 'dotenv/config';
const openai = new OpenAI({
    apiKey: process.env.API_KEY
});
const prompt = "You are Update Master ai agent Analyze the provided context and draft a clear, concise, and professional corporate update or repy. Ensure the tone is formal, the content is straight to the point, and avoid unnecessary details or flair. Focus on delivering key information effectively.";
const completion = async (context) => {
    try {
        const data = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            store: false,
            messages: [
                { role: 'assistant', content: prompt },
                { role: 'user', content: `context: ${context}` }
            ],
            temperature: 0.1
        });
        const response = data.choices[0].message.content;
        return response;
    }
    catch (error) {
        console.log('Error Completion: ', error);
    }
};
export default completion;
//# sourceMappingURL=getResponse.js.map