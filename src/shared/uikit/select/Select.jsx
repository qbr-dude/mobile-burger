import classNames from 'classnames'
import React, {useRef, useState} from 'react'

import {useClickOutside} from '../../utils/useClickOutside';

import {ReactComponent as CheckIcon} from './check.svg';
import {ReactComponent as UpIcon} from './up-arrow.svg';
import {ReactComponent as DownIcon} from './down-arrow.svg';

const Select = ({
    value,
    options,
    onChange,
}) => {
    const [isActive, setIsActive] = useState(false);

    const ref = useRef(null);
    useClickOutside(ref, () => setIsActive(false));

    const handleChange = (value) => {
        setIsActive(false);
        onChange(value);
    };
    return (
        <div className='relative' ref={ref}>
            <div
                className={classNames(
                    'py-2 px-3 rounded-sm border-blue-100 border',
                    {'bg-blue-100 border-blue-200': isActive}
                )}
                onClick={() => setIsActive(!isActive)}
            >
                <div className='flex items-center'>
                    {value.icon && <div className='pr-2'>
                        {value.icon}
                    </div>}
                    <span className='font-medium'>
                        {value.value}
                    </span>
                    <div className='pl-2'>
                        {isActive ? <UpIcon width={16} height={16} /> : <DownIcon width={16} height={16} />}
                    </div>
                </div>
            </div>
            <div className='absolute' style={{height: options.length * 40}}>
                <div className={classNames(
                    'absolute bg-white flex flex-col transition-all overflow-hidden flex-1 shadow-xl',
                    {
                        'max-h-0': !isActive,
                        'max-h-full': isActive,
                    })}
                >
                    {options.map(option => {
                        return (
                            <div
                                className={classNames(
                                    'flex-1 whitespace-nowrap p-2 flex items-center pr-2',
                                    {'bg-gray-200': option.value === value.value}
                                )}
                                onClick={() => handleChange(option)}
                                key={option.value}
                            >
                                <div className='px-2'>
                                    {option.icon}
                                </div>
                                {option.name}
                                {option.value === value.value && <div className='px-2'>
                                    <CheckIcon />
                                </div>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Select