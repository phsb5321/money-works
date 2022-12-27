import { TransactionModel } from '@/domain/models';
import { Anchor, Group, Loader, Progress, ScrollArea, Table, Text } from '@mantine/core';
import { ReactNode } from 'react';
import { useStyles } from './style';

interface TableReviewsProps {
  data: TransactionModel[];
  loading: boolean;
  columns: string[];
}

export function DisplayTable({ data, loading, columns }: TableReviewsProps) {
  const { classes, theme } = useStyles();

  if (
    data.length === 0
    || Object.keys(data[0]).length === 0
    || loading
  ) { return <Loader size="sm" /> }

  const headers: ReactNode = columns.map((column) => {
    return (
      <th key={column}>
        <Text>{column}</Text>
      </th>
    );
  });

  const rows: ReactNode = data.map((item) => {

    // filter and sort the object keys
    const orderedValues = Object.keys(item)
      .filter((key) => columns.includes(key))
      .sort((a, b) => columns.indexOf(a) - columns.indexOf(b))
      .map((key) => item[key] as string | number | boolean);


    const cells: ReactNode = orderedValues.map((value) => {
      const elementId = item.id;
      switch (typeof value) {
        case 'string':
          return (
            <td key={elementId + value}>
              {/* handle possible date */}
              {isDate(value) ? (
                <Text>{new Date(value).toLocaleDateString()}</Text>
              ) : (
                <Text>{value}</Text>
              )}
            </td>
          );

        case 'number':
          return (
            <td key={elementId + value}>
              <Text>{value}</Text>
            </td>
          );

        case 'boolean':
          return (
            <td key={elementId + value}>
              <Text>{value ? 'Sim' : 'Não'}</Text>
            </td>
          );


        default:
          return <td key={elementId + value}></td>;
      }

    });

    return <tr key={item.id}>{cells}</tr> as ReactNode;
  });

  return (
    <ScrollArea
      className={classes.scrollArea}
    >
      <Table verticalSpacing="lg">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export const isDate = (value: string): boolean => {
  const date = new Date(value);
  return date instanceof Date && !isNaN(date.getTime());
}
