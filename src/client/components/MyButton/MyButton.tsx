import React from "react";

interface IMyButtonProps {
    text: string,
    onClick(): void,
}

const MyButton: React.FC<IMyButtonProps> = (props: IMyButtonProps) => {
    const { onClick, text } = props;

    return (<button
        onClick={() => onClick()}
    >
        {text}
    </button>);
}

export default MyButton;