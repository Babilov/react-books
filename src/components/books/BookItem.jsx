import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const BookItem = ({ image, title, authors, category }) => {
  return (
    <CardActionArea>
      <Card sx={{ height: 350, background: "#F3F2F1", pt: 5 }}>
        <CardMedia
          component="img"
          image={image}
          alt="book"
          sx={{ height: 225, width: 160, m: "0 auto" }}
        />
        <CardContent>
          <Typography variant="body2">{category}</Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography variant="body2">{authors}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default BookItem;
