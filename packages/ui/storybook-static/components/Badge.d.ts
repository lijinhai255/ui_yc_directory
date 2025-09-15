import { default as React } from 'react';
export interface BadgeProps {
    /**
     * 徽章内容
     */
    children: React.ReactNode;
    /**
     * 徽章变体
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    /**
     * 徽章大小
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * 是否为圆形徽章
     */
    rounded?: boolean;
    /**
     * 自定义类名
     */
    className?: string;
}
export declare const Badge: React.FC<BadgeProps>;
//# sourceMappingURL=Badge.d.ts.map