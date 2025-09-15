import { default as React } from 'react';
export interface CardProps {
    /**
     * 卡片标题
     */
    title?: string;
    /**
     * 卡片内容
     */
    children: React.ReactNode;
    /**
     * 卡片底部内容
     */
    footer?: React.ReactNode;
    /**
     * 是否有阴影
     */
    shadow?: 'none' | 'sm' | 'md' | 'lg';
    /**
     * 自定义类名
     */
    className?: string;
}
export declare const Card: React.FC<CardProps>;
//# sourceMappingURL=Card.d.ts.map