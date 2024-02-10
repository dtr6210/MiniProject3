import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission, including image upload
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <Container component="main" maxWidth="md">
      <Typography component="h1" variant="h5">
        Share Your Recipe
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Recipe Title"
          name="title"
          autoComplete="title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="ingredients"
          label="Ingredients"
          type="text"
          id="ingredients"
          autoComplete="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          multiline
          rows={4}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="instructions"
          label="Instructions"
          type="text"
          id="instructions"
          autoComplete="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          multiline
          rows={6}
        />
        <Button
          variant="contained"
          component="label"
          startIcon={<AddAPhotoIcon />}
          sx={{ mt: 2, mb: 2 }}
        >
          Upload Image
          <input type="file" hidden onChange={handleImageChange} />
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Share Recipe
        </Button>
      </Box>
    </Container>
  );
}
