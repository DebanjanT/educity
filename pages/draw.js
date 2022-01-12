import { useLayoutEffect, useRef, useState } from "react";

const Canvas = () => {
  const [shape, setShape] = useState({
    star: true,
    triangle: false,
  });
  const setTriangleBrush = () => {
    setShape({ star: false, triangle: true });
  };
  const setStarBrush = () => {
    setShape({ star: true, triangle: false });
  };
  console.log(shape);

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.fillStyle = "#f9d72f";
    ctx.lineWidth = "5";
    ctx.shadowoffsetX = 10;
    ctx.shadowoffsetY = 10;
    ctx.shadowBlur = 10;

    let hue = 0;
    let drawing = false;

    function draw(x, y, radius, inset, n) {
      ctx.fillStyle = "hsl(" + hue + ",100%,50%)";
      ctx.shadowColor = "hsl(" + hue + ",100%,50%)";
      ctx.beginPath();
      ctx.save();
      ctx.translate(x, y);
      ctx.moveTo(0, 0 - radius);
      for (let i = 0; i < n; i++) {
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - radius * inset);
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - radius);
      }
      ctx.restore();
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
    let angle = 0;
    window.addEventListener("mousemove", (e) => {
      if (drawing) {
        ctx.save();
        ctx.translate(e.x, e.y);
        ctx.rotate(angle);
        hue += 3;
        angle += 0.08;
        if (shape.star == true) {
          draw(0, 0, 40, 0.5, 8);
        } else if (shape.triangle == true) {
          draw(0, 0, 20, 1, 8);
        }

        ctx.restore();
      }
    });

    window.addEventListener("mousedown", () => {
      drawing = true;
    });

    window.addEventListener("mouseup", () => {
      drawing = false;
    });
  }, [shape]);

  return (
    <div>
      {shape.star ? (
        <p
          className="text-center py-2 w-full bg-accent text-gray-50"
          onClick={setTriangleBrush}
        >
          Change to triangle
        </p>
      ) : (
        <p
          className="text-center py-2 w-full bg-accent text-gray-50"
          onClick={setStarBrush}
        >
          Change to star
        </p>
      )}

      <canvas id="canvas1" />
    </div>
  );
};

export default Canvas;
