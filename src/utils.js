import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

export async function getFiles(patterns, recursive) {
  const files = [];
  for (const pattern of patterns) {
    if (pattern.includes('*') || recursive) {
      const globPattern = recursive && !pattern.includes('*')
        ? `${pattern}/**/*`
        : pattern;
      const matches = await glob(globPattern, { nodir: true });
      files.push(...matches);
    } else {
      if (fs.existsSync(pattern) && fs.statSync(pattern).isFile()) {
        files.push(pattern);
      }
    }
  }
  return [...new Set(files)];
}

export function renameFile(oldPath, newPath, dryRun) {
  if (oldPath === newPath) return null;

  if (dryRun) {
    return { oldPath, newPath, dryRun: true };
  }

  const dir = path.dirname(newPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.renameSync(oldPath, newPath);
  return { oldPath, newPath, dryRun: false };
}

export function getBaseAndExt(filePath) {
  const ext = path.extname(filePath);
  const base = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  return { base, ext, dir };
}

export function replaceContent(filePath, target, replacement, dryRun) {
  const content = fs.readFileSync(filePath, 'utf-8');

  if (!content.includes(target)) {
    return null;
  }

  const newContent = content.split(target).join(replacement);

  if (dryRun) {
    return { filePath, dryRun: true };
  }

  fs.writeFileSync(filePath, newContent, 'utf-8');
  return { filePath, dryRun: false };
}
