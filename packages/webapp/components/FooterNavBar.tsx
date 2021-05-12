import React, { ReactElement, ReactNode, useContext } from 'react';
import Link from 'next/link';
import { Flipper, Flipped } from 'react-flip-toolkit';
import HomeIcon from '@dailydotdev/shared/icons/home.svg';
import BookmarkIcon from '@dailydotdev/shared/icons/bookmark.svg';
import FilterIcon from '@dailydotdev/shared/icons/filter.svg';
import LayoutIcon from '@dailydotdev/shared/icons/layout.svg';
import AuthContext from '../../shared/src/contexts/AuthContext';
import { useRouter } from 'next/router';
import { ActiveTabIndicator } from '@dailydotdev/shared/src/components/utilities';
import { Button } from '@dailydotdev/shared/src/components/buttons/Button';
import { getTooltipProps } from '@dailydotdev/shared/src/lib/tooltip';
import classNames from 'classnames';
import styles from '../styles/footerNavBar.module.css';

type Tab = {
  path: string;
  title: string;
  icon: ReactNode;
  requiresLogin?: boolean;
};
export const tabs: Tab[] = [
  {
    path: '/',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    path: '/bookmarks',
    title: 'Bookmarks',
    icon: <BookmarkIcon />,
    requiresLogin: true,
  },
  {
    path: '/filters',
    title: 'Filters',
    icon: <FilterIcon />,
  },
  {
    path: '/settings',
    title: 'Settings',
    icon: <LayoutIcon />,
  },
];

export default function FooterNavBar(): ReactElement {
  const { user, showLogin } = useContext(AuthContext);
  const router = useRouter();
  const selectedTab = tabs.findIndex((tab) => tab.path === router?.pathname);

  return (
    <Flipper
      flipKey={selectedTab}
      spring="veryGentle"
      element="nav"
      className={classNames(
        'fixed grid left-0 bottom-0 w-full grid-flow-col items-center bg-theme-bg-primary border-t border-theme-divider-tertiary z-2',
        styles.footerNavBar,
      )}
    >
      {tabs.map((tab, index) => (
        <div key={tab.path} className="relative">
          {!tab.requiresLogin || user ? (
            <Link href={tab.path} prefetch={false} passHref>
              <Button
                className="btn-tertiary"
                style={{ width: '100%' }}
                buttonSize="large"
                tag="a"
                icon={tab.icon}
                pressed={index === selectedTab}
                {...getTooltipProps(tab.title)}
              />
            </Link>
          ) : (
            <Button
              className="btn-tertiary w-full"
              buttonSize="large"
              icon={tab.icon}
              onClick={() => showLogin()}
              {...getTooltipProps(tab.title)}
            />
          )}
          <Flipped flipId="activeTabIndicator">
            {selectedTab === index && (
              <ActiveTabIndicator
                className="w-12"
                style={{ top: '-0.125rem' }}
              />
            )}
          </Flipped>
        </div>
      ))}
    </Flipper>
  );
}
