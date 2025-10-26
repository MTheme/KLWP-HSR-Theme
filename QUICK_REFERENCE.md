# Quick Reference | 快速参考

## JSON Structure | JSON 结构

### Index File (`index.json`)
主索引文件，包含所有分类的元数据。

```json
{
  "version": "1.0",
  "categories": {
    "characters": { "database": "database/characters.json" },
    "paths": { "database": "database/paths.json" },
    ...
  }
}
```

### Character Data (`database/characters.json`)
角色数据，包含 ID、名称、稀有度、命途、属性和图片路径。

```json
{
  "id": "1001",
  "name": "March 7th",
  "rarity": 4,
  "path": "preservation",
  "element": "ice",
  "images": {
    "icon": "assets/characters/march7th_icon.png",
    "portrait": "assets/characters/march7th_portrait.png",
    "splash": "assets/characters/march7th_splash.png",
    "preview": "assets/characters/march7th_preview.png"
  }
}
```

### Path Data (`database/paths.json`)
命途数据，包含 ID、中英文名称、描述和图片路径。

```json
{
  "id": "destruction",
  "name": "毁灭",
  "nameEn": "Destruction",
  "description": "追寻「毁灭」的行者。",
  "images": {
    "icon": "assets/paths/destruction_icon.png",
    "splash": "assets/paths/destruction_splash.png",
    "symbol": "assets/paths/destruction_symbol.png"
  }
}
```

### Element Data (`database/elements.json`)
属性数据，包含 ID、中英文名称、颜色代码和图片路径。

```json
{
  "id": "fire",
  "name": "火",
  "nameEn": "Fire",
  "color": "#E84057",
  "images": {
    "icon": "assets/elements/fire_icon.png",
    "symbol": "assets/elements/fire_symbol.png"
  }
}
```

## Common Queries | 常用查询

### Find Character by ID | 根据 ID 查找角色

```python
# Python
import json

with open('database/characters.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
    
character = next((c for c in data['characters'] if c['id'] == '1001'), None)
print(character['name'])  # March 7th
```

```javascript
// JavaScript
const data = require('./database/characters.json');
const character = data.characters.find(c => c.id === '1001');
console.log(character.name);  // March 7th
```

### Filter by Rarity | 按稀有度筛选

```python
# Python - Get all 5-star characters
five_star = [c for c in data['characters'] if c['rarity'] == 5]
```

```javascript
// JavaScript
const fiveStar = data.characters.filter(c => c.rarity === 5);
```

### Filter by Path | 按命途筛选

```python
# Python - Get all Destruction characters
destruction_chars = [c for c in data['characters'] if c['path'] == 'destruction']
```

```javascript
// JavaScript
const destructionChars = data.characters.filter(c => c.path === 'destruction');
```

### Filter by Element | 按属性筛选

```python
# Python - Get all Ice characters
ice_chars = [c for c in data['characters'] if c['element'] == 'ice']
```

```javascript
// JavaScript
const iceChars = data.characters.filter(c => c.element === 'ice');
```

## Data Categories | 数据分类

| Category | 分类 | File | Count | Description |
|----------|------|------|-------|-------------|
| Characters | 角色 | `database/characters.json` | 15 | Playable characters |
| Paths | 命途 | `database/paths.json` | 7 | Character paths |
| Elements | 属性 | `database/elements.json` | 7 | Element types |
| Light Cones | 光锥 | `database/lightcones.json` | 9 | Equipable weapons |
| Relics | 遗器 | `database/relics.json` | 4 | Equipable relic sets |

## Element IDs | 属性 ID

- `physical` - 物理 (Physical)
- `fire` - 火 (Fire)
- `ice` - 冰 (Ice)
- `lightning` - 雷 (Lightning)
- `wind` - 风 (Wind)
- `quantum` - 量子 (Quantum)
- `imaginary` - 虚数 (Imaginary)

## Path IDs | 命途 ID

- `destruction` - 毁灭 (Destruction)
- `hunt` - 巡猎 (The Hunt)
- `erudition` - 智识 (Erudition)
- `harmony` - 同谐 (Harmony)
- `nihility` - 虚无 (Nihility)
- `preservation` - 存护 (Preservation)
- `abundance` - 丰饶 (Abundance)

## Image Types | 图片类型

### Character Images | 角色图片
- `icon` - 小图标
- `portrait` - 肖像
- `splash` - 启动画面
- `preview` - 预览图

### Path Images | 命途图片
- `icon` - 图标
- `splash` - 启动画面
- `symbol` - 符号

### Element Images | 属性图片
- `icon` - 图标
- `symbol` - 符号

### Light Cone Images | 光锥图片
- `icon` - 图标
- `portrait` - 肖像

### Relic Images | 遗器图片
- `icon` - 图标（每个部位）

## File Naming Convention | 文件命名规范

### Characters | 角色
- Format: `{character_name}_{image_type}.png`
- Example: `march7th_icon.png`

### Paths | 命途
- Format: `{path_id}_{image_type}.png`
- Example: `destruction_icon.png`

### Elements | 属性
- Format: `{element_id}_{image_type}.png`
- Example: `fire_icon.png`

### Light Cones | 光锥
- Format: `{lightcone_name}_{image_type}.png`
- Example: `sleep_like_the_dead_icon.png`

### Relics | 遗器
- Format: `{relic_name}_{slot}_icon.png`
- Example: `passerby_head_icon.png`

## Tips | 提示

1. **Use lowercase and underscores** for file names | 文件名使用小写和下划线
2. **Keep consistent naming** across all assets | 保持所有素材的命名一致性
3. **Update JSON files** when adding new assets | 添加新素材时更新 JSON 文件
4. **Validate JSON** after editing | 编辑后验证 JSON 文件
5. **Use version control** to track changes | 使用版本控制跟踪更改
