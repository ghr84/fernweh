import React from "react";

const DownloadBtn = ({ style, label, href, docName }) => {
  return (
    <button id="download-btn" style={style}>
      <a href={href} download={docName}>
        {label}
      </a>
    </button>
  );
};

export default DownloadBtn;
