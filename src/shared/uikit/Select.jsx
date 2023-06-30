import classNames from 'classnames'
import React, {useRef, useState} from 'react'

import {ReactComponent as CheckIcon} from './check.svg';
import {useClickOutside} from './../utils/useClickOutside';

const Select = ({
    options,
    onChange,
    defaultValue,
}) => {
    const [current, setCurrent] = useState(defaultValue);
    const [isActive, setIsActive] = useState(false);

    const ref = useRef(null);
    useClickOutside(ref, () => setIsActive(false));

    const handleChange = (value) => {
        setCurrent(value);
        onChange(value);
    }
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
                    <div className='pr-2'>
                        {current.icon}
                    </div>
                    <span className='font-medium'>

                        {current.value}
                    </span>
                </div>
            </div>
            <div className={classNames(
                'absolute bg-white flex flex-col transition-all overflow-hidden flex-1 shadow-xl',
                {
                    'hidden': !isActive,
                    // 'h-full': isActive,
                })}>
                {options.map(option => {
                    return (
                        <div
                            className={classNames(
                                'flex-1 whitespace-nowrap p-2 flex items-center pr-2',
                                {'bg-gray-200': option.value === current.value}
                            )}
                            onClick={() => handleChange(option)}
                            key={option.value}
                        >
                            <div className='px-2'>
                                {option.icon}
                            </div>
                            {option.name}
                            {option.value === current.value && <div className='px-2'>
                                <CheckIcon />
                            </div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Select