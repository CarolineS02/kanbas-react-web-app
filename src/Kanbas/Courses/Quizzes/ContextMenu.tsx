import { useNavigate } from "react-router";
import { deleteQuiz, updateQuiz } from "./reducer";
import { useDispatch } from "react-redux";

export default function ContextMenu({ dialogTitle, quiz }:
    {
        dialogTitle: string;
        quiz: {
            _id: string;
            title: string;
            description: string;
            course: string;
            type: string;
            points: string;
            group: string;
            shuffle_answers: boolean;
            time_limit: string;
            multiple_attempts: boolean;
            attempts: string;
            show_correct: boolean;
            access_code: string;
            one_question_at_a_time: boolean;
            webcam_required: boolean;
            lock_questions_after_answering: boolean;
            due_date: string;
            available_date: string;
            available_until_date: string;
            published: boolean;
        }
    }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div id="wd-add-module-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            {dialogTitle} </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <button onClick={() => {
                            dispatch(updateQuiz({
                                _id: quiz._id,
                                title: quiz.title,
                                description: quiz.description,
                                course: quiz.course,
                                type: quiz.type,
                                points: quiz.points,
                                group: quiz.group,
                                shuffle_answers: quiz.shuffle_answers,
                                time_limit: quiz.time_limit,
                                multiple_attempts: quiz.multiple_attempts,
                                attempts: quiz.attempts,
                                show_correct: quiz.show_correct,
                                access_code: quiz.access_code,
                                one_question_at_a_time: quiz.one_question_at_a_time,
                                webcam_required: quiz.webcam_required,
                                lock_questions_after_answering: quiz.lock_questions_after_answering,
                                due_date: quiz.due_date,
                                available_date: quiz.available_date,
                                available_until_date: quiz.available_until_date,
                                published: true
                            }))
                        }
                        } type="button" data-bs-dismiss="modal" className="btn btn-danger me-3">
                            Publish Quiz
                        </button>
                        <button onClick={() => navigate(`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}`)} 
                        type="button" data-bs-dismiss="modal" className="btn btn-danger me-3">
                            Edit Quiz
                        </button>
                        <button onClick={() => {dispatch(deleteQuiz(quiz._id))}} 
                        type="button" data-bs-dismiss="modal" className="btn btn-danger me-3">
                            Delete Quiz
                        </button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel </button>
                    </div>
                </div>
            </div>
        </div>
    );
}