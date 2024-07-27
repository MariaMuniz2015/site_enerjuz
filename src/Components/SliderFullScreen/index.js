import "./stylesliderfull.css";

function SliderFullScreen() {
  return (
    <div className="containerS">
      <div className="tabs">
        <input id="web" type="radio" name="slider" checked />
        <input id="grafics" type="radio" name="slider" />
        <input id="photo" type="radio" name="slider" />

        <div className="buttons">
          <label for="web"></label>
          <label for="grafics"></label>
          <label for="photo"></label>
        </div>
        <div className="contents">
          <div className="box web"></div>
          <div className="box grafics"></div>
          <div className="box photo"></div>
        </div>
      </div>
    </div>
  );
}

export default SliderFullScreen;
