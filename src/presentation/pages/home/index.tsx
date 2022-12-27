import { useEffect, useState } from 'react';
import { useStyles } from './style';
import { HomeNavbar } from './components';
import { ListTransactionsUsecases } from '@/domain/usecases';
import { Center, Container, Grid, Loader } from '@mantine/core';
import { DisplayTable } from './components/DisplayTable';
import { TransactionModel } from '@/domain/models';


export interface HomeProps {
  listTransactions: ListTransactionsUsecases;
}

export function Home({
  listTransactions,
}: HomeProps) {

  const classes = useStyles();
  const [active, setActive] = useState('home');
  // TODO: Rename states to be more descriptive
  const [transactionList, setTransactionList] = useState<TransactionModel[]>([]);
  const [loading, setLoading] = useState(false);

  const handleActive = (value: string) => {
    setActive(value);
  };

  const handleListTransactions = async () => {
    setLoading(true);
    const { items } = await listTransactions.execute({});
    setTransactionList(items);
    setLoading(false);
  };


  useEffect(() => {
    handleListTransactions();
  }, []);

  return (
    <Grid >
      <Grid.Col span={2}>
        <HomeNavbar />
      </Grid.Col>

      <Grid.Col span={8}>
        <Center
          style={{
            height: '100vh',
            width: '100%',
          }}
        >
          <DisplayTable
            data={transactionList}
            loading={loading}
            columns={['id', 'description', 'amount', 'created']}
          />
        </Center>
      </Grid.Col>


    </Grid>

  );
}