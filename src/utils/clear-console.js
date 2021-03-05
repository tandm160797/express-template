// This file is only use when dev
import readline from 'readline';

const blank = '\n'.repeat(process.stdout.rows);
console.log(blank);
readline.cursorTo(process.stdout, 0, 0);
readline.clearScreenDown(process.stdout);
