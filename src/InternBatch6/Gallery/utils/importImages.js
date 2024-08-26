// src/utils/importImages.js

export const importAllImages = (context) => {
  let images = {};
  context.keys().forEach((item) => {
    images[item.replace("./", "")] = context(item);
  });
  return images;
};
