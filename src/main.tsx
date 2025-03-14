import { createRoot } from "react-dom/client";
import './main.css';

import App from "./App/App";

const element = document.getElementById('root')!;
const root = createRoot(element);
root.render(
    <App/>
)