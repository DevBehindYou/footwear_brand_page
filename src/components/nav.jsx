

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
           <img className="logo-icon" src="/images/logo.jpg" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
