import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="ft">
      <div className="l-inner">
        <ul className="ft-list">
          <li className="ft-item">
            <Link to="/recipes" className="ft-link">
              recipe
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
