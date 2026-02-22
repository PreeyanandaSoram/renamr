#!/usr/bin/env node

import { program } from 'commander';
import { replace } from '../src/commands/replace.js';
import { ext } from '../src/commands/ext.js';
import { prefix } from '../src/commands/prefix.js';
import { suffix } from '../src/commands/suffix.js';
import { lowercase } from '../src/commands/lowercase.js';
import { uppercase } from '../src/commands/uppercase.js';

program
  .name('renamr')
  .description('A fast and simple bulk file renamer CLI')
  .version('1.0.0');

program
  .command('replace <pattern> <replacement> <files...>')
  .description('Replace text in file names')
  .option('-d, --dry-run', 'Preview changes without applying', false)
  .option('-r, --recursive', 'Search files recursively', false)
  .action(replace);

program
  .command('ext <oldExt> <newExt> <files...>')
  .description('Change file extensions')
  .option('-d, --dry-run', 'Preview changes without applying', false)
  .option('-r, --recursive', 'Search files recursively', false)
  .action(ext);

program
  .command('prefix <prefix> <files...>')
  .description('Add prefix to file names')
  .option('-d, --dry-run', 'Preview changes without applying', false)
  .option('-r, --recursive', 'Search files recursively', false)
  .action(prefix);

program
  .command('suffix <suffix> <files...>')
  .description('Add suffix to file names (before extension)')
  .option('-d, --dry-run', 'Preview changes without applying', false)
  .option('-r, --recursive', 'Search files recursively', false)
  .action(suffix);

program
  .command('lowercase <files...>')
  .description('Convert file names to lowercase')
  .option('-d, --dry-run', 'Preview changes without applying', false)
  .option('-r, --recursive', 'Search files recursively', false)
  .action(lowercase);

program
  .command('uppercase <files...>')
  .description('Convert file names to uppercase')
  .option('-d, --dry-run', 'Preview changes without applying', false)
  .option('-r, --recursive', 'Search files recursively', false)
  .action(uppercase);

program.parse();
