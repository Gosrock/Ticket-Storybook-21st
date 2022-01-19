import 'reset.css';
import _extends$1 from '@babel/runtime/helpers/extends';
import * as React from 'react';
import React__default from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */

const Button = _ref => {
  let { primary, backgroundColor, size, label, ...props } = _ref;
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return /*#__PURE__*/ React__default.createElement(
    'button',
    _extends$1(
      {
        type: 'button',
        className: ['storybook-button', `storybook-button--${size}`, mode].join(
          ' '
        ),
        style: backgroundColor && {
          backgroundColor
        }
      },
      props
    ),
    label
  );
};
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,

  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};

var _path;

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

const SvgGoBackArrow = props =>
  /*#__PURE__*/ React.createElement(
    'svg',
    _extends(
      {
        width: '1em',
        height: '1em',
        viewBox: '0 0 22 22',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      props
    ),
    _path ||
      (_path = /*#__PURE__*/ React.createElement('path', {
        d: 'm4.77 10.382 11.07-8.645a.196.196 0 0 1 .316.154V3.79c0 .12-.056.236-.15.31L7.167 11l8.84 6.902a.39.39 0 0 1 .15.309v1.898a.196.196 0 0 1-.318.155L4.771 11.619a.785.785 0 0 1 0-1.237Z',
        fill: '#fff'
      }))
  );

/**
 * Primary UI component for user interaction
 */

const GoBackButton = _ref => {
  let { label, ...props } = _ref;
  // const mode = primary
  //   ? 'storybook-button--primary'
  //   : 'storybook-button--secondary';
  return /*#__PURE__*/ React__default.createElement(
    React__default.Fragment,
    null,
    /*#__PURE__*/ React__default.createElement(
      'button',
      _extends$1(
        {
          className: ['goBackButton', `goBackButton--medium`].join(' ')
        },
        props
      ),
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          style: {
            marginRight: '13px'
          }
        },
        /*#__PURE__*/ React__default.createElement(SvgGoBackArrow, null)
      ),
      label
    )
  );
};
GoBackButton.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};
GoBackButton.defaultProps = {
  onClick: undefined,
  label: '뒤로가기'
};

const Header = _ref => {
  let { user, onLogin, onLogout, onCreateAccount } = _ref;
  return /*#__PURE__*/ React__default.createElement(
    'header',
    null,
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: 'wrapper'
      },
      /*#__PURE__*/ React__default.createElement(
        'div',
        null,
        /*#__PURE__*/ React__default.createElement(
          'svg',
          {
            width: '32',
            height: '32',
            viewBox: '0 0 32 32',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          /*#__PURE__*/ React__default.createElement(
            'g',
            {
              fill: 'none',
              fillRule: 'evenodd'
            },
            /*#__PURE__*/ React__default.createElement('path', {
              d: 'M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z',
              fill: '#FFF'
            }),
            /*#__PURE__*/ React__default.createElement('path', {
              d: 'M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z',
              fill: '#555AB9'
            }),
            /*#__PURE__*/ React__default.createElement('path', {
              d: 'M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z',
              fill: '#91BAF8'
            })
          )
        ),
        /*#__PURE__*/ React__default.createElement('h1', null, 'Acme')
      ),
      /*#__PURE__*/ React__default.createElement(
        'div',
        null,
        user
          ? /*#__PURE__*/ React__default.createElement(Button, {
              size: 'small',
              onClick: onLogout,
              label: 'Log out'
            })
          : /*#__PURE__*/ React__default.createElement(
              React__default.Fragment,
              null,
              /*#__PURE__*/ React__default.createElement(Button, {
                size: 'small',
                onClick: onLogin,
                label: 'Log in'
              }),
              /*#__PURE__*/ React__default.createElement(Button, {
                primary: true,
                size: 'small',
                onClick: onCreateAccount,
                label: 'Sign up'
              })
            )
      )
    )
  );
};
Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired
};
Header.defaultProps = {
  user: null
};

const Page = _ref => {
  let { user, onLogin, onLogout, onCreateAccount } = _ref;
  return /*#__PURE__*/ React__default.createElement(
    'article',
    null,
    /*#__PURE__*/ React__default.createElement(Header, {
      user: user,
      onLogin: onLogin,
      onLogout: onLogout,
      onCreateAccount: onCreateAccount
    }),
    /*#__PURE__*/ React__default.createElement(
      'section',
      null,
      /*#__PURE__*/ React__default.createElement(
        'h2',
        null,
        'Pages in Storybook'
      ),
      /*#__PURE__*/ React__default.createElement(
        'p',
        null,
        'We recommend building UIs with a',
        ' ',
        /*#__PURE__*/ React__default.createElement(
          'a',
          {
            href: 'https://componentdriven.org',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          /*#__PURE__*/ React__default.createElement(
            'strong',
            null,
            'component-driven'
          )
        ),
        ' ',
        'process starting with atomic components and ending with pages.'
      ),
      /*#__PURE__*/ React__default.createElement(
        'p',
        null,
        'Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:'
      ),
      /*#__PURE__*/ React__default.createElement(
        'ul',
        null,
        /*#__PURE__*/ React__default.createElement(
          'li',
          null,
          'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'
        ),
        /*#__PURE__*/ React__default.createElement(
          'li',
          null,
          'Assemble data in the page component from your services. You can mock these services out using Storybook.'
        )
      ),
      /*#__PURE__*/ React__default.createElement(
        'p',
        null,
        'Get a guided tutorial on component-driven development at',
        ' ',
        /*#__PURE__*/ React__default.createElement(
          'a',
          {
            href: 'https://storybook.js.org/tutorials/',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          'Storybook tutorials'
        ),
        '. Read more in the',
        ' ',
        /*#__PURE__*/ React__default.createElement(
          'a',
          {
            href: 'https://storybook.js.org/docs',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          'docs'
        ),
        '.'
      ),
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: 'tip-wrapper'
        },
        /*#__PURE__*/ React__default.createElement(
          'span',
          {
            className: 'tip'
          },
          'Tip'
        ),
        ' Adjust the width of the canvas with the',
        ' ',
        /*#__PURE__*/ React__default.createElement(
          'svg',
          {
            width: '10',
            height: '10',
            viewBox: '0 0 12 12',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          /*#__PURE__*/ React__default.createElement(
            'g',
            {
              fill: 'none',
              fillRule: 'evenodd'
            },
            /*#__PURE__*/ React__default.createElement('path', {
              d: 'M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z',
              id: 'a',
              fill: '#999'
            })
          )
        ),
        'Viewports addon in the toolbar'
      )
    )
  );
};
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired
};
Page.defaultProps = {
  user: null
};

export { Button, GoBackButton, Header, Page };
