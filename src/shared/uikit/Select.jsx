import React from 'react'

const Select = ({name, value, onSelect, options, defaultValue}) => {
    return (
        <select
            name="name"
            id={`${name}-select`}
            value={value}
            defaultValue={defaultValue}
            onChange={(e) => onSelect(e.currentTarget.value)}
        >
            {options.map(option =>
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default Select