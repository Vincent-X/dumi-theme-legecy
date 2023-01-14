import { Link, useRouteMeta } from 'dumi';
import React, { type FC } from 'react';
import './index.less';

const Features: FC = () => {
  const { frontmatter } = useRouteMeta();

  return Boolean(frontmatter.features?.length) ? (
    <div
      className="dumi-legecy-features"
      // auto render 2 or 3 cols by feature count
      data-cols={
        [3, 2].find((n) => frontmatter.features!.length % n === 0) || 3
      }
    >
      {frontmatter.features!.map(
        ({ title, description, icon, emoji, link }) => {
          let titleWithLink: React.ReactNode;
          if (link) {
            titleWithLink = /^(\w+:)\/\/|^(mailto|tel):/.test(link) ? (
              <a href={link} target="_blank" rel="noreferrer">
                {title}
              </a>
            ) : (
              <Link to={link}>{title}</Link>
            );
          }

          return (
            <div key={title} className="dumi-legecy-features-item">
              {(icon || emoji) && <i>{icon || emoji}</i>}
              {title && <h3>{titleWithLink || title}</h3>}
              {description && (
                <p dangerouslySetInnerHTML={{ __html: description }} />
              )}
            </div>
          );
        },
      )}
    </div>
  ) : null;
};

export default Features;
