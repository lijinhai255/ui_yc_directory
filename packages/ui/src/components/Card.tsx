import React from 'react';

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

export const Card: React.FC<CardProps> = ({
  title,
  children,
  footer,
  shadow = 'md',
  className = '',
}) => {
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  };

  return (
    <div className={`bg-white rounded-lg border border-secondary-200 overflow-hidden ${shadowClasses[shadow]} ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-secondary-200">
          <h3 className="text-lg font-medium text-secondary-900">{title}</h3>
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
      {footer && (
        <div className="px-6 py-4 bg-secondary-50 border-t border-secondary-200">
          {footer}
        </div>
      )}
    </div>
  );
};