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
  const [transactionList, setTransactionList] = useState<TransactionModel[]>([]); // TODO: Rename states to be more descriptive
  const [loading, setLoading] = useState(false);

  const handleActive = (value: string) => {
    setActive(value);
  };

  const handleListTransactions = async () => {
    setLoading(true);
    const response = await listTransactions.execute({
      collection: 'transactions',
    });
    setTransactionList(response);
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
          />
        </Center>
      </Grid.Col>


    </Grid>

  );
}