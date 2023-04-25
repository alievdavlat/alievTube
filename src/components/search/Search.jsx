import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/Api.service'
import { Box, Container, Typography } from '@mui/material'
import { Colors } from '../../constants/Colors'
import { Videoss, Loader } from '../Index'


function Search() {
const {id} = useParams()
const [videos, setVideos] = useState([])
const [loader , setLoader ] = useState(false)

useEffect(() => {
  setLoader(true)
  ApiService.fetching(`search?part=snippet&q=${id}`)
  .then(dataa => setVideos(dataa.items))
  setTimeout(() => {
    setLoader(false)
  }, 2000);

},[id])

  return (
    <>

{ loader ? <Loader/> :    <Box p={2} sx={{height:'90vh'}} >
      <Container maxWidth={'90%'} >
        <Typography variant={'h4'} fontWeight={'bold'} mb={2} >
          Search results for <span style={{color:Colors.secondary}}>{id}</span> 
        </Typography>
        <Videoss videos={videos}/>
      </Container>
    </Box>
}    
    </>
  )
}

export default Search
