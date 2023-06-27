import classNames from 'classnames'
import React, {useCallback, useEffect, useState} from 'react'

import NavChunk from './NavChunk'
import {navTree} from './navigationTree'
import NavLink from './NavLink'

const Navigation = ({isActive}) => {
    const [navStack, setNavStack] = useState([]);
    const [currentTree, setCurrentTree] = useState([navTree]);
    const [level, setLevel] = useState(0);
    const goForward = (newTree) => {
        // setNavStack(stack => [...stack, val]);
        setLevel(level + 1);
        setCurrentTree(tree => {
            tree[level + 1] = newTree;
            return tree;
        });
    }
    const goBackward = () => {
        // setNavStack(stack => stack.slice(0, stack.length - 2));
        setLevel(level - 1);
        setCurrentTree(tree => {
            tree[level] = [];
            return tree;
        })
    }

    // useEffect(() => {
    //     console.log(navStack);
    //     const tree = currentTree.filter(tree => tree.name === navStack[navStack.length - 1])[0];
    //     if (tree)
    //         setCurrentTree(tree.tree);
    // }, [navStack]);

    console.log(level, currentTree, Array.isArray(currentTree));

    return (
        <div className={classNames(
            'fixed top-10 h-screen w-full bg-red-400 p-5',
            {'hidden': !isActive}
        )}>
            {level > 0 && <div className='text-3xl mb-5 border-b' onClick={() => goBackward()}>
                {currentTree[level].name}
            </div>}
            {currentTree[level].tree.map(tree =>
                tree.tree ?
                    <NavChunk key={tree.name} text={tree.name} onClick={() => goForward(tree)} /> :
                    <NavLink key={tree.name} text={tree.name} />
            )}
        </div>
    )
}

export default Navigation