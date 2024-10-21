import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <div className="bg-slate-950">
      <App />
    </div>
  </HelmetProvider>
);
