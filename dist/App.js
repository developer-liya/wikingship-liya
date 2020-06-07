import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button/button";
import MenuItem from "./components/Menu/menuItem";
import Menu from "./components/Menu/menu";
import Icon from "./components/Icon/icon";
import SubMenu from "./components/Menu/subMenu";
import Transition from "./components/Transition/transition";
library.add(fas);
function App() {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Icon, { icon: "coffee", size: "10x", theme: "danger" }),
            React.createElement(Menu, { defaultIndex: "0", onSelect: function (index) {
                    alert(index);
                }, defaultOpenSubMenus: ["2"] },
                React.createElement(MenuItem, null, "cool link"),
                React.createElement(MenuItem, { disabled: true }, "cool link2"),
                React.createElement(SubMenu, { title: "dropdown" },
                    React.createElement(MenuItem, null, "dropdown 1"),
                    React.createElement(MenuItem, null, "dropdown 2")),
                React.createElement(MenuItem, null, " cool link3")),
            React.createElement(Button, { size: "lg", onClick: function () {
                    setShow(!show);
                } }, "toggle"),
            React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-left" },
                React.createElement("div", null,
                    React.createElement("p", null, "learn react"),
                    React.createElement("p", null, "learn react"),
                    React.createElement("p", null, "learn react"),
                    React.createElement("p", null, "learn react"),
                    React.createElement("p", null, "learn react"),
                    React.createElement("p", null, "learn react"),
                    React.createElement("p", null, "learn react"),
                    React.createElement("p", null, "learn react"),
                    React.createElement("p", null, "learn react"),
                    React.createElement("p", null, "learn react"))))));
}
export default App;
