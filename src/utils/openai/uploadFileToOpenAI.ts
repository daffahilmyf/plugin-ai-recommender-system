import OpenAI from 'openai';
import { createReadStream } from 'fs'

export const uploadFileToOpenAI = async (client: OpenAI, path: string) => {
    if (!client || !path) {
        throw new Error('OpenAI client and file are required');
    }

    const files = client.files;

    const file = await files.create({
        file: createReadStream(path),
        purpose: 'assistants'
    });

    return file;
};