import { useState } from 'react';
import { createStyles, Navbar, UnstyledButton, Tooltip, Title } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';
import { useStyles } from './style';

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home' },
  // { icon: IconGauge, label: 'Dashboard' },
  // { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  // { icon: IconCalendarStats, label: 'Releases' },
  // { icon: IconFingerprint, label: 'Security' },
  // { icon: IconSettings, label: 'Settings' },
  { icon: IconUser, label: 'Account' },
];

const linksMockdata: { [key: string]: string[]; } = {
  Home: ['Overview', 'Projects', 'Team', 'Calendar'],
  Account: ['Profile', 'Notifications', 'Logout'],
}

export enum NavbarActive {
  Home = 'Home',
  Account = 'Account',
}

export type NavbarActiveType = keyof typeof NavbarActive;

export enum NavbarActiveLink {
  Overview = 'Overview',
  Projects = 'Projects',
  Team = 'Team',
  Calendar = 'Calendar',
  Profile = 'Profile',
  Notifications = 'Notifications',
  Logout = 'Logout',
}

export type NavbarActiveLinkType = keyof typeof NavbarActiveLink;

interface HomeNavbarProps {
  active: NavbarActiveType;
  activeLink: NavbarActiveLinkType;
  setActive: (value: NavbarActiveType) => void;
  setActiveLink: (value: NavbarActiveLinkType) => void;
}

export function HomeNavbar({
  active,
  activeLink,
  setActive,
  setActiveLink,
}: HomeNavbarProps) {
  const { classes, cx } = useStyles();
  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip label={link.label} position="right" withArrow transitionDuration={0} key={link.label}>
      <UnstyledButton
        onClick={() => {
          setActive(link.label as NavbarActiveType);
        }}
        className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
      >
        <link.icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata[`${active}`].map((link) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link as NavbarActiveLinkType);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <Navbar width={{ sm: 300 }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          {links}
        </div>
      </Navbar.Section>
    </Navbar>
  );
}