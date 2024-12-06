import * as React from 'react';

/**
 * Interface extending HTML input props to include custom properties
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string; // Optional placeholder text
  icon?: React.ReactNode; // Optional icon element to display
}

/**
 * A reusable input component that supports an optional icon and placeholder
 * @param placeholder - Text to display when input is empty
 * @param icon - React element to display as an icon
 * @param props - Additional HTML input attributes
 */
const Input: React.FC<InputProps> = ({ placeholder = '', icon, ...props }) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full rounded-md border border-gray-200 px-4 py-2 pl-10 text-lg text-gray-600 outline-none focus:border-primary"
        placeholder={placeholder}
        {...props}
      />
      {/* Render icon container if icon prop is provided */}
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
