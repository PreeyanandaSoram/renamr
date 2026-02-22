# renamr

A fast and simple bulk file renamer for the command line.

## Installation

```bash
npm install -g renamr
```

## Usage

```
renamr <command> [options] <files...>
```

### Commands

#### replace

Replace text in file names.

```bash
renamr replace "old" "new" ./src/**/*
```

#### ext

Change file extensions.

```bash
renamr ext .js .ts ./src/**/*.js
```

#### prefix

Add a prefix to file names.

```bash
renamr prefix "img_" ./assets/*.png
```

#### suffix

Add a suffix to file names (before the extension).

```bash
renamr suffix "_backup" ./data/*.json
```

#### lowercase

Convert file names to lowercase.

```bash
renamr lowercase ./src/**/*
```

#### uppercase

Convert file names to uppercase.

```bash
renamr uppercase ./src/**/*
```

### Options

| Option | Description |
|--------|-------------|
| `-d, --dry-run` | Preview changes without applying them |
| `-r, --recursive` | Search files recursively |

### Examples

Preview changes before applying:

```bash
renamr replace "component" "widget" ./src/**/* --dry-run
```

Rename all JS files to TypeScript:

```bash
renamr ext .js .ts ./src/**/*.js
```

Add a timestamp prefix to all images:

```bash
renamr prefix "2024-06-15_" ./screenshots/*
```

Convert all file names in a directory to lowercase:

```bash
renamr lowercase ./dist/**/* --recursive
```

## License

MIT
