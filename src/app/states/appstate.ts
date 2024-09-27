export interface AppState {
  laughCounter: LaughState;
  collectionState: CollectionState;
  loadJoke: LoadingJokeState;
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

export interface LoadingJokeState {
  isLoading: boolean;
  joke: Joke;
  error: string | null;
}
