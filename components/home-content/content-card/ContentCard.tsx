import * as React from "react";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { StyledCard, CardActionsContainer } from "./ContemtCard.styled";

const ContentCard = () => {
  return (
    <StyledCard sx={{ borderRadius: 4 }}>
      <CardHeader
        title="Title"
        sx={{
          padding: 1,
          textAlign: "center",
        }}
      />
      <CardMedia
        component="img"
        height="150"
        image="https://assets.duelistking.com/metadata/horus--rage.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests.
        </Typography>
      </CardContent>
      <CardActionsContainer>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
      </CardActionsContainer>
    </StyledCard>
  );
};

export default ContentCard;
