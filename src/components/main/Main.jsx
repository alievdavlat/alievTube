import React, { useState, useEffect } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { Colors } from '../../constants/Colors'
import { Category, Videoss } from '../Index'
import { ApiService } from '../../service/Api.service'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Main({timer}) {

  const [ selectedCategory, setSelectedCategory ] = useState('Suggested')
  const [ videos , setVideos ] = useState([])


  const selectedCategoryHandle = (category) => setSelectedCategory(category)

  useEffect(() =>{
 
    ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
    .then(dataa => setVideos(dataa.items))
 
  },[selectedCategory])

  return (
    <Stack>
   {timer ? <Skeleton width={'100%'} height={'40px'} style={{marginBottom:'20px', marginTop:'20px'}} /> :  <Category selectedCategoryHandle={selectedCategoryHandle}  selectedCategory={selectedCategory} />  }   
   <Box p={2} sx={{height:'90vh'}}>
        <Container maxWidth={'90%'}>
         {timer ? <Skeleton  width={200} height={40} style={{marginBottom:'20px'}}/> : <Typography variant='h4' fontWeight={'bold'} mb={2}>
            {selectedCategory} <span style={{color:Colors.secondary}}>videos</span>
          </Typography>}
       {timer ? <Skeleton count={10} style={{marginBottom:'30px', height:'40px'}} /> :  <Videoss videos={videos} /> }        
        </Container>
   </Box>
    </Stack>
    )
}

export default Main
