// Honkai: Star Rail Asset Database - JavaScript Example
// 崩坏：星穹铁道素材数据库 - JavaScript 示例

/**
 * Example usage in Node.js
 * Node.js 使用示例
 */

const fs = require('fs');

// Load JSON file
function loadJSON(filepath) {
    try {
        if (!fs.existsSync(filepath)) {
            throw new Error(`File not found: ${filepath}`);
        }
        const data = fs.readFileSync(filepath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error loading ${filepath}:`, error.message);
        throw error;
    }
}

// Main function
function main() {
    try {
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

        // Character wallpapers demo
        console.log('\n' + '='.repeat(60));
        console.log('Wallpapers | 壁纸示例');
        console.log('='.repeat(60));
        const march = characters.characters.find(c => c.id === '1001');
        if (march && march.images && Array.isArray(march.images.wallpapers)) {
            console.log(`March 7th wallpapers: ${march.images.wallpapers.length}`);
            const firstWp = march.images.wallpapers[0];
            if (firstWp) {
                console.log(`  First: [${firstWp.type} ${firstWp.resolution}] ${firstWp.path}`);
            }
        }

        // Profile background packs (Pom-Pom & Wuluomingtu etc.)
        const profileBg = loadJSON('database/profile_backgrounds.json');
        const pomProfile = profileBg.profileBackgroundSets.find(s => s.id === 'pom_pom_profile');
        if (pomProfile) {
            console.log(`\nProfile Background: ${pomProfile.nameEn} | ${pomProfile.nameCn}`);
            console.log(`  Scope: ${pomProfile.scope}`);
            console.log(`  Background: ${pomProfile.background.path}`);
            console.log(`  Sidebar(${pomProfile.sidebar.position}, ${pomProfile.sidebar.width}px): ${pomProfile.sidebar.path}`);

            // Load avatars independently (global-flat) and list them
            const avatarsDb = loadJSON('database/avatars.json');
            const list = avatarsDb.avatars || [];
            if (list.length > 0) {
                console.log('  Avatars (global):');
                list.forEach((av, idx) => {
                    const mark = av.default ? '*' : ' ';
                    const layout = av.layout || {};
                    const shape = layout.shape || 'circle';
                    const size = layout.size || 128;
                    console.log(`   ${mark} [${idx}] ${av.nameEn} | ${av.nameCn} (${shape} ${size}px) -> ${av.path}`);
                });

                // Demonstrate switching avatar: pick next after the first default, else from index 0
                const defaultIdx = list.findIndex(a => a.default);
                const startIdx = defaultIdx >= 0 ? defaultIdx : 0;
                const nextIdx = (startIdx + 1) % list.length;
                const selected = list[nextIdx];
                console.log(`  Switch to avatar: ${selected.nameEn} (${selected.id})`);
            } else {
                console.log('  Avatars: (none)');
            }
        }
    } catch (error) {
        console.error('\nFailed to load database:', error.message);
        process.exit(1);
    }
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
        if (!indexResponse.ok) {
            throw new Error(`Failed to load index.json: ${indexResponse.statusText}`);
        }
        const index = await indexResponse.json();
        
        // Load characters
        const charsResponse = await fetch('database/characters.json');
        if (!charsResponse.ok) {
            throw new Error(`Failed to load characters.json: ${charsResponse.statusText}`);
        }
        const characters = await charsResponse.json();
        
        // Use the data
        console.log(index);
        console.log(characters);
        
        // Example: Get character image
        const march7th = characters.characters.find(c => c.id === '1001');
        if (!march7th) {
            throw new Error('Character not found');
        }
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
