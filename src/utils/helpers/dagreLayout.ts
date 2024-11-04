import dagre from '@dagrejs/dagre';
import { Node } from '../../types/node';
import { Edge } from '../../types/edge';

const nodeWidth = 200;
const nodeHeight = 50;

// create a new directed graph using dagre
const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

// function to layout nodes and edges in a graph
export const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction: 'TB' | 'LR' = 'TB'
): { nodes: Node[]; edges: Edge[] } => {
  // determine if the layout is horizontal
  const isHorizontal = direction === 'LR';

  // set the graph layout direction
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);
  
  // create a new array of nodes with updated positions
  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: newNodes, edges };
};
