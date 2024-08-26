import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const ImageCompressor = () => {
  const [files, setFiles] = useState([]);
  const [compressedFiles, setCompressedFiles] = useState([]);
  const [error, setError] = useState(null);
  const [uploadMode, setUploadMode] = useState("images"); // "images" or "folder"
  const [folderNames, setFolderNames] = useState([]); // To store folder names for multiple folders

  const handleImageUpload = async (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);

    // Set folder names if folders are uploaded
    if (uploadMode === "folder") {
      const folders = uploadedFiles.reduce((acc, file) => {
        const pathParts = file.webkitRelativePath.split("/");
        const folderName = pathParts.length > 1 ? pathParts[0] : "";
        if (!acc.includes(folderName)) {
          acc.push(folderName);
        }
        return acc;
      }, []);
      setFolderNames(folders);
    }

    const options = {
      maxSizeMB: 1, // Maximum size in MB
      maxWidthOrHeight: 1920, // Max width or height
      useWebWorker: true, // Use multi-threading for compression
    };

    try {
      const compressed = await Promise.all(
        uploadedFiles.map((file) => imageCompression(file, options)),
      );
      setCompressedFiles(compressed);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSave = async () => {
    const zip = new JSZip();

    compressedFiles.forEach((file, index) => {
      let fileName;

      if (uploadMode === "folder" && folderNames.length > 0) {
        const relativePath = files[index].webkitRelativePath;
        const pathParts = relativePath.split("/");
        const folderName = pathParts.length > 1 ? pathParts[0] : "";
        fileName = `${folderName}/${pathParts.slice(1).join("/")}`;
      } else {
        fileName = `CompressImage${index + 1}${getFileExtension(
          files[index].name,
        )}`;
      }

      zip.file(fileName, file);
    });

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "compressed_images.zip");
  };

  const handleNew = () => {
    setFiles([]);
    setCompressedFiles([]);
    setError(null);
    setFolderNames([]); // Clear the folder names on reset
  };

  const formatFileSize = (size) => {
    if (size < 1024) return `${size.toFixed(2)} Bytes`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / 1024 / 1024).toFixed(2)} MB`;
  };

  const handleModeChange = (mode) => {
    setUploadMode(mode);
    handleNew(); // Clear previous selections when mode changes
  };

  const getFileExtension = (filename) => {
    return filename.substring(filename.lastIndexOf("."));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Image Compressor</h1>

      <div style={styles.modeSelector}>
        <button
          onClick={() => handleModeChange("images")}
          style={{
            ...styles.modeButton,
            backgroundColor: uploadMode === "images" ? "#007bff" : "#ccc",
          }}
        >
          Upload Images
        </button>
        <button
          onClick={() => handleModeChange("folder")}
          style={{
            ...styles.modeButton,
            backgroundColor: uploadMode === "folder" ? "#007bff" : "#ccc",
          }}
        >
          Upload Folder(s)
        </button>
      </div>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        style={styles.input}
        key={files.length ? "used" : "new"} // Forces re-render of the input element
        directory={uploadMode === "folder" ? "true" : undefined}
        webkitdirectory={uploadMode === "folder" ? "true" : undefined} // Ensures folder selection is allowed
      />

      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.comparisonContainer}>
        <h2 style={styles.subTitle}>Comparison</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Original Image</th>
              <th style={styles.tableHeader}>Compressed Image</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>
                  <p style={styles.fileText}>
                    {file.webkitRelativePath || file.name} -{" "}
                    {formatFileSize(file.size)}
                  </p>
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Original"
                    style={styles.imagePreview}
                  />
                </td>
                <td style={styles.tableCell}>
                  {compressedFiles[index] && (
                    <>
                      <p style={styles.fileText}>
                        {file.webkitRelativePath || file.name} -{" "}
                        {formatFileSize(compressedFiles[index].size)}
                      </p>
                      <img
                        src={URL.createObjectURL(compressedFiles[index])}
                        alt="Compressed"
                        style={styles.imagePreview}
                      />
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.buttonContainer}>
        {compressedFiles.length > 0 && (
          <button onClick={handleSave} style={styles.saveButton}>
            Download All
          </button>
        )}
        <button onClick={handleNew} style={styles.newButton}>
          New
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    fontSize: "28px",
    marginBottom: "20px",
  },
  modeSelector: {
    textAlign: "center",
    marginBottom: "20px",
  },
  modeButton: {
    margin: "0 10px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  input: {
    display: "block",
    margin: "0 auto 20px auto",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: "20px",
  },
  comparisonContainer: {
    marginTop: "20px",
  },
  subTitle: {
    textAlign: "center",
    color: "#555",
    fontSize: "24px",
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  tableHeader: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    fontSize: "18px",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "15px",
    textAlign: "center",
    verticalAlign: "middle",
  },
  imagePreview: {
    width: "150px",
    marginTop: "10px",
    borderRadius: "4px",
  },
  fileText: {
    fontSize: "10px", // Adjusted font size for file names
    wordWrap: "break-word", // Ensure long names are wrapped
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  saveButton: {
    display: "inline-block",
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
  },
  newButton: {
    display: "inline-block",
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
  },
};

export default ImageCompressor;
