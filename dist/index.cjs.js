'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends$2 = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(
          n,
          k,
          d.get
            ? d
            : {
                enumerable: true,
                get: function () {
                  return e[k];
                }
              }
        );
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var _extends__default = /*#__PURE__*/ _interopDefaultLegacy(_extends$2);
var _objectWithoutProperties__default = /*#__PURE__*/ _interopDefaultLegacy(
  _objectWithoutProperties
);
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/ _interopNamespace(React);
var PropTypes__default = /*#__PURE__*/ _interopDefaultLegacy(PropTypes);

var _excluded$b = ['primary', 'backgroundColor', 'size', 'label'];
/**
 * Primary UI component for user interaction
 */

var Button = function Button(_ref) {
  var primary = _ref.primary,
    backgroundColor = _ref.backgroundColor,
    size = _ref.size,
    label = _ref.label,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$b);

  var mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return /*#__PURE__*/ React__default['default'].createElement(
    'button',
    _extends__default['default'](
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
  primary: PropTypes__default['default'].bool,

  /**
   * What background color to use
   */
  backgroundColor: PropTypes__default['default'].string,

  /**
   * How large should the button be?
   */
  size: PropTypes__default['default'].oneOf(['small', 'medium', 'large']),

  /**
   * Button contents
   */
  label: PropTypes__default['default'].string.isRequired,

  /**
   * Optional click handler
   */
  onClick: PropTypes__default['default'].func
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
  return /*#__PURE__*/ React__namespace.createElement(
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
      (_path$1 = /*#__PURE__*/ React__namespace.createElement('path', {
        d: 'm4.77 10.382 11.07-8.645a.196.196 0 0 1 .316.154V3.79c0 .12-.056.236-.15.31L7.167 11l8.84 6.902a.39.39 0 0 1 .15.309v1.898a.196.196 0 0 1-.318.155L4.771 11.619a.785.785 0 0 1 0-1.237Z',
        fill: '#fff'
      }))
  );
};

var _excluded$a = ['label'];
/**
 * Primary UI component for user interaction
 */

var GoBackButton = function GoBackButton(_ref) {
  var label = _ref.label,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$a);

  // const mode = primary
  //   ? 'storybook-button--primary'
  //   : 'storybook-button--secondary';
  return /*#__PURE__*/ React__default['default'].createElement(
    React__default['default'].Fragment,
    null,
    /*#__PURE__*/ React__default['default'].createElement(
      'button',
      _extends__default['default'](
        {
          className: ['goBackButton', 'goBackButton--medium'].join(' ')
        },
        props
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          style: {
            marginRight: '13px'
          }
        },
        /*#__PURE__*/ React__default['default'].createElement(
          SvgGoBackArrow,
          null
        )
      ),
      label
    )
  );
};
GoBackButton.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes__default['default'].string.isRequired,

  /**
   * Optional click handler
   */
  onClick: PropTypes__default['default'].func
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
  return /*#__PURE__*/ React__default['default'].createElement(
    'header',
    null,
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: 'wrapper'
      },
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        null,
        /*#__PURE__*/ React__default['default'].createElement(
          'svg',
          {
            width: '32',
            height: '32',
            viewBox: '0 0 32 32',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'g',
            {
              fill: 'none',
              fillRule: 'evenodd'
            },
            /*#__PURE__*/ React__default['default'].createElement('path', {
              d: 'M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z',
              fill: '#FFF'
            }),
            /*#__PURE__*/ React__default['default'].createElement('path', {
              d: 'M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z',
              fill: '#555AB9'
            }),
            /*#__PURE__*/ React__default['default'].createElement('path', {
              d: 'M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z',
              fill: '#91BAF8'
            })
          )
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'h1',
          null,
          'Acme'
        )
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        null,
        user
          ? /*#__PURE__*/ React__default['default'].createElement(Button, {
              size: 'small',
              onClick: onLogout,
              label: 'Log out'
            })
          : /*#__PURE__*/ React__default['default'].createElement(
              React__default['default'].Fragment,
              null,
              /*#__PURE__*/ React__default['default'].createElement(Button, {
                size: 'small',
                onClick: onLogin,
                label: 'Log in'
              }),
              /*#__PURE__*/ React__default['default'].createElement(Button, {
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
  user: PropTypes__default['default'].shape({}),
  onLogin: PropTypes__default['default'].func.isRequired,
  onLogout: PropTypes__default['default'].func.isRequired,
  onCreateAccount: PropTypes__default['default'].func.isRequired
};
Header.defaultProps = {
  user: null
};

var Page = function Page(_ref) {
  var user = _ref.user,
    onLogin = _ref.onLogin,
    onLogout = _ref.onLogout,
    onCreateAccount = _ref.onCreateAccount;
  return /*#__PURE__*/ React__default['default'].createElement(
    'article',
    null,
    /*#__PURE__*/ React__default['default'].createElement(Header, {
      user: user,
      onLogin: onLogin,
      onLogout: onLogout,
      onCreateAccount: onCreateAccount
    }),
    /*#__PURE__*/ React__default['default'].createElement(
      'section',
      null,
      /*#__PURE__*/ React__default['default'].createElement(
        'h2',
        null,
        'Pages in Storybook'
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'p',
        null,
        'We recommend building UIs with a',
        ' ',
        /*#__PURE__*/ React__default['default'].createElement(
          'a',
          {
            href: 'https://componentdriven.org',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'strong',
            null,
            'component-driven'
          )
        ),
        ' ',
        'process starting with atomic components and ending with pages.'
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'p',
        null,
        'Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:'
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'ul',
        null,
        /*#__PURE__*/ React__default['default'].createElement(
          'li',
          null,
          'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'li',
          null,
          'Assemble data in the page component from your services. You can mock these services out using Storybook.'
        )
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'p',
        null,
        'Get a guided tutorial on component-driven development at',
        ' ',
        /*#__PURE__*/ React__default['default'].createElement(
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
        /*#__PURE__*/ React__default['default'].createElement(
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
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: 'tip-wrapper'
        },
        /*#__PURE__*/ React__default['default'].createElement(
          'span',
          {
            className: 'tip'
          },
          'Tip'
        ),
        ' Adjust the width of the canvas with the',
        ' ',
        /*#__PURE__*/ React__default['default'].createElement(
          'svg',
          {
            width: '10',
            height: '10',
            viewBox: '0 0 12 12',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'g',
            {
              fill: 'none',
              fillRule: 'evenodd'
            },
            /*#__PURE__*/ React__default['default'].createElement('path', {
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
  user: PropTypes__default['default'].shape({}),
  onLogin: PropTypes__default['default'].func.isRequired,
  onLogout: PropTypes__default['default'].func.isRequired,
  onCreateAccount: PropTypes__default['default'].func.isRequired
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
  return /*#__PURE__*/ React__namespace.createElement(
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
      (_path = /*#__PURE__*/ React__namespace.createElement('path', {
        d: 'M15.663 9.438 5.6 1.578a.178.178 0 0 0-.287.141v1.726c0 .11.05.214.136.281L13.484 10 5.45 16.276a.354.354 0 0 0-.136.281v1.726c0 .15.171.232.287.14l10.063-7.859a.711.711 0 0 0 0-1.125Z'
      }))
  );
};

var _excluded$9 = ['label', 'fontColor', 'arrowColor', 'arrowCircleBackground'];
/**
 * Primary UI component for user interaction
 */

var GoFrontButton = function GoFrontButton(_ref) {
  var label = _ref.label,
    fontColor = _ref.fontColor,
    arrowColor = _ref.arrowColor,
    arrowCircleBackground = _ref.arrowCircleBackground,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$9);

  // const mode = primary
  //   ? 'storybook-button--primary'
  //   : 'storybook-button--secondary';
  return /*#__PURE__*/ React__default['default'].createElement(
    React__default['default'].Fragment,
    null,
    /*#__PURE__*/ React__default['default'].createElement(
      'button',
      _extends__default['default'](
        {
          className: [
            'GoFrontButton',
            'GoFrontButton--medium',
            'GoFrontButton--font-'.concat(fontColor)
          ].join(' ')
        },
        props
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'span',
        null,
        label
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          style: {
            marginLeft: '11px'
          },
          className: arrowCircleBackground ? 'GoFrontButton--circle' : ''
        },
        /*#__PURE__*/ React__default['default'].createElement(SvgGoFrontArrow, {
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
  label: PropTypes__default['default'].string.isRequired,

  /**
   * Optional click handler
   */
  onClick: PropTypes__default['default'].func,

  /**
   * 폰트의 컬러를 변경할수 있습니다. 기본은 white 입니다,
   */
  fontColor: PropTypes__default['default'].oneOf(['white', 'gray']),

  /**
   * 화살표의 색을 변경할수 있습니다. 기본은 white 입니다,
   */
  arrowColor: PropTypes__default['default'].oneOf(['white', 'yellow', 'gray']),

  /**
   * 화살표 배경에 원을 지정할 수 있습니다. 기본은 true 입니다,
   */
  arrowCircleBackground: PropTypes__default['default'].bool
};
GoFrontButton.defaultProps = {
  onClick: undefined,
  label: 'label을 입력해 주세요.',
  arrowColor: 'white',
  arrowCircleBackground: true,
  fontColor: 'white'
};

var _excluded$8 = ['children'];
var TicketBody = function TicketBody(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$8);

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    _extends__default['default'](
      {
        className: 'TicketBody'
      },
      props
    ),
    children
  );
};
TicketBody.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes__default['default'].node
};

var _excluded$7 = ['children'];
var TicketTop = function TicketTop(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$7);

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    _extends__default['default'](
      {
        className: 'TicketTop'
      },
      props
    ),
    children
  );
};
TicketTop.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes__default['default'].node
};

var _excluded$6 = ['children'];
/**
 * Primary UI component for user interaction
 */

var TicketWrapContainer = function TicketWrapContainer(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$6);

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    _extends__default['default'](
      {
        className: 'Ticket-Container-Wrap'
      },
      props
    ),
    children
  );
};
TicketWrapContainer.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes__default['default'].node
}; // TicketContainer.defaultProps = {
//   children: [<TicketTop />]
// };

var _excluded$5 = ['children'];
var TicketBodyHeader = function TicketBodyHeader(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$5);

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    _extends__default['default'](
      {
        className: 'TicketBodyHeader'
      },
      props
    ),
    children
  );
};
TicketBodyHeader.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes__default['default'].node
};

var _excluded$4 = ['children'];
var InfoLayout = function InfoLayout(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$4);

  // (제목+설명) + 내용(티켓리스트)
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    _extends__default['default'](
      {
        className: 'vertical-grid InfoLayout'
      },
      props
    ),
    children
  );
};
InfoLayout.propTypes = {
  /**
   * children components need
   */
  children: PropTypes__default['default'].oneOfType([
    PropTypes__default['default'].arrayOf(
      PropTypes__default['default'].shape({
        type: PropTypes__default['default'].oneOf([
          TicketBody,
          TicketBodyHeader
        ])
      })
    ) // array of fields
  ]).isRequired
};

