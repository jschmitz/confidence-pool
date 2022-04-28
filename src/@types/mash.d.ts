export interface IMash {
  header_cells: IHeader[];
  body_rows: IBodyRow[];
  footer_cells: IFooter[];
}

export interface IHeader {
  id: string;
  label: string;
}

export interface IGameCell {
  id: string;
  game_name: string;
  game_id: number;
  cell_type: string;
}

export interface IGameResultCell {
  id: string;
  game_result: boolean;
  game_id: number;
  cell_type: string;
}

export interface IPickCell {
  id: string;
  game_id: number;
  player_id: number;
  pick_id: number;
  pick_result: boolean;
  pick_value: number;
  cell_type: string;
}

export type TCell = IGameCell | IGameResultCell | IPickCell;

export interface IBodyRow {
  id: string;
  cells: Cell[];
}

export interface IFooter {
  id: string;
  label: string;
}

export type Props = {
  children: ReactNode;
};
