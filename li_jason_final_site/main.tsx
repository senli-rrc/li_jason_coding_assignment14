import React from "react";
import { createRoot } from "react-dom/client";
import PortfolioApp from "./src/PortfolioApp";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<PortfolioApp />);
