import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses"  className="row">
      <div className="d-flex flex-wrap row row-cols-1 row-cols-md-5 g-4">

        <div className="wd-dashboard-course col">
        <div className="card rounded-3 overflow-hidden h-100">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/class1.jpg"  width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                CS1234 Software Engineering
              </h5>
              <p className="wd-dashboard-course-title card-text">
              2024 Fall Section02
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col">
        <div className="card rounded-3 overflow-hidden h-100">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/2550/Home">
            <img src="/images/class2.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                CS2550 Web Development
              </h5>
              <p className="wd-dashboard-course-title">
                2024 Fall Section04
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col">
        <div className="card rounded-3 overflow-hidden h-100">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/4000/Home">
              <img src="/images/class3.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  ARTH4000 European Art History
                </h5>
                <p className="wd-dashboard-course-title">
                2024 Fall Section06
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
        </div>

        <div className="wd-dashboard-course col">
        <div className="card rounded-3 overflow-hidden h-100">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/2500/Home">
              <img src="/images/class4.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  ARTD2500 User Experience and Interaction
                </h5>
                <p className="wd-dashboard-course-title card-text">
                2024 Fall Section07
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
        </div>
        
        <div className="wd-dashboard-course col">
        <div className="card rounded-3 overflow-hidden h-100">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/3300/Home">
              <img src="/images/class5.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  ARTD3300 Painting
                </h5>
                <p className="wd-dashboard-course-title card-text">
                2024 Fall Section01
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
        </div>

        <div className="wd-dashboard-course col">
        <div className="card rounded-3 overflow-hidden h-100">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/6000/Home">
              <img src="/images/class6.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  GR6000 Gardening
                </h5>
                <p className="wd-dashboard-course-title card-text">
                2024 Fall Section05
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
        </div>

        <div className="wd-dashboard-course col">
        <div className="card rounded-3 overflow-hidden h-100">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1020/Home">
              <img src="/images/class7.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  ARTD1020 Sculpture 
                </h5>
                <p className="wd-dashboard-course-title card-text">
                2024 Fall Section03
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
        </div>

        </div>
      </div>
    </div>
  );
}
