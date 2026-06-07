import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const comparisonTableSource = readFileSync(new URL('../src/components/ui/ComparisonTable.tsx', import.meta.url), 'utf8');
const exerciseTwoSource = readFileSync(new URL('../src/pages/ExerciseTwoPage.tsx', import.meta.url), 'utf8');
const cssSource = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8');

test('comparison tables keep column labels available for stacked mobile rows', () => {
  assert.match(comparisonTableSource, /scope="col"/);
  assert.match(comparisonTableSource, /data-label=\{column\.label\}/);
});

test('mobile table CSS stacks all cells with visible data labels instead of requiring sideways scroll', () => {
  assert.match(cssSource, /@media \(max-width: 720px\)/);
  assert.match(cssSource, /\.comparison-table td::before/);
  assert.match(cssSource, /content: attr\(data-label\)/);
  assert.match(cssSource, /\.comparison-table \{\s*min-width: 0;/);
});

test('trusted assets mock keeps asset labels visible after the table collapses on mobile', () => {
  for (const label of ['Name', 'Version', 'Status', 'Usage']) {
    assert.match(exerciseTwoSource, new RegExp(`data-label="${label}"`));
  }
  assert.match(cssSource, /\.asset-row span::before/);
});