var _excluded$3 = ['children'];
var TicketBottom = function TicketBottom(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$3);

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    _extends__default['default'](
      {
        className: 'TicketBottom'
      },
      props
    ),
    children
  );
};
TicketBottom.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes__default['default'].node
};

var _excluded$2 = ['children'];
var ProgressLayout = function ProgressLayout(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$2);

  // (제목+설명) + 내용(input 혹은 제목:ticketing-01, list-01) + 하단(다음으로버튼)
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    _extends__default['default'](
      {
        className: 'vertical-grid ProgressLayout'
      },
      props
    ),
    children
  );
};
ProgressLayout.propTypes = {
  /**
   * children components need
   */
  children: PropTypes__default['default'].oneOfType([
    PropTypes__default['default'].arrayOf(
      PropTypes__default['default'].shape({
        type: PropTypes__default['default'].oneOf([
          TicketBody,
          TicketBodyHeader,
          TicketBottom
        ])
      })
    )
  ]).isRequired
};

var _excluded$1 = ['children'];
var TicketLayout = function TicketLayout(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$1);

  // 상단(뒤로가기버튼) + 티켓
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    _extends__default['default'](
      {
        className: 'vertical-grid TicketLayout'
      },
      props
    ),
    children
  );
};
TicketLayout.propTypes = {
  /**
   * children components need
   */
  children: PropTypes__default['default'].oneOfType([
    PropTypes__default['default'].shape({
      type: PropTypes__default['default'].oneOf([TicketBody])
    })
  ]).isRequired
};

