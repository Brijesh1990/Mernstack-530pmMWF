import React, { useState } from "react";
import Axios from "axios";
import "./Avtar.css";

const Avatar = () => {
  // State
  const [sprite, setSprite] = useState("bottts");
  const [seed, setSeed] = useState(1000);

  // Change avatar style
  const handleSprite = (spriteType) => {
    setSprite(spriteType);
  };

  // Generate random seed
  const handleGenerate = () => {
    const randomSeed = Math.floor(Math.random() * 100000);
    setSeed(randomSeed);
  };

  // Download avatar
  const downloadImage = () => {
    Axios({
      method: "get",
      url: `https://api.dicebear.com/6.x/${sprite}/svg?seed=${seed}`,
      responseType: "arraybuffer",
    })
      .then((response) => {
        const blob = new Blob([response.data], {
          type: "image/svg+xml",
        });

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `${seed}.svg`;

        document.body.appendChild(link);
        link.click();

        setTimeout(() => {
          window.URL.revokeObjectURL(link.href);
          document.body.removeChild(link);
        }, 200);
      })
      .catch((error) => {
        console.error("Download failed:", error);
      });
  };

  return (
    <div className="container">
      <div className="nav">
        <p>Random Avatar Generator</p>
      </div>

      <div className="home">
        <div className="btns">
          <button onClick={() => handleSprite("avataaars")}>Human</button>
          <button onClick={() => handleSprite("pixel-art")}>Pixel</button>
          <button onClick={() => handleSprite("bottts")}>Bots</button>
          <button onClick={() => handleSprite("identicon")}>Vector</button>
          <button onClick={() => handleSprite("icons")}>Identi</button>
          <button onClick={() => handleSprite("gridy")}>Alien</button>
          <button onClick={() => handleSprite("micah")}>Avatars</button>
        </div>

        <div className="avatar">
          <img
            src={`https://api.dicebear.com/6.x/${sprite}/svg?seed=${seed}`}
            alt="Avatar"
            width="250"
            height="250"
          />
        </div>

        <div className="generate">
          <button id="gen" onClick={handleGenerate}>
            Next
          </button>

          <button id="down" onClick={downloadImage}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;