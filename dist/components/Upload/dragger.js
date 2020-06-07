import React, { useState } from "react";
import classNames from "classnames";
export var Dragger = function (props) {
    var onFile = props.onFile, children = props.children;
    var _a = useState(false), dragOver = _a[0], setGragOver = _a[1];
    var klass = classNames("viking-uploader-dragger", {
        "is-dragover": dragOver,
    });
    var handleDrop = function (e) {
        e.preventDefault();
        setGragOver(false);
        onFile(e.dataTransfer.files);
    };
    var handleDrag = function (e, over) {
        e.preventDefault();
        setGragOver(over);
    };
    return (React.createElement("div", { className: klass, onDragOver: function (e) { return handleDrag(e, true); }, onDragLeave: function (e) { return handleDrag(e, false); }, onDrop: handleDrop }, children));
};
export default Dragger;
