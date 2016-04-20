'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  getDefaultProps: function getDefaultProps() {
    return {
      header: '',
      disableClose: false,
      closeModal: 0,
      handleClose: function handleClose() {}
    };
  },

  propTypes: {
    header: _react2.default.PropTypes.string,
    disableClose: _react2.default.PropTypes.bool,
    closeModal: _react2.default.PropTypes.number,
    handleClose: _react2.default.PropTypes.func
  },

  getInitialState: function getInitialState() {
    return {
      isShowing: false
    };
  },
  componentWillMount: function componentWillMount() {
    document.querySelector('html').style.overflow = 'hidden';
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    //for css animation, move to bottom of call stack
    setTimeout(function () {
      _this.setState({ isShowing: true });
    }, 0);
  },
  componentWillUnmount: function componentWillUnmount() {
    document.querySelector('html').style.overflow = 'auto';
  },
  componentWillUpdate: function componentWillUpdate(nextProps) {
    if (nextProps.closeModal === this.props.closeModal + 1) {
      this.performClose();
    }
  },
  close: function close(e) {
    e.stopPropagation();
    var classList = e.target.classList;

    var shouldClose = classList.contains('modal') || classList.contains('modal__close-icon');
    if (shouldClose && !this.props.disableClose) {
      this.performClose();
    }
  },
  performClose: function performClose() {
    var _this2 = this;

    this.setState({ isShowing: false });
    setTimeout(function () {
      if (typeof _this2.props.handleClose === 'function') {
        _this2.props.handleClose();
      }
    }, 300);
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('modal', { 'modal--showing': this.state.isShowing }), onClick: this.close },
      _react2.default.createElement(
        'div',
        { className: 'modal__content' },
        _react2.default.createElement(
          'div',
          { className: 'modal__header u-p-' },
          !this.props.disableClose ? _react2.default.createElement(
            'div',
            { className: 'modal__close' },
            _react2.default.createElement('i', { className: 'modal__close-icon icon-close', onClick: this.close })
          ) : null,
          _react2.default.createElement(
            'h3',
            { className: 'u-mv0' },
            this.props.header
          )
        ),
        this.props.children
      )
    );
  }
});
module.exports = exports['default'];
