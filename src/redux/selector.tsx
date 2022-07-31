import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from './reducers/rootReducer';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
