import { default as React } from 'react';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "suffix"> {
    /**
     * 输入框标签
     */
    label?: string;
    /**
     * 帮助文本
     */
    helpText?: string;
    /**
     * 错误信息
     */
    error?: string;
    /**
     * 输入框大小
     */
    size?: "sm" | "md" | "lg";
    /**
     * 前缀图标或元素
     */
    prefix?: React.ReactNode;
    /**
     * 后缀图标或元素
     */
    suffix?: React.ReactNode;
    /**
     * 是否为全宽
     */
    fullWidth?: boolean;
}
export declare const Input: React.FC<InputProps>;
//# sourceMappingURL=Input.d.ts.map