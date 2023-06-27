import classNames from 'classnames'
import React, {useState} from 'react'

import NavChunk from './NavChunk'
import {navTree} from '../navigationTree.template'
import NavLink from './NavLink'

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
            'fixed top-10 h-screen w-full p-5 bg-white',
            {'hidden': !isActive}
        )}>
            {level > 0 && <div className='text-3xl mb-5 border-b' onClick={() => goBackward()}>
                {currentTree[level].name}
            </div>}
            {currentTree[level].tree.map(tree =>
                tree.tree ?
                    <NavChunk
                        key={tree.name}
                        onClick={() => goForward(tree)}
                    >
                        <span className={classNames('text-2xl', {
                            'text-xl': level > 0,
                        })}>
                            {tree.name}
                        </span>
                    </NavChunk> :
                    <NavLink key={tree.name} text={tree.name} />
            )}
        </div>
    )
}

export default Navigation