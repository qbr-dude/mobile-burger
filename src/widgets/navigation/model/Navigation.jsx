import classNames from 'classnames'
import React, {useState} from 'react'

import NavChunk from './NavChunk'
import {navTree} from '../navigationTree.template'

import {ReactComponent as LeftArrow} from './left-arrow.svg'
import Link from '../../../shared/uikit/Link'

const Navigation = ({isActive}) => {
    const [currentTree, setCurrentTree] = useState([navTree]);
    const [level, setLevel] = useState(0);
    const goForward = (newTree) => {
        setLevel(level + 1);
        setCurrentTree(tree => {
            tree[level + 1] = newTree;
            return tree;
        });
    }
    const goBackward = () => {
        setLevel(level - 1);
        setCurrentTree(tree => {
            tree[level] = [];
            return tree;
        })
    }

    return (
        <div className={classNames(
            'fixed top-11 h-screen w-full p-8 pt-12 bg-white',
            {'hidden': !isActive}
        )}>
            {level > 0 && <div className='mb-5 border-b flex items-center pb-2 ' onClick={() => goBackward()}>
                <LeftArrow className='inline-block mr-2' width={20} height={20} />
                <span className='text-2xl font-medium'>{currentTree[level].name}</span>
            </div>}
            <div className='overflow-y-auto h-5/6 w-screen -ml-8 px-8'>
                {currentTree[level].tree.map(tree =>
                    tree.tree ?
                        <NavChunk
                            key={tree.name}
                            onClick={() => goForward(tree)}
                        >
                            <span className={classNames('text-2xl font-medium', {
                                'text-xl font-normal': level > 0,
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
            {level === 0 && <div className='flex flex-col items-start'>
                <button className='mb-5'><span className='text-2xl font-medium'>Контакты</span></button>
                <button className='mb-5'><span className='text-2xl font-medium'>Поиск</span></button>
            </div>}
        </div>
    )
}

export default Navigation