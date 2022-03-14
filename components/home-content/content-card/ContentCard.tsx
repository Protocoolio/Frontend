import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { customStyle } from "../../../styles/constants";

const ContentCard = () => {
  return (
    <Card
      sx={{
        background: `${customStyle.colors.secondary}`,
        borderRadius: 4,
        boxShadow: "1px -1px 12px 0px rgba(66, 68, 90, 1)",
        height: 400,
        margin: 1.5,
        padding: 1,
        width: 250,
      }}
    >
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ContentCard;
