import _extends$2 from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import * as React from 'react';
import React__default from 'react';
import PropTypes from 'prop-types';

var _excluded$2 = ['primary', 'backgroundColor', 'size', 'label'];
/**
 * Primary UI component for user interaction
 */

var Button = function Button(_ref) {
  var primary = _ref.primary,
    backgroundColor = _ref.backgroundColor,
    size = _ref.size,
    label = _ref.label,
    props = _objectWithoutProperties(_ref, _excluded$2);

  var mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return /*#__PURE__*/ React__default.createElement(
    'button',
    _extends$2(
      {
        type: 'button',
        className: [
          'storybook-button',
          'storybook-button--'.concat(size),
          mode
        ].join(' '),
        style: backgroundColor && {
          backgroundColor: backgroundColor
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

var _path$1;

function _extends$1() {
  _extends$1 =
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
  return _extends$1.apply(this, arguments);
}

var SvgGoBackArrow = function SvgGoBackArrow(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends$1(
      {
        width: '1em',
        height: '1em',
        viewBox: '0 0 22 22',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      props
    ),
    _path$1 ||
      (_path$1 = /*#__PURE__*/ React.createElement('path', {
        d: 'm4.77 10.382 11.07-8.645a.196.196 0 0 1 .316.154V3.79c0 .12-.056.236-.15.31L7.167 11l8.84 6.902a.39.39 0 0 1 .15.309v1.898a.196.196 0 0 1-.318.155L4.771 11.619a.785.785 0 0 1 0-1.237Z',
        fill: '#fff'
      }))
  );
};

var _excluded$1 = ['label'];
/**
 * Primary UI component for user interaction
 */

var GoBackButton = function GoBackButton(_ref) {
  var label = _ref.label,
    props = _objectWithoutProperties(_ref, _excluded$1);

  // const mode = primary
  //   ? 'storybook-button--primary'
  //   : 'storybook-button--secondary';
  return /*#__PURE__*/ React__default.createElement(
    React__default.Fragment,
    null,
    /*#__PURE__*/ React__default.createElement(
      'button',
      _extends$2(
        {
          className: ['goBackButton', 'goBackButton--medium'].join(' ')
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

var Header = function Header(_ref) {
  var user = _ref.user,
    onLogin = _ref.onLogin,
    onLogout = _ref.onLogout,
    onCreateAccount = _ref.onCreateAccount;
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

var Page = function Page(_ref) {
  var user = _ref.user,
    onLogin = _ref.onLogin,
    onLogout = _ref.onLogout,
    onCreateAccount = _ref.onCreateAccount;
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

var SvgGoFrontArrow = function SvgGoFrontArrow(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends(
      {
        width: '1em',
        height: '1em',
        viewBox: '0 0 20 20',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      props
    ),
    _path ||
      (_path = /*#__PURE__*/ React.createElement('path', {
        d: 'M15.663 9.438 5.6 1.578a.178.178 0 0 0-.287.141v1.726c0 .11.05.214.136.281L13.484 10 5.45 16.276a.354.354 0 0 0-.136.281v1.726c0 .15.171.232.287.14l10.063-7.859a.711.711 0 0 0 0-1.125Z'
      }))
  );
};

var _excluded = ['label', 'fontColor', 'arrowColor', 'arrowCircleBackground'];
/**
 * Primary UI component for user interaction
 */

var GoFrontButton = function GoFrontButton(_ref) {
  var label = _ref.label,
    fontColor = _ref.fontColor,
    arrowColor = _ref.arrowColor,
    arrowCircleBackground = _ref.arrowCircleBackground,
    props = _objectWithoutProperties(_ref, _excluded);

  // const mode = primary
  //   ? 'storybook-button--primary'
  //   : 'storybook-button--secondary';
  return /*#__PURE__*/ React__default.createElement(
    React__default.Fragment,
    null,
    /*#__PURE__*/ React__default.createElement(
      'button',
      _extends$2(
        {
          className: [
            'GoFrontButton',
            'GoFrontButton--medium',
            'GoFrontButton--font-'.concat(fontColor)
          ].join(' ')
        },
        props
      ),
      /*#__PURE__*/ React__default.createElement('span', null, label),
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          style: {
            marginLeft: '11px'
          },
          className: arrowCircleBackground ? 'GoFrontButton--circle' : ''
        },
        /*#__PURE__*/ React__default.createElement(SvgGoFrontArrow, {
          fill: arrowColor === 'gray' ? '#b6b7b8' : arrowColor
        })
      )
    )
  );
};
GoFrontButton.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

  /**
   * 폰트의 컬러를 변경할수 있습니다. 기본은 white 입니다,
   */
  fontColor: PropTypes.oneOf(['white', 'gray']),

  /**
   * 화살표의 색을 변경할수 있습니다. 기본은 white 입니다,
   */
  arrowColor: PropTypes.oneOf(['white', 'yellow', 'gray']),

  /**
   * 화살표 배경에 원을 지정할 수 있습니다. 기본은 true 입니다,
   */
  arrowCircleBackground: PropTypes.bool
};
GoFrontButton.defaultProps = {
  onClick: undefined,
  label: 'label을 입력해 주세요.',
  arrowColor: 'white',
  arrowCircleBackground: true,
  fontColor: 'white'
};

export { Button, GoBackButton, GoFrontButton, Header, Page };
