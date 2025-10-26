# Quick Reference | 快速参考

## JSON Structure | JSON 结构

### Index File (`index.json`)
主索引文件，包含所有分类的元数据。

```json
{
  "version": "1.1",
  "categories": {
    "characters": { "database": "database/characters.json" },
    "paths": { "database": "database/paths.json" },
    "elements": { "database": "database/elements.json" },
    "profileBackgrounds": { "database": "database/profile_backgrounds.json" },
    "wallpapers": { "database": "database/wallpapers.json" }
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
    "portraitBackground": "assets/ui/portrait_backgrounds/march7th_portrait_bg.jpg",
    "wallpapers": [
      { "id": "march7th_mobile_1080x2400", "type": "mobile", "resolution": "1080x2400", "path": "assets/characters/wallpapers/march7th/march7th_mobile_1080x2400.jpg" },
      { "id": "march7th_desktop_1920x1080", "type": "desktop", "resolution": "1920x1080", "path": "assets/characters/wallpapers/march7th/march7th_desktop_1920x1080.jpg" }
    ],
    "loadingBackgrounds": [
      { "id": "march7th_loading_default", "resolution": "1920x1080", "path": "assets/ui/loading/march7th_loading_default.jpg" }
    ],
    "profileBackgrounds": [
      { "id": "march7th_profile_default", "type": "profile", "resolution": "1080x2400", "path": "assets/ui/profile_backgrounds/march7th_profile_default.jpg" }
    ]
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
| Profile Backgrounds | 资料背景 | `database/profile_backgrounds.json` | 2 | Background + sidebar sets |
| Wallpapers | 壁纸 | `database/wallpapers.json` | — | General wallpaper packs |

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
- `portraitBackground` - 立绘背景图（单图）
- `wallpapers[]` - 壁纸数组（包含 `type` 与 `resolution`）
- `loadingBackgrounds[]` - 加载背景数组
- `profileBackgrounds[]` - Profile 背景数组

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

### Wallpaper Packs | 壁纸集合
- 通用壁纸集合，存储在 `database/wallpapers.json`
- 图片位于 `assets/ui/wallpapers/*`

### Profile Background Sets | 资料背景集合
- 结构文件：`database/profile_backgrounds.json`
- 每条记录包含：
  - `scope`: `global` | `path` | `character`
  - `targetId`: 当 `scope` 为 `path`/`character` 时指定目标 ID
  - `background`: { `resolution`, `path` }
  - `sidebar`: { `path`, `position`(left/right), `width`(px), `anchor` }
- 资源路径：`assets/ui/profile_backgrounds/*` 或 `assets/paths/profile_backgrounds/{pathId}/*`

## File Naming Convention | 文件命名规范

### Characters | 角色
- Format: `{character_name}_{image_type}.png`
- Example: `march7th_icon.png`
  
#### Character Wallpapers | 角色壁纸
- Format: `assets/characters/wallpapers/{character_name}/{character_name}_{type}_{resolution}.jpg`
- Example: `assets/characters/wallpapers/march7th/march7th_mobile_1080x2400.jpg`

### Paths | 命途
- Format: `{path_id}_{image_type}.png`
- Example: `destruction_icon.png`
  
#### Path Wallpapers | 命途壁纸
- Format: `assets/paths/wallpapers/{path_id}/{path_id}_{type}_{resolution}.jpg`
- Example: `assets/paths/wallpapers/nihility/nihility_desktop_2560x1440.jpg`

### Elements | 属性
- Format: `{element_id}_{image_type}.png`
- Example: `fire_icon.png`

### Light Cones | 光锥
- Format: `{lightcone_name}_{image_type}.png`
- Example: `sleep_like_the_dead_icon.png`

### Relics | 遗器
- Format: `{relic_name}_{slot}_icon.png`
- Example: `passerby_head_icon.png`

### UI Backgrounds | UI 背景
- Loading: `assets/ui/loading/{name}_loading_{variant}.jpg`
- Profile: `assets/ui/profile_backgrounds/{name}_profile_{variant}.jpg`

## Tips | 提示

1. **Use lowercase and underscores** for file names | 文件名使用小写和下划线
2. **Keep consistent naming** across all assets | 保持所有素材的命名一致性
3. **Update JSON files** when adding new assets | 添加新素材时更新 JSON 文件
4. **Validate JSON** after editing | 编辑后验证 JSON 文件
5. **Use version control** to track changes | 使用版本控制跟踪更改
