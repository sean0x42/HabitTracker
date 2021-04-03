import React, { useContext } from "react";
import { Action, AppState, initialState } from "./store";

interface StoreContextType {
  dispatch: React.Dispatch<Action>;
  state: AppState;
}

export const StoreContext = React.createContext<StoreContextType>({
  dispatch: () => {},
  state: initialState,
});

export const useDispatch = () => {
  return useContext(StoreContext).dispatch;
};

export const useSelector = <T>(selector: (state: AppState) => T): T => {
  return selector(useContext(StoreContext).state);
};
