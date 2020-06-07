import { ReactElement, InputHTMLAttributes, FC, ChangeEvent } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
declare type InputSize = "lg" | "sm";
export interface InputProps// omit 可以忽略泛型中的 属性
 extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: FC<InputProps>;
export default Input;
