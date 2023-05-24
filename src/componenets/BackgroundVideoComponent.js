import backgroundVideo from "../assets/videos/background_video.mp4";
import styles from "./BackgroundVideoComponent.module.css";

function BackgroundVideoComponent() {
  return (
    <>
      <div className={styles.container}>
        <video
          src={backgroundVideo}
          autoPlay
          muted
          loop
          className={styles.video}
        />
      </div>
    </>
  );
}

export default BackgroundVideoComponent;
