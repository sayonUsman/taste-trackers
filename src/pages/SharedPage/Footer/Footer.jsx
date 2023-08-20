import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <div className="container mx-auto rounded-md bg-slate-900 mt-9">
          <footer className=" footer p-10 text-white">
            <div>
              <span className="footer-title">Services</span>
              <Link to="/" className="link link-hover">
                Branding
              </Link>

              <Link to="/" className="link link-hover">
                Marketing
              </Link>

              <Link to="/" className="link link-hover">
                Advertisement
              </Link>
            </div>

            <div>
              <span className="footer-title">Company</span>
              <Link to="/" className="link link-hover">
                About Us
              </Link>
              <Link to="/" className="link link-hover">
                Contact
              </Link>
              <Link to="/" className="link link-hover">
                Career
              </Link>
            </div>

            <div>
              <span className="footer-title">Legal</span>
              <Link to="/" className="link link-hover">
                Terms of use
              </Link>
              <Link to="/" className="link link-hover">
                Privacy Policy
              </Link>
              <Link to="/" className="link link-hover">
                Cookie Policy
              </Link>
            </div>

            <div>
              <span className="footer-title">Newsletter</span>
              <div className="form-control w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="username@site.com"
                    className="input input-bordered w-full pr-16"
                  />
                  <button className="btn absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
