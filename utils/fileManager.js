

import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const passwordsFilePath = path.resolve(__dirname, '../data/credentials.json');

export function saveData(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export function loadData(filePath) {
    if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath));
    }
    return [];
}

export function loadPasswords() {
    return loadData(passwordsFilePath);
}

export function savePasswords(data) {
    saveData(passwordsFilePath, data);
}
