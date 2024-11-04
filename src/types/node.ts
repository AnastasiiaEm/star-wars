type Position = {
  x: number;
  y: number;
};

export interface Node {
  id: string;
  data: {
    label: string;
  };
  position: Position;
  className: string,
};