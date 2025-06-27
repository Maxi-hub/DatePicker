import type { InputHTMLAttributes } from "react";

interface FieldTextProps extends InputHTMLAttributes<HTMLInputElement> {
    controlOnly: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export const FieldText: React.FC<FieldTextProps> = ({ onChange, value, ...props }) => {
    return (
        <div>
            <input
                {...props}
                type={value}
                onChange={onChange}
            />
        </div>
    )
}
