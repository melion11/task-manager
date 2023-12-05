import { Provider } from "react-redux";

import { Router } from "@/app/routes";
import { store } from "@/app/store/store.ts";

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
