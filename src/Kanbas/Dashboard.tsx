import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/class1.jpg" width={200} />
            <div>
              <h5>
                CS1234 Software Engineering
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2550/Home">
            <img src="/images/class2.jpg" width={200} />
            <div>
              <h5>
                CS2550 Web Development
              </h5>
              <p className="wd-dashboard-course-title">
                Awsome Web Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/4000/Home">
              <img src="/images/class3.jpg" width={200} />
              <div>
                <h5>
                  ARTH4000 European Art History
                </h5>
                <p className="wd-dashboard-course-title">
                  Analysis and history of European works
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/2500/Home">
              <img src="/images/class4.jpg" width={200} />
              <div>
                <h5>
                  ARTD2500 User Experience and Interaction
                </h5>
                <p className="wd-dashboard-course-title">
                  How to design interfaces
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/3300/Home">
              <img src="/images/class5.jpg" width={200} />
              <div>
                <h5>
                  ARTD3300 Painting
                </h5>
                <p className="wd-dashboard-course-title">
                  How to paint!
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/6000/Home">
              <img src="/images/class6.jpg" width={200} />
              <div>
                <h5>
                  GR6000 Gardening
                </h5>
                <p className="wd-dashboard-course-title">
                  Make floral arrangments, dishes, and more
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1020/Home">
              <img src="/images/class7.jpg" width={200} />
              <div>
                <h5>
                  ARTD1020 Sculpture 
                </h5>
                <p className="wd-dashboard-course-title">
                  Classical sculpting tools and techniques
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>

      </div>
    </div>
  );
}
