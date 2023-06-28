import Sidebar from "@/components/sidebar/Sidebar";
import { createStore } from "redux";

// Định nghĩa action types
const ActionTypes = {
  SET_COMPONENTS: "SET_COMPONENTS",
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
};

// Định nghĩa action creators
export const setComponents = (
  sidebarComponent: React.ReactNode
  // containerComponent: React.ReactNode
) => ({
  type: ActionTypes.SET_COMPONENTS,
  payload: { sidebarComponent },
});

export const toggleSidebar = () => ({
  type: ActionTypes.TOGGLE_SIDEBAR,
});

// Định nghĩa reducer
interface AppState {
  sidebarComponent: React.ReactNode;
  // containerComponent: React.ReactNode;
  sidebarVisible: boolean;
}

interface AppAction {
  type: string;
  payload: {
    sidebarComponent: React.ReactNode;
    // containerComponent: React.ReactNode;
  };
}

const initialState: AppState = {
  sidebarComponent: <Sidebar />,
  sidebarVisible: false,
  // containerComponent: null,
};

const reducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case ActionTypes.SET_COMPONENTS:
      return {
        ...state,
        sidebarComponent: action.payload.sidebarComponent,
        // containerComponent: action.payload.containerComponent,
      };
    case ActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarVisible: !state.sidebarVisible,
      };
    default:
      return state;
  }
};

// Tạo Redux store
const store = createStore(reducer);

export default store;
