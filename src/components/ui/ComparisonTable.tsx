import type { ReactNode } from 'react';

export type Column = { key: string; label: string };
export type Row = Record<string, ReactNode>;

type ComparisonTableProps = {
  columns: Column[];
  rows: Row[];
  caption?: string;
};

export default function ComparisonTable({ columns, rows, caption }: ComparisonTableProps) {
  return (
    <div className="table-wrap">
      <table className="comparison-table">
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((column) => <th key={column.key}>{column.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => <td key={column.key}>{row[column.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
