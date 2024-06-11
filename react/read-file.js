import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Function to read file content and convert it to a string suitable for displayCodeBase
const getFileContentAsString = (filePath) => {
    const filename = fileURLToPath(import.meta.url);
    const dirname = path.dirname(filename);
    const pathFile = path.join(dirname, 'src', filePath);

    return new Promise((resolve, reject) => {
        fs.readFile(pathFile, 'utf8', (err, data) => {
            if (err) {
                reject(`Error reading file: ${err}`);
            } else {
                const escapedContent = data.replace(/`/g, '\\`');
                const displayCodeBase = `const displayCodeBase = \`\n${escapedContent}\n\`;`;
                resolve(displayCodeBase);
            }
        });
    });
};

// Usage example
const filePath = 'components/ui/Accordion.tsx'; // Example file path

getFileContentAsString(filePath)
    .then((displayCodeBase) => {
        console.log(displayCodeBase);
    })
    .catch((error) => {
        console.error(error);
    });
