'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _persian = require('../utils/persian');

var _assets = require('../utils/assets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heading = function (_Component) {
  _inherits(Heading, _Component);

  function Heading() {
    _classCallCheck(this, Heading);

    return _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).apply(this, arguments));
  }

  _createClass(Heading, [{
    key: 'handleMonthClick',
    value: function handleMonthClick(event) {
      var setCalendarMode = this.context.setCalendarMode;

      event.preventDefault();
      setCalendarMode('monthSelector');
    }
  }, {
    key: 'render',
    value: function render() {
      var _context = this.context,
          nextMonth = _context.nextMonth,
          prevMonth = _context.prevMonth;
      var _props = this.props,
          month = _props.month,
          styles = _props.styles;


      return _react2.default.createElement(
        'div',
        { className: styles.heading },
        _react2.default.createElement(
          'button',
          { className: styles.title, onClick: this.handleMonthClick.bind(this) },
          (0, _persian.persianNumber)(month.format('jMMMM jYYYY'))
        ),
        _react2.default.createElement('button', {
          type: 'button',
          title: '\u0645\u0627\u0647 \u0642\u0628\u0644',
          className: styles.prev,
          onClick: prevMonth,
          dangerouslySetInnerHTML: _assets.rightArrow
        }),
        _react2.default.createElement('button', {
          type: 'button',
          title: '\u0645\u0627\u0647 \u0628\u0639\u062F',
          className: styles.next,
          onClick: nextMonth,
          dangerouslySetInnerHTML: _assets.leftArrow
        })
      );
    }
  }]);

  return Heading;
}(_react.Component);

Heading.propTypes = {
  month: _propTypes2.default.object.isRequired
};
Heading.contextTypes = {
  styles: _propTypes2.default.object,
  nextMonth: _propTypes2.default.func.isRequired,
  prevMonth: _propTypes2.default.func.isRequired,
  setCalendarMode: _propTypes2.default.func.isRequired
};
exports.default = Heading;