import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EmployeeDetails from "./EmployeeDetails";
import './index.css'
createRoot(document.getElementById("demo")).render(
<StrictMode>
<EmployeeDetails fname="Brijesh" lname="Pandey" age="35" salary="89500" address="150 feet ring road rajkot"  />
</StrictMode>
)