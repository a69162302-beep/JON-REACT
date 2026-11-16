


import logo from "./../img/Ellipse 1 (3).svg";

function Header() {
  return (
    <>
      <div className="bash">
        <div className="header">
          <a href="/workc">Works</a>
          <a href="/blog">Blog</a>
          <a href="/contakt">Contact</a>
        </div>

        <div className="cyrot">
          <img src={logo} alt="logo" />
        </div>
        <h2 className="hhh">
          Hi, I am John, <br /> Creative Technologist
        </h2>
        <p className="pp">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet{" "}
          <br />
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam <br />
          consequat sunt nostrud amet.
        </p>
        <button>Download Resume</button>
      </div>
    </>
  );
}

export default Header;
