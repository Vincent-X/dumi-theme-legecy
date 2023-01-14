import HeaderExtra from '../HeadeExtra';
import { ReactComponent as IconClose } from '@ant-design/icons-svg/inline-svg/outlined/close.svg';
import { ReactComponent as IconMenu } from '@ant-design/icons-svg/inline-svg/outlined/menu.svg';
import { useRouteMeta } from 'dumi';
import LangSwitch from '../LangSwitch';
import Logo from '../Logo';
import Navbar from '../Navbar';
import RtlSwitch from '../RtlSwitch';
import SearchBar from '../SearchBar';
import ColorSwitch from '../ColorSwitch';
import React, { useState, type FC } from 'react';
import './index.less';

const Header: FC = () => {
  const { frontmatter } = useRouteMeta();
  const [showMenu, setShowMenu] = useState(false);

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
