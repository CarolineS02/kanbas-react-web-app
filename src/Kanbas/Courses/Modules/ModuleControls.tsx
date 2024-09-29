import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import RedCheckmark from "./RedCheckmark";

export default function ModulesControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap pb-1">
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end mb-1">
                <FaPlus className="position-relative me-2" />
                Module</button>
            <div className="dropdown d-inline me-1 float-end">
                <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle mb-1"
                    type="button" data-bs-toggle="dropdown">
                    <GreenCheckmark />
                    Publish All</button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
                            <GreenCheckmark />
                            Publish all modules and items</a>
                    </li>
                    <li>
                        <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                            <GreenCheckmark />
                            Publish modules only</a>
                    </li>
                    <li>
                        <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
                            <RedCheckmark />
                            Unpublish all modules and items</a>
                    </li>
                    <li>
                        <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
                            <RedCheckmark />
                            Unpublish modules only</a>
                    </li>
                </ul>
            </div>
            <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 mb-1 float-end">
                View Progress</button>

            <button id="wd-collapse-all" className="btn btn-lg btn-secondary me-1 mb-1 float-end">
                Collapse All</button>
        </div>
    );
}
