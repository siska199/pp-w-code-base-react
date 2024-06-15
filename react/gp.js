/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert filename and dirname to work with ES modules
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Function to create the page file
const createPageFile = (filePath) => {
    let fullPath = path.resolve(dirname, 'src', filePath);
    const pageName = path.basename(fullPath).replace(/^\w/, (c) => c.toUpperCase());

    const content = `

const ${pageName}Page = () => {
  return (
    <div>${pageName}Page</div>
  );
};

export default ${pageName}Page;
`;

    // Ensure the directory exists
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });

    // Write the file
    fs.writeFileSync(fullPath + 'Page.tsx', content.trim(), 'utf8');
    console.log(`Created ${pageName}Page at ${fullPath}Page.tsx`);
};

// Function to update the router file
const updateRouterFile = (parentRoute, filePath) => {
    const routerPath = path.resolve(dirname, 'src/lib/router/index.tsx');
    const relativePath = filePath.replace('src/', '');
    const pageName = path.basename(filePath).replace(/^\w/, (c) => c.toUpperCase());
    const importPath = relativePath.replace(/\//g, '/').replace('pages/', '@pages/');

    // Read the router file
    let routerFileContent = fs.readFileSync(routerPath, 'utf8');

    // Create import statement
    const importStatement = `import ${pageName}Page from '${importPath}Page';\n`;

    // Check if the import already exists
    if (!routerFileContent.includes(importStatement)) {
        routerFileContent = routerFileContent.replace(
            'import { createBrowserRouter } from "react-router-dom";',
            `${importStatement}import { createBrowserRouter } from "react-router-dom";`
        );
    }

    // Generate the new route
    const newRoute = `
                {
                    path: '${pageName.toLowerCase()}',
                    element: <${pageName}Page />,
                    handle: {
                        id: '1-${pageName.toUpperCase()}'
                    }
                },
  `;

    // Check if the parent route exists and add the new route as a child
    const parentRouteRegex = new RegExp(`(path: '${parentRoute}',[\\s\\S]*?children: \\[)([\\s\\S]*?)(\\])`, 'm');
    if (parentRouteRegex.test(routerFileContent)) {
        routerFileContent = routerFileContent.replace(
            parentRouteRegex,
            (match, p1, p2, p3) => `${p1}${p2}${newRoute}${p3}`
        );
    } else {
        console.error(`Parent path '${parentRoute}' not found in router configuration.`);
        return;
    }

    // Write the updated router file
    fs.writeFileSync(routerPath, routerFileContent, 'utf8');
    console.log(`Updated router file at ${routerPath}`);
};

// Command-line arguments
const [filePath, parentRoute] = process.argv.slice(2);

if (!filePath || !parentRoute) {
    console.error('Please provide both a file path and a parent route for the new page.');
    process.exit(1);
}

createPageFile(filePath);
updateRouterFile(parentRoute, filePath);


//How to use it:
//node gp.js 'pages/docs/prerequisite/TailwindConfig' 'prerequisite'