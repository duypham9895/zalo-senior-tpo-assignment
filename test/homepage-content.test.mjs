import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const homePageSource = readFileSync(new URL('../src/pages/HomePage.tsx', import.meta.url), 'utf8');

test('homepage does not show interview discussion prompts', () => {
  assert.equal(homePageSource.includes('Interview discussion'), false);
  assert.equal(homePageSource.includes('Topics I would like to discuss with the Zalo team'), false);
});
