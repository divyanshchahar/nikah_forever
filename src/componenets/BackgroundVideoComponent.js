import backgroundVideo from "../assets/videos/background_video.mp4";

function BackgroundVideoComponent() {
  return (
    <div className="card text-bg-dark rounded-0 border-0">
      <video src={backgroundVideo} autoPlay muted loop />
      <div className="card-img-overlay d-flex justify-content-center">
        <h1 className="align-self-center text-center">
          India’s most trusted Muslim Matrimony platform
        </h1>
      </div>
    </div>
  );
}

export default BackgroundVideoComponent;
