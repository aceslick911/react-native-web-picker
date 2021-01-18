"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _rmcDialog = _interopRequireDefault(require("rmc-dialog"));

var _PopupMixin = _interopRequireDefault(require("./PopupMixin"));

var _rmcFeedback = _interopRequireDefault(require("rmc-feedback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getModal = function getModal(props, visible, _ref) {
  var getContent = _ref.getContent,
      hide = _ref.hide,
      onDismiss = _ref.onDismiss,
      onOk = _ref.onOk;

  if (!visible) {
    return null;
  }

  var prefixCls = props.prefixCls;
  return /*#__PURE__*/React.createElement(_rmcDialog["default"], {
    prefixCls: "".concat(prefixCls),
    className: props.className || '',
    visible: true,
    closable: false,
    transitionName: props.transitionName || props.popupTransitionName,
    maskTransitionName: props.maskTransitionName,
    onClose: hide,
    style: props.style,
    maskClosable: false
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-header")
  }, /*#__PURE__*/React.createElement(_rmcFeedback["default"], {
    activeClassName: "".concat(prefixCls, "-item-active")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-header-left"),
    onClick: onDismiss
  }, props.dismissText)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-title")
  }, props.title), /*#__PURE__*/React.createElement(_rmcFeedback["default"], {
    activeClassName: "".concat(prefixCls, "-item-active")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-header-right"),
    onClick: onOk
  }, props.okText))), getContent()));
};

var _default = (0, _PopupMixin["default"])(getModal, {
  prefixCls: 'rmc-picker-popup',
  WrapComponent: 'span',
  triggerType: 'onClick',
  pickerValueProp: 'selectedValue',
  pickerValueChangeProp: 'onValueChange'
});

exports["default"] = _default;