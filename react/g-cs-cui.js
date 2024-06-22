/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Directory path to the components
const componentsDir = path.join(dirname, 'src/components/ui');

// Initialize the object to store the file components
const fileComponents = {};

// Function to read the default export name from a file
const getDefaultExportName = (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const defaultExportMatch = fileContent.match(/export\s+default\s+(\w+)/);
    return defaultExportMatch ? defaultExportMatch[1] : null;
};

// Function to read files recursively
const readFilesRecursively = (directory) => {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            // If the file is a directory, recursively read its contents
            readFilesRecursively(filePath);
        } else if (['.js', '.jsx', '.ts', '.tsx'].includes(path.extname(file))) {
            // Ensure it's a JavaScript or TypeScript file
            const componentName = getDefaultExportName(filePath);
            const componentContent = fs.readFileSync(filePath, 'utf8');

            // Add the file path to the object using the component name as key
            if (componentName) {
                fileComponents[componentName] = componentContent;
            }
        }
    });
};

// Read all files in the components directory
readFilesRecursively(componentsDir);

// Convert the object to a string representation of a JS object
const fileComponentsStr = `const fileComponents = ${JSON.stringify(fileComponents, null, 2)};\n\nexport default fileComponents;`;

// Directory path to save the output file
const outputDir = path.join(dirname, 'src/lib/utils/code-string');

// Ensure the directory exists
fs.mkdirSync(outputDir, { recursive: true });

// Write the object to a file in the specified directory
fs.writeFileSync(path.join(outputDir, 'component-ui.ts'), fileComponentsStr);

console.log('File components object has been created successfully!');

// How to run this script:
// node g-cs-cui.js
