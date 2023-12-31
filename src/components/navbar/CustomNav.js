import {Link} from 'react-router-dom';

function CustomNav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" alt="logo" width="90" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-shop-window"></i>
                  &nbsp;About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-clipboard-plus"></i>
                  &nbsp;Our Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-lightbulb"></i>
                  &nbsp;Knowledge Base
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-robot"></i>
                  &nbsp;Support
                </a>
              </li>
            </ul>
            <Link to="/access">
            <button type="button" className="btn btn-custom">Get Started</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CustomNav;