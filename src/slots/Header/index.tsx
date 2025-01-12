import HeaderExtra from '../HeadeExtra';
import { ReactComponent as IconClose } from '@ant-design/icons-svg/inline-svg/outlined/close.svg';
import { ReactComponent as IconMenu } from '@ant-design/icons-svg/inline-svg/outlined/menu.svg';
import { useRouteMeta, useSiteData } from 'dumi';
import LangSwitch from '../LangSwitch';
import Logo from '../Logo';
import Navbar from '../Navbar';
import RtlSwitch from '../RtlSwitch';
import SearchBar from '../SearchBar';
import ColorSwitch from '../ColorSwitch';
import SocialIcon from '../SocialIcon';
import { SocialTypes } from 'dumi/dist/client/theme-api/types';

import React, { useState, useMemo, type FC } from 'react';
import './index.less';

const Header: FC = () => {
  const { frontmatter } = useRouteMeta();
  const [showMenu, setShowMenu] = useState(false);
  const { themeConfig } = useSiteData();

  const extraIcons = useMemo(
    () =>
      themeConfig.socialLinks
        ? Object.keys(themeConfig.socialLinks)
            .slice(0, 5)
            .map((key) => ({
              icon: key as SocialTypes,
              link: themeConfig.socialLinks![key as SocialTypes],
            }))
        : [],
    [themeConfig.socialLinks],
  );

  return (
    <div
      className="dumi-legecy-header"
      data-static={Boolean(frontmatter.hero) || undefined}
      data-mobile-active={showMenu || undefined}
      onClick={() => setShowMenu(false)}
    >
      <div className="dumi-legecy-header-content">
        <section className="dumi-legecy-header-left">
          <Logo />
        </section>
        <section className="dumi-legecy-header-right">
          <SearchBar />
          <Navbar />
          <div className="dumi-legecy-header-right-aside">
            <LangSwitch className="item" />
            <RtlSwitch />
            <ColorSwitch />
            <HeaderExtra />
            {extraIcons.map((item) => (
              <SocialIcon
                icon={item.icon}
                link={item.link || ''}
                key={item.link}
              />
            ))}
          </div>
        </section>
        <button
          type="button"
          className="dumi-legecy-header-menu-btn"
          onClick={(ev) => {
            ev.stopPropagation();
            setShowMenu((v) => !v);
          }}
        >
          {showMenu ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </div>
  );
};

export default Header;
