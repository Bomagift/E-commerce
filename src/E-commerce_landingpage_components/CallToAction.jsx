import "./CallToAction.css";
import Background from '../../public/Images/background.png'

function CallToAction() {
  return (
    <div className="Fourth-container">
      <div className="container-large">
        <img src={Background} alt="Item" />
        <div className="overlay-1">
          <h6>Designing Better Experience</h6>
          <h2>Problems trying to resolve the conflict between </h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:{" "}
          </p>
          <h3>$16.48</h3>
          <div className="button">
            <button>ADD YOUR CALL TO ACTION</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
