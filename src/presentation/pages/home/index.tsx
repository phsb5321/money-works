import { useEffect, useState } from 'react';
import { useStyles } from './style';
import { HomeNavbar } from './components';
import { ListTransactionsUsecases } from '@/domain/usecases';


export interface HomeProps {
  listTransactions: ListTransactionsUsecases;
}

export function Home({
  listTransactions,
}: HomeProps) {

  const classes = useStyles();
  const [active, setActive] = useState('home');

  const handleActive = (value: string) => {
    setActive(value);
  };

  const handleListTransactions = async () => {
    const response = await listTransactions.list({});
    console.log(response);
  };

  useEffect(() => {
    handleListTransactions();
  }, []);

  return (
    < HomeNavbar />
  );
}