import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
export declare type ButtonSize = "lg" | "sm";
export declare type ButtonType = "primary" | "default" | "danger" | "link";
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
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 这是我们的第一个 Button 组件
 * ## Button header
 * ~~~js
 * import { Button } from 'vikingship
 * ~~~
 */
export declare const Button: FC<ButtonProps>;
export default Button;
