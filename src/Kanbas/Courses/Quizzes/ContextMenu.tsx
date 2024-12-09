import { useNavigate } from "react-router";
import { deleteQuiz, updateQuiz } from "./reducer";
import { useDispatch } from "react-redux";
import * as quizClient from "./client"

export default function ContextMenu({ dialogTitle, modalId, quiz }:
    {
        dialogTitle: string;
        modalId: string;
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
            has_time_limit: boolean;
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
        const removeQuiz = async (quizId: string) => {
            await quizClient.deleteQuiz(quizId);
            dispatch(deleteQuiz(quizId));
        };
        const saveQuiz = async (quiz: any) => {
            await quizClient.updateQuiz(quiz);
            dispatch(updateQuiz(quiz));
        };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div id={modalId} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            {dialogTitle} </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <button onClick={() => {
                            saveQuiz({
                               ...quiz,
                                published: !quiz.published
                            })
                        }
                        } type="button" data-bs-dismiss="modal" className="btn btn-danger me-3">
                            {quiz.published ? "Unpublish Quiz" : "Publish Quiz" }
                        </button>
                        <button onClick={() => navigate(`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}`)} 
                        type="button" data-bs-dismiss="modal" className="btn btn-danger me-3">
                            Edit Quiz
                        </button>
                        <button onClick={() => {removeQuiz(quiz._id)}} 
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