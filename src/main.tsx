import { createRoot } from "react-dom/client";
import './main.css';

import App from "./App/App";
import Theme from "./Contexts/Theme/ThemeContext";

const element = document.getElementById('root')!;
const root = createRoot(element);
root.render(
    <Theme>
        <App/>
    </Theme>
)