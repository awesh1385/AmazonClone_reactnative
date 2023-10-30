import { Provider } from "react-redux";
import AppNavigation from "./navigation/AppNavigation";
import store from "./store";
import { ModalPortal } from "react-native-modals";
import { UserContext } from "./UserContext";

export default function App() {
  return (
    <Provider store={store}>
      <UserContext>
        <AppNavigation />
        <ModalPortal />
      </UserContext>
    </Provider>
  );
}
