import classnames from 'classnames';
import { IPreviewerProps, useLocation } from 'dumi';
import PreviewerActions from 'dumi/theme/slots/PreviewerActions';
import React, { type FC } from 'react';
import './index.less';

const Previewer: FC<IPreviewerProps> = (props) => {
  const { hash } = useLocation();
  const link = `#${props.asset.id}`;

  return (
    <div
      id={props.asset.id}
      className={classnames('dumi-legecy-previewer', props.className)}
      style={props.style}
      data-debug={props.debug}
      data-active={hash === link || undefined}
    >
      <div
        className="dumi-legecy-previewer-demo"
        style={{ background: props.background }}
        data-compact={props.compact || undefined}
        data-transform={props.transform || undefined}
        data-iframe={props.iframe || undefined}
      >
        {props.iframe ? (
          <iframe
            style={
              ['string', 'number'].includes(typeof props.iframe)
                ? { height: Number(props.iframe) }
                : {}
            }
            src={props.demoUrl}
          ></iframe>
        ) : (
          props.children
        )}
      </div>
      <div className="dumi-legecy-previewer-meta">
        {(props.title || props.debug) && (
          <div className="dumi-legecy-previewer-desc">
            <h5>
              <a href={link}>
                {props.debug && <strong>DEV ONLY</strong>}
                {props.title}
              </a>
            </h5>
            {props.description && (
              <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: props.description }}
              />
            )}
          </div>
        )}
        <PreviewerActions {...props} />
      </div>
    </div>
  );
};

export default Previewer;
