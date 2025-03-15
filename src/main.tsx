import { createRoot } from "react-dom/client";
import './main.css';

import App from "./App/App";
import Theme from "./Contexts/Theme/ThemeContext";
import IsExcludeSpaces from "./Contexts/IsExcludeSpaces/IsExcludeSpacesContext";
import IsCharLimit from "./Contexts/IsCharLimit/IsCharLimitContext";

const element = document.getElementById('root')!;
const root = createRoot(element);
root.render(
    <Theme>
        <IsExcludeSpaces>
            <IsCharLimit>
                <App />
            </IsCharLimit>
        </IsExcludeSpaces>
    </Theme>
)