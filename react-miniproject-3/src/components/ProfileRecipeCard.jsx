import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ProfileRecipeCard({ title, imageUrl, ingredients, directions }) {
  return (
    <Card sx={{ maxWidth: 500, width: '100%', mb: 2 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageUrl} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Ingredients:</strong>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Directions:</strong> {directions}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProfileRecipeCard;
