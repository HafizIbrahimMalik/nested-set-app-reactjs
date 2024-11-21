import axios from 'axios';
type Node = {
    id: number;
    lft: number;
    rgt: number;
    type: string;
    depth: number;
};

type NodeWithChildren = Node & {
    children: NodeWithChildren[];
};

export const fetchNestedData = async (): Promise<Node[]> => {
    const { data } = await axios.get('https://api.mocki.io/v2/7brybvwl');

    return data.map((node: { 0: Node; depth: number }) => ({
        id: node[0].id,
        lft: node[0].lft,
        rgt: node[0].rgt,
        type: node[0].type,
        depth: node.depth,
    }));
};

export const buildHierarchy = (data: Node[]): NodeWithChildren[] => {
    const stack: NodeWithChildren[] = [];
    const root: NodeWithChildren = { id: 0, lft: 0, rgt: 0, type: "", depth: 0, children: [] };

    data.forEach((node) => {
        const item: NodeWithChildren = { ...node, children: [] };
        while (stack.length && stack[stack.length - 1].rgt < item.rgt) {
            stack.pop();
        }
        const parent = stack.length ? stack[stack.length - 1] : root;
        parent.children.push(item);
        stack.push(item);
    });

    return root.children;
};