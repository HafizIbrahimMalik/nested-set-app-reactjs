import React, { useState } from 'react';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import styles from './TreeNode.module.scss';

type Node = {
  depth: number;
  id: number;
  type: string;
  children: Node[];
};

interface TreeNodeProps {
  node: Node;
  onSelect: (node: Node) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginLeft: node.depth * 20 }} className={styles.node}>
      <div className={styles.nodeHeader} onClick={() => onSelect(node)}>
        {node.children && node.children.length > 0 && (
          <span onClick={toggle} className={styles.toggleIcon}>
            {isOpen ? <FiChevronDown /> : <FiChevronRight />}
          </span>
        )}
        <span className={styles.nodeType}>{node.type}</span>
      </div>
      {isOpen && node.children && node.children.length > 0 && (
        <div className={styles.nodeChildren}>
          {node.children.map((child: Node) => (
            <TreeNode key={child.id} node={child} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
