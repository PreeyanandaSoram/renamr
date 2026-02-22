import path from 'path';
import chalk from 'chalk';
import { getFiles, renameFile, getBaseAndExt } from '../utils.js';

export async function ext(files, options) {
  const newExt = options.with;
  const matches = await getFiles(files, options.recursive);
  const normalizedNewExt = newExt.startsWith('.') ? newExt : `.${newExt}`;

  if (matches.length === 0) {
    console.log(chalk.yellow(`No files found.`));
    return;
  }

  const results = [];

  for (const file of matches) {
    const { base, dir } = getBaseAndExt(file);
    const newPath = path.join(dir, base + normalizedNewExt);
    const result = renameFile(file, newPath, options.dryRun);
    if (result) results.push(result);
  }

  for (const { oldPath, newPath, dryRun } of results) {
    if (dryRun) {
      console.log(chalk.blue('[DRY RUN]'), `${oldPath} → ${newPath}`);
    } else {
      console.log(chalk.green('✓'), `${oldPath} → ${newPath}`);
    }
  }

  console.log();
  console.log(chalk.gray(`Changed extension of ${results.length} file(s)`));
  if (options.dryRun) {
    console.log(chalk.gray('Run without --dry-run to apply changes.'));
  }
}
