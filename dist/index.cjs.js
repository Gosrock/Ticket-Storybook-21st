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
var React__namespace = /*#__PURE__*/ _interopNamespace(React);
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/ _interopDefaultLegacy(PropTypes);

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
 * 뒤로가기 버튼
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
   * 라벨 , 안의 텍스트를 변경할 수 있습니다.
   */
  label: PropTypes__default['default'].string.isRequired,

  /**
   * 클릭 이벤트 콜백 함수
   */
  onClick: PropTypes__default['default'].func
};
GoBackButton.defaultProps = {
  onClick: undefined,
  label: '뒤로가기'
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
 * 다음으로 버튼
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
   * 라벨 , 안의 텍스트를 변경할 수 있습니다.
   */
  label: PropTypes__default['default'].string.isRequired,

  /**
   * 클릭 이벤트 콜백 함수
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
/**
 * 레이아웃 엘리먼트중에 바디 영역에 해당하는 컴포넌트입니다.
 */

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
/**
 * 레이아웃 엘리먼트중에 뒤로가기 버튼 등 맨 윗 영역에 해당하는 컴포넌트입니다.
 */

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
 * 레이아웃 엘리먼트중에 제목 영역에 해당하는 컴포넌트입니다.
 */

var TicketBodyHeader = function TicketBodyHeader(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$6);

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

var _excluded$5 = ['children'];
/**
 * 내 티켓 리스트 정보를 담는 인포 레이아웃입니다.
 * 제목과 설명을 담는
 * https://www.figma.com/file/J6HVLxWGuCFgAQUCdWBUsT/%EA%B3%A0%EC%8A%A4%EB%9D%BD-%ED%8B%B0%EC%BC%93%EC%98%88%EB%A7%A4?node-id=343%3A13341
 * 자식 컴포넌트로 TicketBody,TicketBodyHeader 를 필요로 합니다.
 */

var InfoLayout = function InfoLayout(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$5);

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
   * TicketBody, TicketBodyHeader 를 자식 컴포넌트로 요구합니다.
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

var _excluded$4 = ['children'];
/**
 * 레이아웃 엘리먼트중에 다음으로 버튼 등 아래 영역에 해당하는 컴포넌트입니다.
 */

var TicketBottom = function TicketBottom(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$4);

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

var _excluded$3 = ['children'];
/**
 * 진행 과정 (티켓 발급 , 인증과정등) 제목, 내용 , 다음버튼을 필요로하는 레이아웃 입니다.
 * https://www.figma.com/file/J6HVLxWGuCFgAQUCdWBUsT/%EA%B3%A0%EC%8A%A4%EB%9D%BD-%ED%8B%B0%EC%BC%93%EC%98%88%EB%A7%A4?node-id=680%3A13148
 * 자식 컴포넌트로 TicketBody, TicketBodyHeader, TicketBottom 를 필요로 합니다.
 */

var ProgressLayout = function ProgressLayout(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$3);

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
   * TicketBody, TicketBodyHeader, TicketBottom 를 자식 컴포넌트로 요구합니다.
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

var _excluded$2 = ['children'];
/**
 * 티켓 정보 출력을 위해 내용을 필요로하는 레이아웃 입니다.
 * https://www.figma.com/file/J6HVLxWGuCFgAQUCdWBUsT/%EA%B3%A0%EC%8A%A4%EB%9D%BD-%ED%8B%B0%EC%BC%93%EC%98%88%EB%A7%A4?node-id=343%3A13330
 * 자식 컴포넌트로 TicketBody 를 필요로 합니다.
 */

var TicketLayout = function TicketLayout(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$2);

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
   * TicketBody 컴포넌트 하나만을 자식 컴포넌트로 필요로 합니다.
   */
  children: PropTypes__default['default'].oneOfType([
    PropTypes__default['default'].shape({
      type: PropTypes__default['default'].oneOf([TicketBody])
    })
  ]).isRequired
};

var _excluded$1 = ['TopElement', 'children'];
/**
 * 티켓 발급,인증 과정에서 TicketWarpContainer의 자식 컴포넌트로 들어갑니다
 * 상단 뒤로가기버튼 영역과 , 그 영역을 제외한 나머지 영역으로 나뉘어져 있습니다
 * grid : 1fr 7fr 입니다.
 * TopElemnt prop으로 TicketTop 컴포넌트를 받으며
 * children으로 TicketLayout, ProgressLayout, InfoLayout 중 하나의 레이아웃을 자식으로 받습니다.
 */

var TicketContainer = function TicketContainer(_ref) {
  var TopElement = _ref.TopElement,
    children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded$1);

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
   * TicketLayout, ProgressLayout, InfoLayout 중 하나의 레이아웃을 인자로 받습니다.
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

  /**
   * TicketTop 컴포넌트를 인자로 받습니다.
   */
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

var _excluded = ['children'];
/**
 *  티켓 발급 , 확인 , 인증 과정에서 TicketContainer 를 감싸는 컨테이너 입니다
 *  모바일 화면에 맞게 height 를 설정한 컴포넌트 입니다.
 */

var TicketWrapContainer = function TicketWrapContainer(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties__default['default'](_ref, _excluded);

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
   *  자식 컴포넌트로 TicketContainer를 필요로 합니다.
   */
  children: PropTypes__default['default'].oneOfType([
    PropTypes__default['default'].shape({
      type: PropTypes__default['default'].oneOf([TicketContainer])
    })
  ]).isRequired
};

exports.GoBackButton = GoBackButton;
exports.GoFrontButton = GoFrontButton;
exports.InfoLayout = InfoLayout;
exports.ProgressLayout = ProgressLayout;
exports.TicketBody = TicketBody;
exports.TicketBodyHeader = TicketBodyHeader;
exports.TicketBottom = TicketBottom;
exports.TicketContainer = TicketContainer;
exports.TicketLayout = TicketLayout;
exports.TicketTop = TicketTop;
exports.TicketWrapContainer = TicketWrapContainer;
