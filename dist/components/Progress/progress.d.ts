import React, { FC } from "react";
import { ThemeProps } from "../Icon/icon";
export interface ProgressProps {
    percent: number;
    storkeHeight?: number;
    showText?: boolean;
    styles?: React.CSSProperties;
    theme?: ThemeProps;
}
declare const Progress: FC<ProgressProps>;
export default Progress;
