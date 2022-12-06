import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  form: {
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]}`,
    height: '100vh',
    minHeight: 900,
    maxWidth: 450,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },

    '& > :last-child > *': {
      marginBottom: theme.spacing.md
    }

  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

}));