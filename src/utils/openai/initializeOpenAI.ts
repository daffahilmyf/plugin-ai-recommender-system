import { OpenAI } from 'openai';
export const initializeOpenAI = (key: string): OpenAI => {

    if (!key) {
        throw new Error('OpenAI API key is required');
    }

    const client = new OpenAI({
        apiKey: key
    });

    return client;
}