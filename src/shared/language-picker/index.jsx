import React, {useState} from 'react'
import Select from '../uikit/Select'

const languages = [
    {name: 'United States', value: 'EN'},
    {name: 'Netherlands', value: 'NL'},
    {name: 'Беларусь', value: 'BE'},
    {name: 'Россия', value: 'RU'},
    {name: 'Казахстан', value: 'KZ'},
    {name: 'Türkiye', value: 'TR'},
]

const LanguagePicker = () => {
    const [language, setLanguage] = useState(languages[3]);
    return (
        <div>
            <Select
                name='language-picker'
                value={language.short}
                onSelect={setLanguage}
                defaultValue={languages[3]}
                options={languages}
            />
        </div>
    )
}

export default LanguagePicker