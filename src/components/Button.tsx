import React from 'react';

type Props = {
    name: string,
    type: 'submit' | 'reset' | 'button' | undefined;
}

const Button = (props: Props) => {
    return (
        <>
            <button type={props.type} className='plasmo-p-2 plasmo-w-[8rem] plasmo-rounded-md plasmo-bg-green-200 hover:plasmo-bg-green-300 plasmo-text-black plasmo-font-bold plasmo-border-2 plasmo-border-green-600'>{props.name}</button>
        </>
    )
}

export default Button