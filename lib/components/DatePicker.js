'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outsideClickIgnoreClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _momentJalali = require('moment-jalali');

var _momentJalali2 = _interopRequireDefault(_momentJalali);

var _reactTether = require('react-tether');

var _reactTether2 = _interopRequireDefault(_reactTether);

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _DefaultStyles = require('./DefaultStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var outsideClickIgnoreClass = exports.outsideClickIgnoreClass = 'ignore--click--outside';

var DatePicker = function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false,
      momentValue: _this.props.defaultValue || null,
      inputValue: _this.props.defaultValue ? _this.props.defaultValue.format(_this.props.inputFormat) : ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePicker, [{
    key: 'setOpen',
    value: function setOpen(isOpen) {
      this.setState({ isOpen: isOpen });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps && nextProps.value !== this.props.value) {
        this.setMomentValue(nextProps.value);
      }
    }
  }, {
    key: 'setMomentValue',
    value: function setMomentValue(momentValue) {
      var inputFormat = this.props.inputFormat;


      if (this.props.onChange) {
        this.props.onChange(momentValue);
      }

      var inputValue = "";
      if (momentValue) inputValue = momentValue.format(inputFormat);
      this.setState({ momentValue: momentValue, inputValue: inputValue });
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.setOpen(true);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var _props = this.props,
          onBlur = _props.onBlur,
          inputFormat = _props.inputFormat;
      var _state = this.state,
          isOpen = _state.isOpen,
          momentValue = _state.momentValue;


      if (isOpen) {
        this.refs.input.focus();
      } else if (onBlur) {
        onBlur(event);
      }

      if (momentValue) {
        var inputValue = momentValue.format(inputFormat);
        this.setState({ inputValue: inputValue });
      }
    }
  }, {
    key: 'handleClickOutsideCalendar',
    value: function handleClickOutsideCalendar() {
      this.setOpen(false);
    }
  }, {
    key: 'handleSelectDay',
    value: function handleSelectDay(selectedDay) {
      var oldValue = this.state.momentValue;

      var momentValue = selectedDay.clone();

      if (oldValue) {
        momentValue = momentValue.set({
          hour: oldValue.hours(),
          minute: oldValue.minutes(),
          second: oldValue.seconds()
        });
      }

      this.setMomentValue(momentValue);
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var inputFormat = this.props.inputFormat;

      var inputValue = event.target.value;
      var momentValue = (0, _momentJalali2.default)(inputValue, inputFormat);

      if (momentValue.isValid()) {
        this.setState({ momentValue: momentValue });
      }

      this.setState({ inputValue: inputValue });
    }
  }, {
    key: 'handleInputClick',
    value: function handleInputClick() {
      if (!this.props.disabled) {
        this.setOpen(true);
      }
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _state2 = this.state,
          isOpen = _state2.isOpen,
          inputValue = _state2.inputValue;


      if (this.props.value) {
        var value = this.props.value;
        var inputFormat = this.props.inputFormat;
        inputValue = value.format(inputFormat);
      }

      var className = (0, _classnames3.default)(this.props.className, _defineProperty({}, outsideClickIgnoreClass, isOpen));

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', {
          className: className,
          type: 'text',
          ref: 'input',
          onFocus: this.handleFocus.bind(this),
          onBlur: this.handleBlur.bind(this),
          onChange: this.handleInputChange.bind(this),
          onClick: this.handleInputClick.bind(this),
          value: inputValue
        })
      );
    }
  }, {
    key: 'renderCalendar',
    value: function renderCalendar() {
      var momentValue = this.state.momentValue;
      var _props2 = this.props,
          TimePicker = _props2.timePickerComponent,
          onChange = _props2.onChange,
          min = _props2.min,
          max = _props2.max,
          defaultMonth = _props2.defaultMonth,
          calendarStyles = _props2.calendarStyles,
          calendarContainerProps = _props2.calendarContainerProps;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Calendar2.default,
          {
            min: min,
            max: max,
            selectedDay: momentValue,
            defaultMonth: defaultMonth,
            onSelect: this.handleSelectDay.bind(this),
            onClickOutside: this.handleClickOutsideCalendar.bind(this),
            outsideClickIgnoreClass: outsideClickIgnoreClass,
            styles: calendarStyles,
            containerProps: calendarContainerProps
          },
          TimePicker ? _react2.default.createElement(TimePicker, {
            min: min,
            max: max,
            momentValue: momentValue,
            setMomentValue: this.setMomentValue.bind(this)
          }) : null
        )
      );
    }
  }, {
    key: 'removeDate',
    value: function removeDate() {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange('');
      }
      this.setState({
        input: '',
        inputValue: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var isOpen = this.state.isOpen;


      return _react2.default.createElement(
        _reactTether2.default,
        { attachment: 'top center' },
        this.renderInput(),
        isOpen ? this.renderCalendar() : null
      );
    }
  }]);

  return DatePicker;
}(_react.Component);

DatePicker.propTypes = {
  value: _propTypes2.default.object,
  defaultValue: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  children: _propTypes2.default.node,
  min: _propTypes2.default.object,
  max: _propTypes2.default.object,
  defaultMonth: _propTypes2.default.object,
  inputFormat: _propTypes2.default.string,
  removable: _propTypes2.default.bool,
  timePickerComponent: _propTypes2.default.func,
  calendarStyles: _propTypes2.default.object,
  calendarContainerProps: _propTypes2.default.object
};
DatePicker.defaultProps = {
  inputFormat: 'jYYYY/jM/jD',
  calendarStyles: _DefaultStyles.defaultStyles,
  calendarContainerProps: {}
};
exports.default = DatePicker;