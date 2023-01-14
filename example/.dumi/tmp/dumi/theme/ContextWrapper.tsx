// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { SiteContext } from '/Users/VincentX/Dev/Project/dumi/dumi-theme-legecy/node_modules/.pnpm/dumi@2.0.18_wnhobytbzuxeuvkr3fshiwzzla/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';

const entryExports = {
  
  
};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // mark loading when route change, page component will set false when loaded
        setLoading(true);

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      pkg: {},
      entryExports,
      demos,
      components,
      locales,
      loading,
      setLoading,
      themeConfig: {"footer":"Open-source MIT Licensed | Copyright © 2019-present\n<br />\nPowered by self","hd":{"rules":[]},"rtl":true,"name":"dumi","logo":"https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png"},
    }}>
      {outlet}
    </SiteContext.Provider>
  );
}