import { EntityState } from '@ngrx/entity';

export interface AppState {
  laughCounter: LaughState;
  collectionState: CollectionState;
  loadJoke: LoadingJokeState;
}

export interface LaughState {
  count: number;
}

export interface CollectionState extends EntityState<Joke> {}

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
