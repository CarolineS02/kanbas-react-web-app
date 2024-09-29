import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { RiHome4Line } from "react-icons/ri";
import '../../styles.css';

export default function CourseStatus() {
    return (
        <div id="wd-course-status" className="wd-course-status">
            <h2>Course Status</h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
                        <MdDoNotDisturbAlt className="fs-5" /> Unpublish </button>
                </div>
                <div className="w-50">
                    <button className="btn btn-lg btn-success w-100">
                        <FaCheckCircle className="fs-5" /> Publish </button>
                </div>
            </div><br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5" /> Import Existing Content </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <RiHome4Line className="me-2 fs-5" /> Chose from Home Page </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <GrView className="me-2 fs-5" /> View Course Stream </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaPlus className="me-2 fs-5" /> New Announcement </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaPlus className="me-2 fs-5" /> New Analysis </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <GrView className="me-2 fs-5" /> View Course Notifications </button>
        </div>
    );
}
