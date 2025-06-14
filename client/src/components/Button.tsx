import React from "react";
import clsx from "clsx";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    loader?: boolean;
    disabled?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
    size?: "sm" | "md" | "lg";
    radius?: "xs" |"sm" | "md" | "lg" | "full";
}

const baseStyles = "rounded font-medium focus:outline-none transition-colors duration-200";

const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
};

const radiusStyles = {
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    "full": "rounded-full",
};

const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-600 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
};

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    loader = false,
    disabled = false,
    className = "",
    type = "button",
    variant = "primary",
    size = "md",
    radius = "md",
}) => {
    const isDisabled = disabled || loader;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={clsx(
                baseStyles,
                variantStyles[variant],
                sizeStyles[size],
                radiusStyles[radius],
                isDisabled && "opacity-50 cursor-not-allowed",
                className
            )}
        >
            {loader ? (
                <span className="flex items-center gap-2">
                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                    Loading...
                </span>
            ) : (
                children
            )}
        </button>
    );
};
