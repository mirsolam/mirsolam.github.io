/*React*/
import { useRef, useState, useEffect } from "react";

/*CSS*/
import "../css/ScrollApp.css";

function SequenceScroller({ p_series, ...props }) {
  const canvasRef = useRef();

  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState(0);
  const frames = useRef();

  const numframes = useRef();

  useEffect(() => {
    if (!frames.current) {
      frames.current = {
        location: importAll(
          require.context("../frames/location", false, /\.(webp)$/)
        ),
        university: importAll(
          require.context("../frames/university", false, /\.(jpg)$/)
        ),
      };
      numframes.current = frames.current[p_series].length;
    }
    if (!canvasRef.current) return;
    else if (images.length < 1 && canvasRef.current) {
      PreloadImages();
      RenderCanvas();
      document
        .getElementById(p_series)
        .parentElement.parentElement.addEventListener("scroll", HandleOnScroll);
      window.addEventListener("resize", HandleOnResize)
      window.addEventListener("beforeunload", HandleOnBeforeUnload)

    } else {
      let requestId = RenderFrames();

      return () => {
        cancelAnimationFrame(requestId);
      };
    }
  }, [images, frameIndex]);

  function importAll(r) {
    return r.keys().map(r);
  }

  function PreloadImages() {
    frames.current[p_series].map((item) => {
      const img = new Image();
      img.src = item;
      img.decoding = "async"
      setImages((prev) => [...prev, img]);
      return true;
    });
  }

  function RenderCanvas() {
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = 1920;
    context.canvas.height = window.innerHeight * 0.89;
  }

  function HandleOnScroll(e) {
    const top = e.target.scrollTop;
    const maxTop = e.target.scrollHeight - e.target.clientHeight;
    const scrollFraction = top / maxTop;
    const index = Math.min(
      numframes.current - 1,
      Math.ceil(scrollFraction * numframes.current)
    );

    if (index < 0 || index > numframes.current) return;
    setFrameIndex(index);
  }

  function HandleOnResize() {
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = 1920;
    context.canvas.height = window.innerHeight * 0.89;
  }

  function HandleOnBeforeUnload() {
    setFrameIndex(0);
  }

  function RenderFrames() {
    if (!canvasRef.current) return;
    canvasRef.current.getContext("2d").clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    canvasRef.current.getContext("2d").drawImage(images[frameIndex], 0, 0);
    return requestAnimationFrame(RenderFrames);
  }

  return (
    <canvas
      className="location-canvas"
      id={p_series}
      name="canvasanim"
      ref={canvasRef}
    ></canvas>
  );
}

export default SequenceScroller;
