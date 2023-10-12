import React from "react"

interface IMyInputProps {
    type?: string,
    ref: string,
    text: string
}

const MyInput: React.FC<IMyInputProps> = (props: IMyInputProps) => {
    const { type, text, ref } = props;

    return (
        <input
            type={type ? type : 'text'}
            placeholder={text}
            ref={ref}
        />
    )
}

export default MyInput;