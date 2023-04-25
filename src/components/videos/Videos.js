import React from 'react'
import { Box, Stack } from '@mui/material'
import { VideoCards, ChannelCard, Loader } from '../Index'


function Videoss({videos}) {
if (videos === undefined  || videos === [] ) return <Loader/> 

  return (
   <Stack width={'100%'} direction={'row'} flexWrap={'wrap'} pl={8} alignItems={'center'} gap={4} >
      {videos.map(item => {
        return(
        <Box key={item.id.videoId}>

            {item.id.videoId && <VideoCards video={item} />}
            {item.id.channelId && <ChannelCard video={item} />}

        </Box>
        )
      })}
   </Stack>
  )
}

export default Videoss
