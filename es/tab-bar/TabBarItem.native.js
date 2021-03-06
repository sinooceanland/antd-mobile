import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';

var TabBarItem = function (_React$Component) {
    _inherits(TabBarItem, _React$Component);

    function TabBarItem() {
        _classCallCheck(this, TabBarItem);

        return _possibleConstructorReturn(this, (TabBarItem.__proto__ || Object.getPrototypeOf(TabBarItem)).apply(this, arguments));
    }

    _createClass(TabBarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                selected = _props.selected,
                tintColor = _props.tintColor,
                unselectedTintColor = _props.unselectedTintColor,
                icon = _props.icon,
                selectedIcon = _props.selectedIcon,
                onPress = _props.onPress,
                badge = _props.badge,
                styles = _props.styles,
                iconStyle = _props.iconStyle;

            var itemSelectedStyle = selected ? styles.barItemSelected : null;
            var badgeDom = badge ? React.createElement(
                View,
                { style: [styles.badge] },
                React.createElement(
                    Text,
                    { style: [styles.badgeText] },
                    badge
                )
            ) : null;
            // icon
            var source = selected && selectedIcon !== undefined ? selectedIcon : icon !== undefined ? icon : null;
            return React.createElement(
                TouchableWithoutFeedback,
                { onPress: onPress },
                React.createElement(
                    View,
                    { style: [styles.barItem, itemSelectedStyle] },
                    React.createElement(
                        View,
                        null,
                        source === null ? null :
                        // tslint:disable-next-line:jsx-no-multiline-js
                        React.createElement(Image, { source: source, style: [styles.barIcon, iconStyle] }),
                        badgeDom
                    ),
                    React.createElement(
                        Text
                        // tslint:disable-next-line:jsx-no-multiline-js
                        ,
                        { style: [styles.barItemTitle, { color: selected ? tintColor : unselectedTintColor }] },
                        title
                    )
                )
            );
        }
    }]);

    return TabBarItem;
}(React.Component);

export default TabBarItem;

TabBarItem.defaultProps = {
    onPress: function onPress() {}
};