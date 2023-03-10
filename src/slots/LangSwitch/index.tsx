import { ReactComponent as IconDown } from '@ant-design/icons-svg/inline-svg/outlined/down.svg';
import {
  history,
  Link,
  useIntl,
  useLocale,
  useLocation,
  useSiteData,
} from 'dumi';
import React, { useEffect, useState, type FC } from 'react';
import classnames from 'classnames';
import './index.less';

type ILocaleItem = ReturnType<typeof useSiteData>['locales'][0];

function getTargetLocalePath({
  pathname,
  current,
  target,
}: {
  pathname: string;
  current: ILocaleItem;
  target: ILocaleItem;
}) {
  const clearPath =
    'base' in current
      ? pathname.replace(current.base.replace(/\/$/, ''), '')
      : pathname.replace(new RegExp(`${current.suffix}$`), '');

  return 'base' in target
    ? `${target.base}${clearPath}`.replace(/^\/\//, '/')
    : `${clearPath}${target.suffix}`;
}

const SingleSwitch: FC<{ locale: ILocaleItem; current: ILocaleItem }> = ({
  locale,
  current,
}) => {
  const { pathname } = useLocation();
  const [path, setPath] = useState(() =>
    getTargetLocalePath({ pathname, current, target: locale }),
  );

  useEffect(() => {
    setPath(getTargetLocalePath({ pathname, current, target: locale }));
  }, [pathname, current.id, locale.id]);

  return (
    <Link className="dumi-legecy-lang-switch" to={path}>
      {locale.name}
    </Link>
  );
};

const LangSwitch: FC<{ className?: string }> = ({ className }) => {
  const { locales } = useSiteData();
  const { locale } = useIntl();
  const current = useLocale();

  // do not render in single language
  if (locales.length <= 1) return null;

  return (
    <div className={classnames('dumi-legecy-lang-select', [className])}>
      <select
        defaultValue={locale}
        onChange={(ev) => {
          history.push(
            getTargetLocalePath({
              pathname: history.location.pathname,
              current,
              target: locales.find(({ id }) => id === ev.target.value)!,
            }),
          );
        }}
      >
        {locales.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <IconDown />
    </div>
  );
};

export default LangSwitch;
