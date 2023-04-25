import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Colors } from "../../constants/Colors";
import moment from "moment/moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

function VideoCards({ video }) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}>
        <Link to={`/video/${video.id.videoId}`} >        
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{
          width: { xs: "100%", sm: "360px", md: "320px" },
          height: "180px",
        }}
      />
        </Link>
      <CardContent
        sx={{
          background: Colors.primary,
          height: "200px",
          position: "relative",
        }}>
       <Link to={`/video/${video.id.videoId}`} >
          <Typography variant={"subtitle1"} fontWeight={"bold"}>
            {video?.snippet?.title}
          </Typography>
          <Typography variant={"subtitle2"} sx={{ opacity: "0.6" }}>
            {video?.snippet?.description.slice(0, 70)}
          </Typography>
       </Link>

        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
            sx={{ display: "flex", alignItems: "center", mt: "10px" }}>
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant={"subtitle2"} color={"gray"}>
              {video?.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", marginLeft: "5px" }}
              />
            </Typography>
            <Typography my={"5px"} sx={{ opacity: "0.4" }}>
              {moment(video?.snippet?.publishedAt).fromNow()}
            </Typography>
          </Stack>
        </Link>

   
      </CardContent>
    </Card>
  );
}

export default VideoCards;
