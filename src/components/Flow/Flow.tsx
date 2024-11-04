import React, { useEffect } from 'react';
import '@xyflow/react/dist/style.css'; 
import {
  ReactFlow,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import { getLayoutedElements } from '../../utils/helpers/dagreLayout';
import { Node } from '../../types/node';
import { Edge } from '../../types/edge';

interface FlowProps {
  initialNodes: Node[];
  initialEdges: Edge[];
}
 
export const Flow: React.FC<FlowProps> = ({ initialNodes, initialEdges }) => {
  // Manage state for nodes and edges using hooks from React Flow
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  // Effect to update nodes and edges whenever initialNodes or initialEdges change
  useEffect(() => {
     // Clear existing nodes and edges
    setNodes([]);
    setEdges([]);

    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      initialNodes,
      initialEdges
    );

    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [initialNodes, initialEdges]);

  return (
    <ReactFlow
      key={JSON.stringify(initialNodes)}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      connectionLineType={ConnectionLineType.SmoothStep}
      fitView
      fitViewOptions={{
        includeHiddenNodes: true,
        maxZoom: 3,
        minZoom: 0
      }}
    />
  );
};
