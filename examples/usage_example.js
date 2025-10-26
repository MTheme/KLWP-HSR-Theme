// Honkai: Star Rail Asset Database - JavaScript Example
// 崩坏：星穹铁道素材数据库 - JavaScript 示例

/**
 * Example usage in Node.js
 * Node.js 使用示例
 */

const fs = require('fs');

// Load JSON file
function loadJSON(filepath) {
    const data = fs.readFileSync(filepath, 'utf-8');
    return JSON.parse(data);
}

// Main function
function main() {
    console.log('Loading Honkai: Star Rail Asset Database...');
    console.log('加载崩坏：星穹铁道素材数据库...\n');

    // Load main index
    const index = loadJSON('index.json');
    console.log(`Database: ${index.name}`);
    console.log(`数据库: ${index.nameCn}`);
    console.log(`Version: ${index.version}\n`);

    // Load characters
    const characters = loadJSON('database/characters.json');
    console.log('='.repeat(60));
    console.log('Characters | 角色');
    console.log('='.repeat(60));
    
    // Find 5-star characters
    const fiveStarChars = characters.characters.filter(c => c.rarity === 5);
    console.log(`Total 5★ Characters: ${fiveStarChars.length}\n`);
    
    fiveStarChars.slice(0, 3).forEach(char => {
        console.log(`${char.name} (ID: ${char.id})`);
        console.log(`  Rarity: ${char.rarity}★`);
        console.log(`  Path: ${char.path}`);
        console.log(`  Element: ${char.element}`);
        console.log(`  Icon: ${char.images.icon}\n`);
    });

    // Load paths
    const paths = loadJSON('database/paths.json');
    console.log('='.repeat(60));
    console.log('Paths | 命途');
    console.log('='.repeat(60));
    
    paths.paths.forEach(path => {
        console.log(`${path.name} (${path.nameEn})`);
        console.log(`  ID: ${path.id}`);
        console.log(`  Icon: ${path.images.icon}\n`);
    });

    // Count characters by element
    console.log('='.repeat(60));
    console.log('Characters by Element | 按属性统计角色');
    console.log('='.repeat(60));
    
    const elements = loadJSON('database/elements.json');
    elements.elements.forEach(element => {
        const count = characters.characters.filter(
            c => c.element === element.id
        ).length;
        console.log(`${element.name} (${element.nameEn}): ${count} characters`);
    });
}

// Run if executed directly
if (require.main === module) {
    main();
}

/**
 * Example usage in browser
 * 浏览器使用示例
 */

// For browser usage, you can use fetch API:
/*
async function loadDatabase() {
    try {
        // Load index
        const indexResponse = await fetch('index.json');
        const index = await indexResponse.json();
        
        // Load characters
        const charsResponse = await fetch('database/characters.json');
        const characters = await charsResponse.json();
        
        // Use the data
        console.log(index);
        console.log(characters);
        
        // Example: Get character image
        const march7th = characters.characters.find(c => c.id === '1001');
        console.log(`March 7th icon: ${march7th.images.icon}`);
        
        // Create an img element
        const img = document.createElement('img');
        img.src = march7th.images.icon;
        img.alt = march7th.name;
        document.body.appendChild(img);
        
    } catch (error) {
        console.error('Error loading database:', error);
    }
}

// Call when DOM is ready
document.addEventListener('DOMContentLoaded', loadDatabase);
*/

module.exports = { loadJSON };
