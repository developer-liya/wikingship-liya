import React, { FC, useState, DragEvent } from "react";

import classNames from "classnames";

interface DraggerProps {
  onFile: (files: FileList) => void;
}

export const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props;
  const [dragOver, setGragOver] = useState(false);
  const klass = classNames("viking-uploader-dragger", {
    "is-dragover": dragOver,
  });

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setGragOver(false);
    onFile(e.dataTransfer.files);
  };
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setGragOver(over);
  };
  return (
    <div
      className={klass}
      onDragOver={(e) => handleDrag(e, true)}
      onDragLeave={(e) => handleDrag(e, false)}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default Dragger;
