import React, { useState } from "react";

const UploadBtn = ({ onChange }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleRemoveClick = () => {
    setIsUploaded(false);

    setIsUploading(false);
  };

  return (
    <div>
      <main className="main_full">
        <div className="container">
          <div className="panel">
            <div className="button_outer">
              <div className="btn_upload">
                <input
                  type="file"
                  id="upload_file"
                  name=""
                  onChange={onChange}
                />
                Upload Image
              </div>
              <div
                className={`processing_bar ${
                  isUploading ? "file_uploading" : ""
                }`}
              ></div>
              {isUploaded && (
                <div className="success_box">
                  <span className="file_remove" onClick={handleRemoveClick}>
                    X
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="error_msg">{errorMessage}</div>
        </div>
      </main>
    </div>
  );
};

export default UploadBtn;
