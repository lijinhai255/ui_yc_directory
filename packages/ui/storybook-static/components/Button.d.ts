import { default as React } from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * 按钮变体
     */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    /**
     * 按钮大小
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * 是否为全宽按钮
     */
    fullWidth?: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 加载状态
     */
    loading?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map