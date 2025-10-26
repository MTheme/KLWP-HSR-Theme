# KLWP-HSR-Theme

崩坏：星穹铁道图片素材数据库 | Honkai: Star Rail Asset Database

## 简介 | Introduction

这是一个用于存储和管理崩坏：星穹铁道各种图片素材的数据库。通过 JSON 文件可以轻松获取和管理角色、命途、属性、光锥、遗器等图片资源的位置。

This is a database for storing and managing various image assets from Honkai: Star Rail. You can easily access and manage image resources for characters, paths, elements, light cones, relics, and more through JSON files.

## 目录结构 | Directory Structure

```
KLWP-HSR-Theme/
├── index.json              # 主索引文件 | Main index file
├── database/               # JSON 数据库文件 | JSON database files
│   ├── characters.json     # 角色数据 | Character data
│   ├── paths.json          # 命途数据 | Path data
│   ├── elements.json       # 属性数据 | Element data
│   ├── lightcones.json     # 光锥数据 | Light cone data
│   └── relics.json         # 遗器数据 | Relic data
└── assets/                 # 图片素材文件夹 | Image assets folder
    ├── characters/         # 角色图片 | Character images
    ├── paths/              # 命途图片 | Path images
    ├── elements/           # 属性图片 | Element images
    ├── lightcones/         # 光锥图片 | Light cone images
    ├── relics/             # 遗器图片 | Relic images
    └── ui/                 # UI 素材 | UI assets
```

## 使用方法 | Usage

### 1. 查看可用分类 | View Available Categories

首先加载 `index.json` 文件查看所有可用的分类：

First, load the `index.json` file to see all available categories:

```json
{
  "categories": {
    "characters": { "database": "database/characters.json" },
    "paths": { "database": "database/paths.json" },
    "elements": { "database": "database/elements.json" },
    "lightcones": { "database": "database/lightcones.json" },
    "relics": { "database": "database/relics.json" }
  }
}
```

### 2. 访问具体分类 | Access Specific Categories

#### 角色数据示例 | Character Data Example

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

#### 命途数据示例 | Path Data Example

```json
{
  "id": "destruction",
  "name": "毁灭",
  "nameEn": "Destruction",
  "images": {
    "icon": "assets/paths/destruction_icon.png",
    "splash": "assets/paths/destruction_splash.png",
    "symbol": "assets/paths/destruction_symbol.png"
  }
}
```

### 3. 添加图片素材 | Add Image Assets

将您的图片文件放置在对应的 `assets` 文件夹中，路径与 JSON 文件中记录的路径一致。

Place your image files in the corresponding `assets` folders, matching the paths recorded in the JSON files.

例如 | Example:
- `assets/characters/march7th_icon.png`
- `assets/paths/destruction_icon.png`
- `assets/elements/ice_icon.png`

## 数据库分类 | Database Categories

### 角色 | Characters
- **文件**: `database/characters.json`
- **包含**: 15+ 个可玩角色信息
- **图片类型**: 图标、肖像、启动画面、预览图

### 命途 | Paths
- **文件**: `database/paths.json`
- **包含**: 7 种命途（毁灭、巡猎、智识、同谐、虚无、存护、丰饶）
- **图片类型**: 图标、启动画面、符号

### 属性 | Elements
- **文件**: `database/elements.json`
- **包含**: 7 种属性（物理、火、冰、雷、风、量子、虚数）
- **图片类型**: 图标、符号
- **额外信息**: 包含每种属性的代表色

### 光锥 | Light Cones
- **文件**: `database/lightcones.json`
- **包含**: 多种光锥武器信息
- **图片类型**: 图标、肖像

### 遗器 | Relics
- **文件**: `database/relics.json`
- **包含**: 遗器套装信息
- **图片类型**: 各部位图标

## 数据格式说明 | Data Format

所有 JSON 文件都包含以下基础字段：

All JSON files contain the following base fields:

- `version`: 数据库版本 | Database version
- `lastUpdated`: 最后更新日期 | Last update date
- 具体数据数组 | Specific data array

## 扩展数据库 | Extending the Database

您可以通过以下方式扩展数据库：

You can extend the database by:

1. 在对应的 JSON 文件中添加新条目 | Add new entries to the corresponding JSON file
2. 在 `assets` 文件夹中添加对应的图片 | Add corresponding images to the `assets` folder
3. 更新 `index.json` 中的统计信息 | Update statistics in `index.json`

## 贡献 | Contributing

欢迎贡献更多的角色、光锥和遗器数据！

Contributions of more character, light cone, and relic data are welcome!

## 许可 | License

请尊重原作品版权。本数据库仅供学习和个人使用。

Please respect the copyright of the original work. This database is for learning and personal use only.

## 致谢 | Acknowledgments

感谢 miHoYo/HoYoverse 创作了《崩坏：星穹铁道》。

Thanks to miHoYo/HoYoverse for creating Honkai: Star Rail.