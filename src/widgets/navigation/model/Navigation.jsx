import classNames from 'classnames'
import React, {useState} from 'react'

import NavChunk from './NavChunk'
import Link from '../../../shared/uikit/Link'

import {navTree} from '../navigationTree.template'
import {ReactComponent as LeftArrow} from './left-arrow.svg'

const Navigation = ({isActive}) => {
    const [stack, setStack] = useState([navTree]);
    const goForward = (newTree) => {
        setStack(stack => [...stack, newTree]);
    }
    const goBackward = () => {
        setStack(stack => stack.slice(0, -1))
    }

    return (
        <div className={classNames(
            'fixed top-11 h-9/10 w-full pt-12 bg-white transition-all flex flex-col',
            {'-right-full': !isActive, 'right-0': isActive}
        )}>
            {stack.length > 1 &&
                <div className='mb-5 border-b flex items-center p-2' onClick={() => goBackward()}>
                    <LeftArrow className='inline-block mr-1' width={20} height={20} />
                    <span className='text-2xl font-medium'>{stack.at(-1).name}</span>
                </div>}
            <div className='overflow-y-auto flex-1 w-screen px-8'>
                {stack.at(-1).tree.map(tree =>
                    tree.tree ?
                        <NavChunk
                            key={tree.name}
                            onClick={() => goForward(tree)}
                        >
                            <span className={classNames('text-2xl font-medium', {
                                'text-xl font-normal': stack.length > 1,
                            })}>
                                {tree.name}
                            </span>
                        </NavChunk> :
                        <div className='mb-2' key={tree.name}>
                            <Link href={tree.link}>
                                <span className='font-medium'>{tree.name}</span>
                            </Link>
                            <p className='text-xs mt-2 text-gray-600'>{tree.description}</p>
                        </div>
                )}
            </div>
            {stack.length === 1 && <div className='flex flex-col items-start px-8'>
                <button className='mb-5'><span className='text-2xl font-medium'>Контакты</span></button>
                <button className='mb-5'><span className='text-2xl font-medium'>Поиск</span></button>
            </div>}
        </div>
    )
}

export default Navigation