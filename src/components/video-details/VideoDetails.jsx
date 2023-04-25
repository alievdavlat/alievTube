
import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { ApiService } from '../../service/Api.service'
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material'
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material'
import { Loader, Videoss } from '../Index'
import ReactPlayer from 'react-player'



 function VideoDetails() {
  const [ videoDetails, setVideoDetails ] = useState([])
  const [ relatedVideo, setRelatedVideo ] = useState([])
  const { id } = useParams()

  useEffect(() => {


const getData = async () => {
  try {
    const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
    setVideoDetails(data.items[0])
    const relatedvideos = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    setRelatedVideo(relatedvideos.items)

  } catch (error) {
    console.log(error);
  }}

    getData() 

  },[id])



if(!videoDetails?.snippet) return <Loader/>

  return (
    <Box minHeight={'90vh'} mb={18}>
        <Box display={'flex'} sx={{flexDirection:{xs:'column', md:'row'}}}  >
          <Box width={{xs:'100%', md:'75%'}} pl={2}>
            <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`}  className='react-player' controls />
           
            {  videoDetails.snippet.tags.map((item, idx ) => (
                <Chip 
                label={item}
                key={idx}
                sx={{marginTop:'10px', cursor:'pointer', ml:'10px'}}
                deleteIcon={<Tag/>}
                onDelete={() => {}}
                variant='outlined'
                />
              ))  }
          

            <Typography variant='h5' fontWeight={'bold'} p={2} >
                {videoDetails.snippet.title}
            </Typography>
            <Typography variant='subtitle2' p={2} sx={{opacity:'0.7'}} >
            {videoDetails.snippet.description}
            </Typography>

          <Stack direction={'row'} gap={'20px'} alignItems={'center'} py={1} px={2}>
            <Stack sx={{opacity:'0.7'}} direction={'row'} gap={'3px'} alignItems={'center'}  >
                <Visibility/>
                {parseInt(videoDetails.statistics.viewCount).toLocaleString()} views
            </Stack>
            <Stack sx={{opacity:'0.7'}} direction={'row'} gap={'3px'} alignItems={'center'}  >
                <FavoriteOutlined/>
                {parseInt(videoDetails.statistics.likeCoount).toLocaleString()} likes
            </Stack>
            <Stack sx={{opacity:'0.7'}} direction={'row'} gap={'3px'} alignItems={'center'}  >
                <MarkChatRead/>
                {parseInt(videoDetails.statistics.commentCount).toLocaleString()} comment
            </Stack>

            </Stack>
            <Link to={`/channel/${videoDetails.snippet.channelId}`}>
            <Stack direction={'row'} py={1} px={2} >
                <Stack direction={'row'} gap={'5px'} alignItems={'center'} marginTop={'5px'}  >
                    <Avatar  src={videoDetails.snippet.thumbnails.default.url}  alt={videoDetails.snippet.channelTitle} />
                      <Typography variant='subtitle2'  color={'gray'}>
                      {videoDetails.snippet.channelTitle}
                      <CheckCircle  sx={{fontSize:'12px', color:'gray', ml:'5px'}} />
                      </Typography>
                </Stack>
              </Stack>
            </Link>

          </Box>
          <Box width={{xs:'100%', md:'25%'}}
            px={2}
            py={{md:'1',xs:'5'}}
            alignItems={'center'}
            justifyContent={'center'}
            overflow={'scroll'}
            maxHeight={'120vh'}
          >
              <Videoss  videos={relatedVideo && relatedVideo} />
          </Box>
        </Box>
    </Box>
  )
}

export default VideoDetails