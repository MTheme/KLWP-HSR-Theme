#!/usr/bin/env python3
"""
Honkai: Star Rail Asset Database - Example Usage
崩坏：星穹铁道素材数据库 - 使用示例

This script demonstrates how to load and use the image asset database.
此脚本演示如何加载和使用图片素材数据库。
"""

import json
import os

def load_json(filepath):
    """Load a JSON file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def main():
    # Load the main index
    print("Loading Honkai: Star Rail Asset Database...")
    print("加载崩坏：星穹铁道素材数据库...")
    print()
    
    index = load_json('index.json')
    print(f"Database Name: {index['name']}")
    print(f"数据库名称: {index['nameCn']}")
    print(f"Version: {index['version']}")
    print(f"Last Updated: {index['lastUpdated']}")
    print()
    
    # List all categories
    print("Available Categories | 可用分类:")
    print("-" * 60)
    for cat_id, cat_info in index['categories'].items():
        print(f"  {cat_info['nameCn']} | {cat_info['name']}")
        print(f"    Database: {cat_info['database']}")
        print(f"    Count: {cat_info['count']} items")
        print()
    
    # Example: Load and display character data
    print("\n" + "=" * 60)
    print("Example: Character Data | 示例：角色数据")
    print("=" * 60)
    
    characters = load_json('database/characters.json')
    print(f"Total Characters: {len(characters['characters'])}")
    print()
    
    # Display first 3 characters
    for char in characters['characters'][:3]:
        print(f"Character: {char['name']}")
        print(f"  ID: {char['id']}")
        print(f"  Rarity: {char['rarity']}★")
        print(f"  Path: {char['path']}")
        print(f"  Element: {char['element']}")
        print(f"  Images:")
        for img_type, img_path in char['images'].items():
            print(f"    {img_type}: {img_path}")
        print()
    
    # Example: Load and display path data
    print("=" * 60)
    print("Example: Path Data | 示例：命途数据")
    print("=" * 60)
    
    paths = load_json('database/paths.json')
    print(f"Total Paths: {len(paths['paths'])}")
    print()
    
    for path in paths['paths']:
        print(f"{path['name']} ({path['nameEn']})")
        print(f"  ID: {path['id']}")
        print(f"  Images:")
        for img_type, img_path in path['images'].items():
            print(f"    {img_type}: {img_path}")
        print()
    
    # Example: Load and display element data
    print("=" * 60)
    print("Example: Element Data | 示例：属性数据")
    print("=" * 60)
    
    elements = load_json('database/elements.json')
    print(f"Total Elements: {len(elements['elements'])}")
    print()
    
    for element in elements['elements']:
        print(f"{element['name']} ({element['nameEn']})")
        print(f"  ID: {element['id']}")
        print(f"  Color: {element['color']}")
        print()

if __name__ == '__main__':
    main()
