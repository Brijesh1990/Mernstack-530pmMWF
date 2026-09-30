import React,{StrictMode} from "react";
import { createRoot } from "react-dom/client";
import Demo from "./DemoApp";
import './style.css'
createRoot(document.getElementById("demo")).render(
    <StrictMode>
    <Demo />
    </StrictMode>
)