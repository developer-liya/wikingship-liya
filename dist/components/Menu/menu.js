import React, { useState, createContext } from "react";
import classNames from "classnames";
// 创建 MenuContext 用于传递给子组件
export var MenuContext = createContext({ index: "0" });
var Menu = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, mode = props.mode, children = props.children, style = props.style, onSelect = props.onSelect, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _a = useState(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    //  添加类名
    var classes = classNames("viking-menu", className, {
        "menu-vertical": mode === "vertical",
        "menu-horizontal": mode !== "vertical",
    });
    var passedContext = {
        index: currentActive ? currentActive : "0",
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus,
    };
    // 渲染子组件方法  处理非 MenuItem 元素渲染
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                //   不直接返回 child 需要经过 react 处理
                return React.cloneElement(childElement, { index: index.toString() });
            }
            else {
                console.error("Warning: Menu has a child which is not a MenuItem component");
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal",
    defaultOpenSubMenus: [],
};
export default Menu;
