# renamr

[![npm version](https://img.shields.io/npm/v/renamr.svg?color=green)](https://www.npmjs.com/package/renamr)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**renamr** is a fast, intuitive, and robust bulk file renaming tool for the command line. Designed with efficiency and simplicity in mind, it allows developers and power users to perform complex renaming operations across thousands of files instantly.

---

## 🚀 Features

- **Expressive Syntax:** Simple commands to replace text, modify extensions, and manipulate casing.
- **Dry Run Support:** Preview all your renaming operations safely before applying any changes using the `--dry-run` flag.
- **Recursive Operations:** Seamlessly rename files nested deeply within complex directory structures.
- **Cross-Platform:** Built on Node.js, ensuring consistent behavior across Windows, macOS, and Linux.

---

## 📦 Installation

Install `renamr` globally via npm to access it continuously from anywhere on your system:

```bash
npm install -g renamr
```

---

## 🛠️ Usage Guide

The general syntax follows a structured command format:

```bash
renamr <command> [options] <files...>
```

### Commands

#### Text Replacement (`replace`)
Seamlessly replace occurrences of a string within file names.

```bash
renamr replace "old-text" -w "new-text" ./src/**/*
```

#### Extension Modification (`ext`)
Quickly standardize or convert file extensions across your project.

```bash
renamr ext ./src/**/*.js -w .ts
```

#### Add Prefix (`prefix`)
Prepend a consistent string to the beginning of matched file names.

```bash
renamr prefix "img_" ./assets/*.png
```

#### Add Suffix (`suffix`)
Append a string to matched file names, guaranteeing the suffix is inserted correctly right before the file extension.

```bash
renamr suffix "_v2" ./data/*.json
```

#### Case Conversions (`lowercase` & `uppercase`)
Standardize naming conventions by applying lower or upper casing to file names. Both commands feature convenient shorthand aliases (`low` and `upp`).

```bash
# Convert to lowercase
renamr low ./dist/**/* --recursive

# Convert to uppercase
renamr upp ./src/**/* --recursive
```

---

## ⚙️ Configuration Flags

| Flag | Shorthand | Description |
| :--- | :-------- | :---------- |
| `--with <value>` | `-w` | **Required** for `replace` and `ext` commands. Specifies the replacement string or new extension.  |
| `--dry-run` | `-d` | **Safe Mode:** Previews changes in the console without actually renaming any files. Highly recommended before destructive actions. |
| `--recursive` | `-r` | Executes the command recursively across all subdirectories matching the glob pattern. |

---

## 💡 Practical Examples

Safe preview of an architectural refactor:
```bash
renamr replace "component" -w "widget" ./src/**/* --dry-run
```

Migrating a legacy JavaScript codebase to TypeScript:
```bash
renamr ext ./src/**/*.js -w .ts
```

Batch renaming user uploads with a timestamp:
```bash
renamr prefix "upload_2024_" ./public/uploads/*
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
