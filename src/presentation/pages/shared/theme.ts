import { createStyles } from "@mantine/core";

export const mainTheme = createStyles((theme) => ({
  wrapper: {
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://source.unsplash.com/random/1280x1280/?mountain)',
  },

  notification: {
    position: 'fixed',
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },

}));