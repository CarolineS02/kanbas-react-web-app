import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a id="wd-a" href="#/Labs" className="nav-link">
          Labs
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a1" href="#/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
          Lab 1
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a2" href="#/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
          Lab 2
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a3" href="#/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
          Lab 3
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a4" href="#/Labs/Lab4"
          className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
          Lab 4
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a4" href="#/Labs/Lab5"
          className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>
          Lab 5
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="#/Kanbas" className="nav-link">
          Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/CarolineS02/kanbas-react-web-app" className="nav-link">
          GitHub - Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/CarolineS02/kanbas-node-server-app" className="nav-link">
          GitHub - Node Server App
        </a>
      </li>

      <li className="nav-item">
        <a id="wd-k" href="https://github.com/CarolineS02/kanbas-node-server-app/tree/final-project" className="nav-link">
          GitHub - Final Project Node Server App
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/CarolineS02/kanbas-react-web-app/tree/final-project" className="nav-link">
          GitHub - Final Project Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://kanbas-node-server-app-2fen.onrender.com/" className="nav-link">
          A5 Node Server App
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://kanbas-node-server-app-a6-ij04.onrender.com/" className="nav-link">
          A6 Node Server App
        </a>
      </li>
    </ul>
  );
}
