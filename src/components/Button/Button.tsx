// Button.jsx

import React from 'react';
import './Button.css';

enum ButtonColor {
    Primary = 'primary',
    Secondary = 'secondary',
    Gray = 'gray',
    Destructive = 'destructive',
}

enum ButtonVariant {
    Filled = 'filled',
    Outlined = 'outlined',
    Text = 'text',
}

enum ButtonState {
    Default = 'default',
    Hover = 'hover',
    Focused = 'focused',
    Pressed = 'pressed',
    Disabled = 'disabled',
}

interface ButtonProps {
    label: string;
    color: ButtonColor;
    variant: ButtonVariant;
    state: ButtonState;
    size: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
    label,
    size,
    variant,
    color,
    state,
}: ButtonProps) => {
    const buttonClasses = [
        'button',
        `button-${size}`, // Apply the size class
        `button-${color}-${variant}-${state}`,
    ].join(' ');

    return (
        <button className={buttonClasses}>
            {label}
        </button>
    );
};

Button.defaultProps = {
    size: 'medium',
    variant: 'filled',
    state: 'default',
};

export default Button;
