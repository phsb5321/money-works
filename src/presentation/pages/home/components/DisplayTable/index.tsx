import { TransactionModel } from '@/domain/models';
import { Anchor, Group, Loader, Progress, ScrollArea, Table, Text } from '@mantine/core';
import { useStyles } from './style';

interface TableReviewsProps {
  data: TransactionModel[];
  loading: boolean;
}

export function DisplayTable({ data, loading }: TableReviewsProps) {
  const { classes, theme } = useStyles();

  console.log(data)

  const rows = data.map((row) => {

    return (
      <tr key={row.id}>
        <td>{
          Intl.DateTimeFormat('pt-BR', {
            // Format like: "16. Dez. 2020. Quarta"
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            weekday: 'short',
          }).format(new Date(row.createdAt))
        }</td>
        <td>
          <Anchor<'a'> size="sm" onClick={(event) => event.preventDefault()}>
            {row.amount}
          </Anchor>
        </td>

        <td>
          <Anchor<'a'> size="sm" onClick={(event) => event.preventDefault()}>
            {row.createdBy}
          </Anchor>
        </td>
      </tr>
    );
  });

  if (loading) { return <Loader size="sm" /> }

  return (
    <ScrollArea>
      <Table verticalSpacing="xs">
        <thead>
          <tr>
            <th>Value</th>
            <th>Date</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}