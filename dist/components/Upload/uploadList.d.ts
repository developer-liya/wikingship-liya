import { FC } from "react";
import { UploadFile } from "./upload";
interface uploadListProps {
    fileList: UploadFile[];
    onRemove?: (file: UploadFile) => void;
}
export declare const UploadList: FC<uploadListProps>;
export default UploadList;
