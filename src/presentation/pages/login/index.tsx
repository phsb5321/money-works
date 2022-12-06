import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthenticationUsecase, GetAuthTokenUsecase } from '@/domain/usecases';
import { mainTheme } from '@/presentation/pages/shared';
import {
  Button, Checkbox, Notification, Paper, PasswordInput, Text, TextInput, Title
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useInputState } from '@mantine/hooks';
import { IconX } from '@tabler/icons';

import { useStyles } from './style';

export interface LogInProps {
  authentication: AuthenticationUsecase;
  getAuthToken: GetAuthTokenUsecase;
}


export function LogIn({
  authentication,
  getAuthToken,
}: LogInProps) {
  const { classes } = useStyles();
  const { classes: mainClasses } = mainTheme();

  const [errorMessage, setErrorMessage] = useInputState('');

  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (email: string, password: string) => {
    try {
      await authentication.auth({ email, password })
      navigate('/')
    } catch (error: any) {
      setErrorMessage(error.message)
    }
  }

  useEffect(() => {
    getAuthToken.get()
      .then((token) => {
        if (token) {
          navigate('/')
        }
      })
  }, [])

  return (
    <div className={mainClasses.wrapper}>
      {errorMessage && (
        <Notification
          className={mainClasses.notification}
          color="red"
          icon={<IconX />}
          title="Error"
          onClose={() => setErrorMessage('')}>
          <Text size="sm" color="red">
            {errorMessage}
          </Text>
        </Notification>
      )}

      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} align="center" mb={50} >
          Log In
        </Title>

        <form onSubmit={
          form.onSubmit((values) => {
            return handleSubmit(values.email, values.password)
          })
        }>

          <TextInput
            {...form.getInputProps('email')}
            placeholder="Enter your email"
            label="Email"
            required
            error={form.errors.email}
          />

          <PasswordInput
            {...form.getInputProps('password')}
            placeholder="Enter your password"
            label="Password"
            required
            error={form.errors.password}
          />

          <Button variant="light" type="submit" color="blue" fullWidth>
            Sign up
          </Button>
        </form>
      </Paper>
    </div>
  );
}