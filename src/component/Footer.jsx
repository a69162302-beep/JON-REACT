import fb from "./../img/fb (1).svg"
import insta from "./../img/insta (1).svg"
import group from "./../img/Group (1).svg"
import lin from "./../img/Linkedin (1).svg"
function Footer(){
    return (
      <div className="foot">
        <div className="elem">
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img src={group} alt="" />
          <img src={lin} alt="" />
        </div>
        <br /> <br />
        <p className="ft">Copyright ©2020 All rights reserved </p>
      </div>
    );
}
export default Footer