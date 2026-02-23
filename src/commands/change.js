import path from 'path';
import chalk from 'chalk';
import { getFiles, renameFile, getBaseAndExt } from '../utils.js';

export async function change(pattern, files, options) {
  const replacement = options.with;
  const matches = await getFiles(files, options.recursive);

  if (matches.length === 0) {
    console.log(chalk.yellow('No files found matching the pattern.'));
    return;
  }

  const results = [];

  for (const file of matches) {
    const { base, ext, dir } = getBaseAndExt(file);
    const newBase = base.split(pattern).join(replacement);
    const newPath = path.join(dir, newBase + ext);
    const result = renameFile(file, newPath, options.dryRun);
    if (result) results.push(result);
  }

  if (results.length === 0) {
    console.log(chalk.yellow('No files need renaming.'));
    return;
  }

  for (const { oldPath, newPath, dryRun } of results) {
    if (dryRun) {
      console.log(chalk.blue('[DRY RUN]'), `${oldPath} → ${newPath}`);
    } else {
      console.log(chalk.green('✓'), `${oldPath} → ${newPath}`);
    }
  }

  console.log();
  console.log(chalk.gray(`Renamed ${results.length} file(s)`));
  if (options.dryRun) {
    console.log(chalk.gray('Run without --dry-run to apply changes.'));
  }
}
