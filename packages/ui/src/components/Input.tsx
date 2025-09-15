import React from "react";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "prefix" | "suffix"
  > {
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

export const Input: React.FC<InputProps> = ({
  label,
  helpText,
  error,
  size = "md",
  prefix,
  suffix,
  fullWidth = false,
  className = "",
  id,
  ...props
}) => {
  // 生成唯一ID
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-5 text-lg",
  };

  const baseClasses =
    "block border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors";
  const widthClass = fullWidth ? "w-full" : "";
  const stateClasses = error
    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
    : "border-secondary-300 text-secondary-900 placeholder-secondary-400";

  return (
    <div className={`${widthClass}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-secondary-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {prefix && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {prefix}
          </div>
        )}
        <input
          id={inputId}
          className={`
            ${baseClasses}
            ${sizeClasses[size]}
            ${stateClasses}
            ${prefix ? "pl-10" : ""}
            ${suffix ? "pr-10" : ""}
            ${widthClass}
            ${className}
          `}
          {...props}
        />
        {suffix && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {suffix}
          </div>
        )}
      </div>
      {helpText && !error && (
        <p className="mt-1 text-sm text-secondary-500">{helpText}</p>
      )}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
