import { useEffect, useState } from 'react';
import { useStyles } from './style';
import { HomeNavbar, NavbarActiveLinkType, NavbarActiveType } from './components';
import { ListTransactionsUsecases } from '@/domain/usecases';
import { Center, Container, Grid, Loader } from '@mantine/core';
import { DisplayTable } from './components/DisplayTable';
import { TransactionModel } from '@/domain/models';


export interface HomeProps {
  listTransactions: ListTransactionsUsecases;
}

export function HomePage({
  listTransactions,
}: HomeProps) {

  // Styles
  const classes = useStyles();

  // Navbar logic and state
  const [active, setActive] = useState<NavbarActiveType>('Home');
  const [activeLink, setActiveLink] = useState<NavbarActiveLinkType>('Overview');
  const [loading, setLoading] = useState(true);
  const handleActive = (value: string) => {
    setActive(value as NavbarActiveType);
  };

  // Query logic and state
  const [transactionList, setTransactionList] = useState<TransactionModel[]>([]);
  const handleListTransactions = async () => {
    const { items } = await listTransactions.execute({});
    setTransactionList(items);
    setLoading(false);
  };
  useEffect(() => { handleListTransactions(); }, []);

  return (
    <Grid >
      <Grid.Col span={2}>
        <HomeNavbar
          active={active}
          activeLink={activeLink}
          setActive={handleActive}
          setActiveLink={setActiveLink}
        />
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