export interface AppState {
  laughCounter: LaughState;
  collectionState: CollectionState;
}

export interface LaughState {
  count: number;
}

export interface CollectionState {
  jokes: Joke[];
}

export interface Joke {
  setup: string;
  punchline: string;
  id: number;
}
