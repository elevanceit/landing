'use client'

import React from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface ButtonProps {
    text?: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    icon?: StaticImageData;
    className?: string;
    rounded?: boolean;
    iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
    text = "",
    onClick,
    variant = 'primary',
    icon,
    className,
    rounded = true,
    iconPosition = 'left',
}) => {
    const baseStyles = "w-fit text-white font-semibold text-sm focus:outline-none flex items-center justify-center";
    const primaryStyles = "bg-primary-brown hover:bg-hover-brown py-3 px-8";
    const secondaryStyles = "bg-transparent border border-white hover:bg-hover-grey py-3 px-8";
    const iconStyles = "!py-2 !px-2";
    const roundedStyles = "rounded-full";
    const rectStyles = "rounded";

    const getStyles = () => {
        const variantStyles = variant === 'primary' ? primaryStyles : secondaryStyles;
        const shapeStyles = rounded ? roundedStyles : rectStyles;
        return `${baseStyles} ${!text ? iconStyles : ""} ${variantStyles} ${shapeStyles}`;
    };

    return (
        <button onClick={onClick} className={`${getStyles()} ${className}`}>
            {icon && text && iconPosition === 'left' && (
                <Image src={icon} alt="icon" width={20} height={20} className="mr-2" />
            )}
            {text}
            {icon && text && iconPosition === 'right' && (
                <Image src={icon} alt="icon" width={20} height={20} className="ml-2" />
            )}
            {icon && !text && (
                <Image src={icon} alt="icon" width={20} height={20} />
            )}
        </button>
    );
};

export default Button;
