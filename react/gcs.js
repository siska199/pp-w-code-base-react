/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Function to convert file name to camelCase
const formatnameSVG = (filename) => {
  return 'Icon' + filename.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/^\w/, (c) => c.toUpperCase()).replace('.svg', '');
};

const formatnameComponent = (str) => {
  const result = str?.split('.')[0]
    .replace(/([-_][a-z])/gi, (s) => {
      return s.toUpperCase().replace('-', '').replace('_', '');
    })
    .replace(/\.js|\.jsx|\.ts|\.tsx/gi, '');
  return result
};

// Function to read files recursively
const readFilesRecursively = (directory, fileComponents) => {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // If the file is a directory, recursively read its contents
      readFilesRecursively(filePath, fileComponents);
    } else if (['.js', '.jsx', '.ts', '.tsx', '.svg'].includes(path.extname(file))) {
      // Ensure it's a JavaScript or TypeScript file
      const componentName = ['.svg']?.includes(path.extname(file)) ? formatnameSVG(file) : formatnameComponent(file);
      const componentContent = fs.readFileSync(filePath, 'utf8');

      // Add the file path to the object using the component name as key
      if (componentName) {
        fileComponents[componentName?.split('.')[0]] = componentContent;
      }
    }
  });
};

// Get command line arguments
const args = process.argv.slice(2);
const componentsDir = args[0] || path.join(dirname, 'src/components/ui');
const outputDir = args[1] || path.join(dirname, 'src/lib/utils/code-string');
const outputFile = args[2] || 'component-ui.ts';

// Initialize the object to store the file components
const fileComponents = {};

// Read all files in the components directory
readFilesRecursively(componentsDir, fileComponents);

function toPascalCase(str) {
  return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
      .replace(/^(.)/, (match, chr) => chr.toUpperCase());
}

const formatObjectName = (str) => {
  const result = str?.split('.')[0]
  return toPascalCase(result)
};

const objectName = `codeString${formatObjectName(outputFile)}`
// Convert the object to a string representation of a JS object
const fileComponentsStr = `const ${objectName} = ${JSON.stringify(fileComponents, null, 2)};\n\nexport default ${objectName};`;

// Ensure the output directory exists
fs.mkdirSync(outputDir, { recursive: true });

// Write the object to a file in the specified directory
fs.writeFileSync(path.join(outputDir, outputFile), fileComponentsStr);

console.log('File components object has been created successfully!');

// How to run this script with arguments:
// node g-cs-cui.js <componentsDir> <outputDir> <outputFile>

// Example:
// node g-cs-cui.js ./src/components/ui ./src/lib/utils/code-string component-ui.ts
