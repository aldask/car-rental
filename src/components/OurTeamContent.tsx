import "../styles/OurTeam/our-team-style.css";
import { users } from "../Data/users";

function OurTeamContent() {
  return (
    <>
      <section className="our-team">
        <div className="container">
          <div className="our-team__content">
            <div className="our-team__title">
              <h2>Our Team</h2>
            </div>
            <div className="our-team__content-box">
              {users.map((user, index) => (
                <div key={index} className="our-team__content-box-user">
                  <div className="our-team__user-pic">
                    <img src={user.userPic}></img>
                  </div>
                  <div className="our-team__name">
                    <p>{user.fullname}</p>
                  </div>
                  <div className="our-team__job">
                    <p>{user.jobTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurTeamContent;
