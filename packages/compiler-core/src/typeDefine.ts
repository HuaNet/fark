export interface Index {
  id: string;
  flag: boolean;
  cache: boolean;
  count: number;
}

export interface Route {
  url: string;
  params: string;
  query: string;
  status: boolean;
}

export interface State {
  create: boolean;
  mounted: boolean;
  update: boolean;
  destroy: boolean;
}


export interface Metadata {
  index: Index;
  route: Route;
  state: State;
  data: Array<string>
}
