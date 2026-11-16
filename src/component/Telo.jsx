 import logotwo from "./../img/Rectangle 30 (1).svg"
 import logotri from "./../img/Rectangle 32 (2).svg"
 import logofoor from "./../img/Rectangle 34 (1).svg"
 function Telo(){
return (
  <div>
    <div>
      <p className="feat">Featured works</p>
      <img className="ltwo" src={logotwo} alt="" />
      <h3 className="desind">Designing Dashboards</h3>
      <button className="twenti">2020</button>
      <p className="dash">Dashboard</p>
      <p className="text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit <br /> officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt <br /> nostrud amet.
      </p>
    </div>
    <br /> <br />
    <hr />
    <div>
      <img className="ltwo" src={logotri} alt="" />
      <h3 className="vib">Vibrant Portraits of 2020</h3>
      <button className="twenti">2018</button>
      <p className="svg">Illustration</p>
      <p className="texttwo">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit <br /> officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt <br /> nostrud amet.
      </p>
    </div>
    <br /> <br />
    <hr />
    <div>
      <img className="ltwo" src={logofoor} alt="" />
      <h3 className="day">36 Days of Malayalam type</h3>
      <button className="twenti">2018</button>
      <p className="typ">Typography</p>
      <p className="textfoor">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit <br /> officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt <br /> nostrud amet.
      </p>
    </div>
    <br /> <br />
    <hr />
  </div>
);
 }
 export default Telo