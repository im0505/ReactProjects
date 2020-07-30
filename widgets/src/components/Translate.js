import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'

const options = [
    {
        label: 'Africaans',
        value: 'af'
    },
    {
        label: "Arabic",
        value: 'ar'
    },
    {
        label: "Hindi",
        value: 'hi'
    },
    {
        label: 'Japan',
        value: 'ja'
    },
    { label: 'Korean', value: 'ko' },
    { label: 'English', value: 'en' },]


const Translate = () => {
    const [lang, setLang] = useState(options[0])
    const [text, setText] = useState('')

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => { setText(e.target.value) }} />
                </div>
            </div>
            <Dropdown
                label={'select language'}
                options={options}
                selected={lang}
                onSelectedChange={setLang}
            />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={lang} />
        </div>
    );

}
export default Translate;