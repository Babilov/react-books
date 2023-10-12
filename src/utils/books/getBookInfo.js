export const getImage = (book) => {
  return book["volumeInfo"]["imageLinks"]
    ? book["volumeInfo"]["imageLinks"]["smallThumbnail"]
    : "https://ih1.redbubble.net/image.343726250.4611/flat,1000x1000,075,f.jpg";
};

export const getTitle = (book) => {
  return book["volumeInfo"]["title"];
};

export const getAuthors = (book) => {
  return book["volumeInfo"]["authors"]
    ? book["volumeInfo"]["authors"].join(",")
    : "No author";
};

export const getCategory = (book) => {
  return book["volumeInfo"]["categories"] || "no category";
};
