import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Flow } from '../components/Flow/Flow';
import { Node } from '../types/node';
import { Edge, EdgeType } from '../types/edge';

describe('Flow Component', () => {
  const initialNodes: Node[] = [
    { id: '1', data: { label: 'Node 1' }, position: { x: 0, y: 0 }, className: 'custom-node' },
    { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 }, className: 'custom-node' },
  ];

  const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', type: EdgeType.DEFAULT, animated: false, className: 'custom-edge' },
  ];

  let OriginalResizeObserver: typeof ResizeObserver;

  beforeAll(() => {
    OriginalResizeObserver = global.ResizeObserver;
    global.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    } as typeof ResizeObserver;
  });

  afterAll(() => {
    global.ResizeObserver = OriginalResizeObserver;
  });

  it('renders the ReactFlow component with nodes', () => {
    render(<Flow initialNodes={initialNodes} initialEdges={initialEdges} />);
    
    expect(screen.getByText('Node 1')).toBeInTheDocument();
    expect(screen.getByText('Node 2')).toBeInTheDocument();
  });
});