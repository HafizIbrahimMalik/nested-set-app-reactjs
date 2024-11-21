import React, { useState, useEffect } from 'react';
import Tree from './components/Tree.tsx';
import Details from './components/Details.tsx';
import { fetchNestedData, buildHierarchy } from './apis/NestedDataApi.tsx';
import './App.scss';

const App = () => {
    const [treeData, setTreeData] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const rawData = await fetchNestedData();
            const hierarchy = buildHierarchy(rawData);
            setTreeData(hierarchy);
        };
        loadData();
    }, []);

    return (
        <div className="app-container">
            <header className='main-heading'>
                <h1>Nested Set Tree</h1>
            </header>
            <main className="tree-details-container">
                <section className="tree-section">
                    <Tree data={treeData} onSelect={setSelectedNode} />
                </section>
                <section className="details-section">
                    <Details node={selectedNode} />
                </section>
            </main>
        </div>
    );
};

export default App;
