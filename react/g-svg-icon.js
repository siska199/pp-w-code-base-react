/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Function to convert a filename to a camel case key and prepend 'Icon'
const toCamelCase = (filename) => {
    return 'Icon' + filename.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/^\w/, (c) => c.toUpperCase()).replace('.svg', '');
};

// Directory path to the SVG files
const iconsDir = path.join(dirname, 'src/assets/icons');

// Initialize the object to store the SVG code
const svgCode = {};

// Read all SVG files in the directory
fs.readdir(iconsDir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory:', err);
    }

    files.forEach((file) => {
        // Ensure it's an SVG file
        if (path.extname(file) === '.svg') {
            const filePath = path.join(iconsDir, file);
            const svgKey = toCamelCase(file);

            // Read the SVG file content
            const svgContent = fs.readFileSync(filePath, 'utf8');

            // Add the SVG content to the object
            svgCode[svgKey] = `${svgContent}`;
        }
    });

    // Convert the object to a string representation of a JS object
    const svgCodeStr = `const svgCode = ${JSON.stringify(svgCode, null, 2)};\n\nexport default svgCode;`;

    // Directory path to save the output file
    const outputDir = path.join(dirname, 'src/assets/icons');

    // Ensure the directory exists
    fs.mkdirSync(outputDir, { recursive: true });

    // Write the object to a file in the specified directory
    fs.writeFile(path.join(outputDir, 'svg-code.ts'), svgCodeStr, (err) => {
        if (err) {
            return console.error('Error writing file:', err);
        }
        console.log('SVG code file has been created successfully!');
    });
});
