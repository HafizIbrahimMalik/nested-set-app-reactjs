import React from 'react';
import styles from './TreeNode.module.scss';

type Node = {
    id: number;
    lft: number;
    rgt: number;
    type: string;
    depth: number;
    children: Node[];
};

interface DetailsProps {
    node: Node | null;
}

const Details: React.FC<DetailsProps> = ({ node }) => {
    if (!node) {
        return <div className={styles.details}>Select a node to view details.</div>;
    }

    return (
        <div className={styles.details}>
            <h3>Node Details</h3>
            <p><strong>ID:</strong> {node.id}</p>
            <p><strong>Type:</strong> {node.type}</p>
            <p><strong>Left:</strong> {node.lft}</p>
            <p><strong>Right:</strong> {node.rgt}</p>
            <p><strong>Depth:</strong> {node.depth}</p>
        </div>
    );
};

export default Details;
