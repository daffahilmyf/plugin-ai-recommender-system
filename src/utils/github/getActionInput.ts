import { getInput } from '@actions/core';

export const getActionInput = (name: string): string => {
    const input = getInput(name);
    if (!input) {
        throw new Error(`Input ${name} is required`);
    }
    return input;
};