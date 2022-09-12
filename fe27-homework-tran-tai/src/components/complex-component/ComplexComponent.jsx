import "./complexcomponent.scss";
function ComplexComponent() {
  return (
    <div className="complexcomponent">
      <div className="header">
        <div className="logo">LOGOTYPE</div>
        <div className="navbar">
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="">PRODUCT</a>
            </li>
            <li className="nav-list-item">
              <a href="">COMPANY</a>
            </li>
            <li className="nav-list-item">
              <a href="">PARTNERS</a>
            </li>
            <li className="nav-list-item">
              <a href="">NEWS</a>
            </li>
            <li className="nav-list-item">
              <a href="">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main">
        <div className="sidebar">
          <h1 className="sidebar-title">ABOUT US</h1>
          <p className="sidebar-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn">Learn more</button>
        </div>
        <div className="content">
          <h1 style={{ textAlign: "center", color: "blue" }}>ConTent</h1>
        </div>
      </div>
    </div>
  );
}

export default ComplexComponent;
