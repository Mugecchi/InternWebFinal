export const fetchGoogleDriveImages = async (folderId, apiKey) => {
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.files) {
    return data.files.map((file) => ({
      id: file.id,
      name: file.name,
      mimeType: file.mimeType,
      url: `https://drive.google.com/uc?export=view&id=${file.id}`,
    }));
  } else {
    return [];
  }
};
