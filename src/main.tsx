import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import {StrictMode} from "react";

import {createRoot} from "react-dom/client";

import {App} from "./App.tsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
);
