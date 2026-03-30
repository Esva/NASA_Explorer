import videoBG from "../../assets/videoBG.webm";
import "./BackgroundVideo.modules.css";

function BackgroundVideo() {
  return (
    <div>
      <video src={videoBG} id="background-video" loop autoPlay muted></video>
    </div>
  );
}

export default BackgroundVideo;
