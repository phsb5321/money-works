import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { AddAccountUsecase, GetAuthTokenUsecase } from '@/domain/usecases';
import { mainTheme } from '@/presentation/pages/shared';
import { getPasswordStrength } from '@/presentation/validations';
import {
  Button,
  Checkbox,
  MantineProvider,
  Notification,
  Paper,
  PasswordInput,
  Progress,
  Text,
  TextInput,
  Title
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useInputState } from '@mantine/hooks';
import { IconCheck, IconX } from '@tabler/icons';

import { useStyles } from './style';

export interface SignUpProps {
  addAccount: AddAccountUsecase
  getAuthToken: GetAuthTokenUsecase
}

export function SignUpPage({
  addAccount,
  getAuthToken,
}: SignUpProps): JSX.Element {
  const { classes } = useStyles();
  const { classes: mainClasses } = mainTheme();

  const [errorMessage, setErrorMessage] = useInputState('');
  const [{ score, message }, setPaswordStrength] = useInputState({ score: 0, message: '' });

  const navigate = useNavigate();

  useEffect(() => {
    getAuthToken.get()
      .then((token) => {
        if (token) {
          navigate('/')
        }
      })
  }, [])

  const handleSubmit = async (
    email: string,
    password: string,
    passwordConfirm: string
  ) => {
    try {
      if (password !== passwordConfirm) {
        setErrorMessage('Password does not match')
        return
      }
      await addAccount.add({ email, password, passwordConfirm })
      navigate('/signin')
    } catch (error: any) {
      setErrorMessage(error.message)
    }
  }

  const form = useForm({
    initialValues: {
      passwordConfirm: '',
      password: '',
      email: '',
    },

    validate: {
      passwordConfirm: (value, values) => { return value !== values.password && 'Password does not match' },
      password: (value) => {
        const { score, message } = getPasswordStrength({ password: value })
        setPaswordStrength({ score, message })
        return score <= 60
      },
    },

    validateInputOnChange: true,
    validateInputOnBlur: true,
    clearInputErrorOnChange: true,
  });


  return (
    <div
      className={mainClasses.wrapper}
      data-testid="signup-page"
    >

      {errorMessage && (
        <Notification
          onClose={() => setErrorMessage('')}
          className={mainClasses.notification}
          icon={<IconX />}
          title="Error"
          color="red"
        >
          <Text size="sm" color="red"> {errorMessage} </Text>
        </Notification>
      )}

      <Paper className={classes.form} radius={0} p={30}>

        <Title
          order={2}
          align="center" mb={50}
          className={classes.title}
          data-testid="signup-title"
        >
          Sing Up
        </Title>

        <form onSubmit={
          form.onSubmit((values) => {
            return handleSubmit(values.email, values.password, values.passwordConfirm)
          })}

          data-testid="signup-form"
        >

          <TextInput
            {...form.getInputProps('email')}
            placeholder="Enter your email"
            data-testid="signup-email-input"
            error={form.errors.email}
            label="Email"
            required
          />

          <PasswordInput
            placeholder="Enter your password"
            error={form.errors.password}
            label="Password"
            required
            {...form.getInputProps('password')}
          />

          <Progress
            value={score}
            color={
              score > 90 ? 'blue'
                : score > 80 ? 'green'
                  : score > 60 ? 'teal'
                    : score > 30 ? 'yellow' : 'red'
            }
          />

          {message && (
            <Text
              color={
                score > 90 ? 'blue'
                  : score > 80 ? 'green'
                    : score > 60 ? 'teal'
                      : score > 30 ? 'yellow' : 'red'
              }
              size="sm"
            >
              {message}
            </Text>
          )}


          <PasswordInput
            placeholder="Confirm your password"
            label="Confirm password"
            {...form.getInputProps('passwordConfirm')}
          />

          <Button variant="light" type="submit" color="blue" fullWidth>
            Sign up
          </Button>
        </form>

      </Paper>
    </div >
  );
}