import React from "react";
var Progress = function (props) {
    var percent = props.percent, showText = props.showText, storkeHeight = props.storkeHeight, styles = props.styles, theme = props.theme;
    return (React.createElement("div", { className: "viking-progress-bar", style: styles },
        React.createElement("div", { className: "viking-progress-bar-outer", style: { height: storkeHeight + "px" } },
            React.createElement("div", { className: "viking-progress-bar-inner color-" + theme, style: { width: percent + "%" } }, showText && React.createElement("span", { className: "inner-text" }, percent + "%")))));
};
Progress.defaultProps = {
    storkeHeight: 15,
    showText: true,
    theme: "primary",
};
export default Progress;
