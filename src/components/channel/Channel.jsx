import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/Api.service";
import { Box, Container } from "@mui/material";
import { ChannelCard, Videoss } from "../Index";

function Channel() {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetails(dataChannelDetail.items[0]);
        const dataVideo = await ApiService.fetching(
          `search?channelId=${id}&part=snippet%Cid&order=date`
        );
        setVideos(dataVideo?.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  return (
    <Box minHeight={"95vh"} mt={"5vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"250px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetails?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition:'center',
            backgroundSize:'100%',
            objectFit:'cover',
            backgroundRepeat:'no-repeat',

          }}
        />
        <ChannelCard video={channelDetails}  mt={'-100px'} />
      </Box>
      <Container maxWidth={'90%'} >
          <Videoss videos={videos} />
      </Container>
    </Box>
  );
}

export default Channel;
