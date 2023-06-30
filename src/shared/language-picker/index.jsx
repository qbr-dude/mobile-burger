import React, {useState} from 'react'
import Select from '../uikit/Select'
import {ReactComponent as ENIcon} from './Icon_US.svg';
import {ReactComponent as BYIcon} from './Icon_BY.svg';
import {ReactComponent as KZIcon} from './Icon_KZ.svg';
import {ReactComponent as NLIcon} from './Icon_NL.svg';
import {ReactComponent as RUIcon} from './Icon_RU.svg';
import {ReactComponent as TRIcon} from './Icon_TR.svg';

const languages = [
    {name: 'United States', value: 'EN', icon: <ENIcon width={20} height={20} />},
    {name: 'Netherlands', value: 'NL', icon: <NLIcon width={20} height={20} />},
    {name: 'Беларусь', value: 'BE', icon: <BYIcon width={20} height={20} />},
    {name: 'Россия', value: 'RU', icon: <RUIcon width={20} height={20} />},
    {name: 'Казахстан', value: 'KZ', icon: <KZIcon width={20} height={20} />},
    {name: 'Türkiye', value: 'TR', icon: <TRIcon width={20} height={20} />},
]

const LanguagePicker = () => {
    const [language, setLanguage] = useState(languages[3]);
    console.log(language);
    return (
        <div>
            <Select
                defaultValue={languages[3]}
                options={languages}
                onChange={setLanguage}
            />
        </div>
    )
}

export default LanguagePicker