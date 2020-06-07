import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
};

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
);

addDecorator(withInfo);
addDecorator(storyWrapper);
addParameters({
  info: {
    inline: true,
    header: false,
  },
});
