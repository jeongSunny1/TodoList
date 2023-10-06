"use client";

import React from "react";
import * as tus from "tus-js-client";

function Video(): JSX.Element {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    // const file = e.currentTarget.files && e.currentTarget.files[0];

    if (file) {
      // Create a new tus upload
      const upload = new tus.Upload(file as File, {
        endpoint: "http://localhost:3000/video/",
        retryDelays: [0, 3000, 5000, 10000, 20000],
        metadata: {
          filename: file.name,
          filetype: file.type,
        },
        onError: (error) => {
          console.log("Failed because: " + error);
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
          console.log(bytesUploaded, bytesTotal, percentage + "%");
        },
        onSuccess: () => {
          console.log("Download", upload.file, upload.url);
        },
      });
      upload.start();
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default Video;
