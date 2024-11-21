import React from 'react';
import TreeNode from './TreeNode.tsx';
import { Dispatch, SetStateAction } from 'react';
import styles from './TreeNode.module.scss';

type Node = {
    id: number;
    type: string;
    children: Node[];
    depth: any
};

interface TreeProps {
    data: Node[];
    onSelect: Dispatch<SetStateAction<Node | null>>;
}

const Tree: React.FC<TreeProps> = ({ data, onSelect }) => {
    return (
        <div className={styles.tree}>
            {data.map((node) => (
                <TreeNode key={node.id} node={node} onSelect={onSelect} />
            ))}
        </div>
    );
};

export default Tree;