var _excluded = ['TopElement', 'children'];
/**
 * Primary UI component for user interaction
 */

var TicketContainer = function TicketContainer(_ref) {
  var TopElement = _ref.TopElement,
    children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded);

  console.log(children);
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    _extends__default['default'](
      {
        className: 'Ticket-Container'
      },
      props
    ),
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: 'Ticket-Inner-Container'
      },
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: 'Ticket-Inner-Top'
        },
        TopElement
          ? TopElement
          : /*#__PURE__*/ React__default['default'].createElement(
              TopElement,
              null
            )
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: 'Ticket-Inner-Content'
        },
        children
      )
    )
  );
};
TicketContainer.propTypes = {
  /**
   * children components need
   */
  children: PropTypes__default['default'].oneOfType([
    // PropTypes.arrayOf(
    //   PropTypes.shape({
    //     type: PropTypes.oneOf([TicketLayout, ProgressLayout, InfoLayout])
    //   })
    // ), // array of fields
    PropTypes__default['default'].shape({
      type: PropTypes__default['default'].oneOf([
        TicketLayout,
        ProgressLayout,
        InfoLayout
      ])
    })
  ]).isRequired,
  TopElement: PropTypes__default['default'].oneOfType([
    PropTypes__default['default'].shape({
      type: TicketTop
    })
  ])
};
TicketContainer.defaultProps = {
  TopElement: /*#__PURE__*/ React__default['default'].createElement(
    TicketTop,
    null
  )
};

exports.Button = Button;
exports.GoBackButton = GoBackButton;
exports.GoFrontButton = GoFrontButton;
exports.Header = Header;
exports.InfoLayout = InfoLayout;
exports.Page = Page;
exports.ProgressLayout = ProgressLayout;
exports.TicketBody = TicketBody;
exports.TicketBodyHeader = TicketBodyHeader;
exports.TicketBottom = TicketBottom;
exports.TicketContainer = TicketContainer;
exports.TicketLayout = TicketLayout;
exports.TicketTop = TicketTop;
exports.TicketWrapContainer = TicketWrapContainer;
