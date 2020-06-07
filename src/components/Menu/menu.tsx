import React, { useState, createContext } from "react";

import classNames from "classnames";

import { MenuItemProps } from "./menuItem";

// 字符串字面量
type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectedIndex: string) => void;
// 定义 interface
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode; // 限制 mode 取值范围
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[]; // 默认展开
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

// 创建 MenuContext 用于传递给子组件
export const MenuContext = createContext<IMenuContext>({ index: "0" });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    children,
    style,
    onSelect,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);

  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  //  添加类名
  const classes = classNames("viking-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };

  // 渲染子组件方法  处理非 MenuItem 元素渲染
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;

      if (displayName === "MenuItem" || displayName === "SubMenu") {
        //   不直接返回 child 需要经过 react 处理
        return React.cloneElement(childElement, { index: index.toString() });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};

export default Menu;
