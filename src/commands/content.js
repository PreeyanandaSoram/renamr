import chalk from 'chalk';
import { getFiles, replaceContent } from '../utils.js';

export async function content(pattern, files, options) {
    const replacement = options.with;
    const matches = await getFiles(files, options.recursive);

    if (matches.length === 0) {
        console.log(chalk.yellow('No files found matching the search pattern.'));
        return;
    }

    const results = [];

    for (const file of matches) {
        try {
            const result = replaceContent(file, pattern, replacement, options.dryRun);
            if (result) results.push(result);
        } catch (err) {
            // Ignore directories or binary read errors gracefully for now
            if (err.code !== 'EISDIR') {
                console.error(chalk.red(`Failed to read/write ${file}: ${err.message}`));
            }
        }
    }

    if (results.length === 0) {
        console.log(chalk.yellow('No files needed content replacement (string not found).'));
        return;
    }

    for (const { filePath, dryRun } of results) {
        if (dryRun) {
            console.log(chalk.blue('[DRY RUN]'), `Would update content in ${filePath}`);
        } else {
            console.log(chalk.green('✓'), `Updated content in ${filePath}`);
        }
    }

    console.log();
    console.log(chalk.gray(`Modified ${results.length} file(s)`));
    if (options.dryRun) {
        console.log(chalk.gray('Run without --dry-run to apply changes.'));
    }
}
