'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LinkItem = function LinkItem(_ref) {
  var to = _ref.to,
      title = _ref.title,
      restProps = _objectWithoutProperties(_ref, ['to', 'title']);

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'a',
      _extends({ href: '#' + to, className: 'c-links__item' }, restProps),
      title
    )
  );
};

LinkItem.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes2.default.string.isRequired,
  to: _propTypes2.default.string.isRequired
} : {};

var SkipLinks = function SkipLinks(_ref2) {
  var links = _ref2.links;

  var hasLinks = links && links.length;

  if (hasLinks) {
    return _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'nav',
        { className: 'c-links' },
        _react2.default.createElement(
          'div',
          { className: 'u-vs-hidden' },
          'Accessibility links'
        ),
        _react2.default.createElement(
          'ul',
          null,
          links.map(function (link) {
            return _react2.default.createElement(LinkItem, _extends({ key: link.title }, link));
          })
        )
      )
    );
  }

  return null;
};

SkipLinks.propTypes = process.env.NODE_ENV !== "production" ? {
  links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    to: _propTypes2.default.string.isRequired
  })).isRequired
} : {};

exports.default = SkipLinks;
module.exports = exports['default'];