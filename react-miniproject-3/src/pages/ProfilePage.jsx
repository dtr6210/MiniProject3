import React from "react";
import { Grid, Paper, Typography, Container, Avatar } from "@mui/material";
import defaultprofile from "/defaultprofile.png";
import AdvertisingCard from "../components/AdvertisingCard";

const ProfilePage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 5, padding: 2 }}>
      <Grid container spacing={2}>
        {/* Left side - Profile */}
        <Grid item xs={12} sm={2} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 1 }}
            >
              Profile:
            </Typography>
            <Avatar
              sx={{ width: 80, height: 90, marginBottom: 2 }}
              src={defaultprofile}
              alt="Profile Pic"
            />
            {/* About Me Section */}
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              About Me
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", marginBottom: 2 }}
            >
              {/* Placeholder text */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
              facilisi etiam dignissim diam quis enim. Ut consequat semper
              viverra nam libero justo laoreet. Euismod elementum nisi quis
              eleifend quam adipiscing vitae proin. Sed elementum tempus egestas
              sed sed risus pretium quam vulputate. Scelerisque viverra mauris
              in aliquam sem fringilla ut morbi. A diam maecenas sed enim ut sem
              viverra aliquet eget. Vestibulum morbi blandit cursus risus at
              ultrices mi. Malesuada fames ac turpis egestas. Purus sit amet
              luctus venenatis.
            </Typography>
            {/* Social Media section: add links to fb, insta, personal websites, etc */}
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Social Media
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Other Social Links go here! Add your FB, Inst, or personal
              webpages for your products!{" "}
            </Typography>
          </Paper>
        </Grid>

        {/* Middle - for user posts */}
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ padding: 2, minHeight: "80vh" }}>
            <Typography variant="h6">My Posts</Typography>
            {/* Posts content goes here */}
          </Paper>
        </Grid>

        {/* Right side - Advertising */}
        <Grid item xs={12} sm={2} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="h6">Your Ads Here:</Typography>
            {/* Advertising cards go here */}
            <AdvertisingCard />
            <AdvertisingCard />
            <AdvertisingCard />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
