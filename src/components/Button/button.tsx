import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";
// button 需要对常量设置  size type

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  className?: string;
  /**设置Button 的 尺寸 */
  size?: ButtonSize;
  /**设置Button 的 类型 */
  btnType?: ButtonType;
  /**设置Button 的 禁用 */
  disabled?: boolean;
  children: React.ReactNode;
  href?: string;
}

// 创建类型别名 获取 button 上面的原生属性 和自定义属性的联合类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
// a标签上的属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

//   Partial 可以把属性都设置成可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 这是我们的第一个 Button 组件
 * ## Button header
 * ~~~js
 * import { Button } from 'vikingship
 * ~~~
 */

export const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props;

  // btn btn-lg btn-primary 添加类名
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button disabled={disabled} className={classes} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

export default Button;
