"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _PopupMixin = _interopRequireDefault(require("./PopupMixin"));

var _Modal = _interopRequireDefault(require("rmc-dialog/lib/Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getModal = function getModal(props, visible, _ref) {
  var getContent = _ref.getContent,
      hide = _ref.hide,
      onDismiss = _ref.onDismiss,
      onOk = _ref.onOk;
  var styles = props.styles,
      title = props.title,
      okText = props.okText,
      dismissText = props.dismissText;
  var titleEl = typeof title === 'string' ? /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [styles.title]
  }, title) : title;
  var okEl = typeof okText === 'string' ? /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [styles.actionText, styles.okText]
  }, okText) : okText;
  var dismissEl = typeof dismissText === 'string' ? /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [styles.actionText, styles.dismissText]
  }, dismissText) : dismissText;
  return /*#__PURE__*/React.createElement(_Modal["default"], {
    animationType: "slide-up",
    wrapStyle: styles.modal,
    visible: visible,
    onClose: hide
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.header]
  }, /*#__PURE__*/React.createElement(_reactNative.TouchableHighlight, {
    onPress: onDismiss,
    style: [styles.headerItem],
    activeOpacity: props.actionTextActiveOpacity,
    underlayColor: props.actionTextUnderlayColor
  }, dismissEl), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.headerItem]
  }, titleEl), /*#__PURE__*/React.createElement(_reactNative.TouchableHighlight, {
    onPress: onOk,
    style: [styles.headerItem],
    activeOpacity: props.actionTextActiveOpacity,
    underlayColor: props.actionTextUnderlayColor
  }, okEl)), getContent());
};

var _default = (0, _PopupMixin["default"])(getModal, {
  actionTextUnderlayColor: '#ddd',
  actionTextActiveOpacity: 1,
  triggerType: 'onPress',
  styles: {},
  WrapComponent: _reactNative.View
});

exports["default"] = _default;