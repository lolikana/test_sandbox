import fs from 'fs';
import path from 'path';

import { describe, it, vi } from 'vitest';
import { showError } from './dom';
import { Window } from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocContent);
vi.stubGlobal('document', document);

describe('dom', () => {});
