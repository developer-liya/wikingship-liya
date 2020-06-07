import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <>
        <h1>欢迎来到 vikingship-liya 组件库</h1>
        <p>vikingship-liya 是react 组件库，从零到一让大家去学习</p>
        <h3>安装试试</h3>
        <code>npm install vikingship-liya --save</code>
      </>
    );
  },
  { info: { disable: true } }
);
