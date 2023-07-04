import React, {useState} from 'react'

import Select from '../uikit/select'

import {ReactComponent as ENIcon} from './svg/Icon_US.svg';
import {ReactComponent as BYIcon} from './svg/Icon_BY.svg';
import {ReactComponent as KZIcon} from './svg/Icon_KZ.svg';
import {ReactComponent as NLIcon} from './svg/Icon_NL.svg';
import {ReactComponent as RUIcon} from './svg/Icon_RU.svg';
import {ReactComponent as TRIcon} from './svg/Icon_TR.svg';

const languages = [
    {name: 'United States', value: 'En', icon: <ENIcon width={20} height={20} />},
    {name: 'Netherlands', value: 'Nl', icon: <NLIcon width={20} height={20} />},
    {name: 'Беларусь', value: 'Be', icon: <BYIcon width={20} height={20} />},
    {name: 'Россия', value: 'Ru', icon: <RUIcon width={20} height={20} />},
    {name: 'Казахстан', value: 'Kz', icon: <KZIcon width={20} height={20} />},
    {name: 'Türkiye', value: 'Tr', icon: <TRIcon width={20} height={20} />},
]

const LanguagePicker = () => {
    const [language, setLanguage] = useState(languages[3]);
    return (
        <Select
            value={language}
            options={languages}
            onChange={setLanguage}
        />
    )
}

export default LanguagePicker