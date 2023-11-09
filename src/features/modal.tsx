import React from 'react'
import { useChat } from 'ai/react'
import Button from '~components/Button';

const Modal = () => {
    const { messages, input, handleInputChange, handleSubmit, error } = useChat({
        api: 'http://localhost:3000/api/chat'
    });

    return (
        <>
            <div className="modal">
                <div className=''>
                    <div className='plasmo-border-2 plasmo-border-slate-500 plasmo-relative plasmo-w-[500px] plasmo-h-[500px]'>
                        <div className='plasmo-h-[400px] plasmo-overflow-auto plasmo-p-8'>
                            {
                                messages.length > 0
                                    ? messages.map(text => (
                                        <div key={text.id} className="plasmo-leading-[0.8rem] plasmo-py-2">
                                            {text.role === 'assistant' && text.content}
                                        </div>
                                    ))
                                    : null
                            }
                        </div>
                        {error && <div>Error: {error.message}</div>}
                        <form className='plasmo-absolute plasmo-bottom-4 plasmo-w-full plasmo-flex plasmo-gap-2 plasmo-justify-between plasmo-items-center plasmo-px-4' onSubmit={handleSubmit}>
                            <input type="text" name="message" value={input} id="message" placeholder='Enter Your text here..' className='plasmo-w-full plasmo-p-2 plasmo-rounded-md plasmo-border-2 plasmo-border-slate-400' onChange={handleInputChange} />
                            <Button name='Generate' type='submit' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Modal);