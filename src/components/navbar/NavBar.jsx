import { Box, Stack } from "@mui/material";
import React from "react";
import { Colors } from "../../constants/Colors";
import { Link } from "react-router-dom";
import { Searchbar } from "../Index";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function NavBar({timer}) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      height={'10vh'}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: Colors.primary,
       
      }}>
  <Link to={"/"}  style={{textDecoration:'none' , color:Colors.secondary}}>
{   timer ?   <Skeleton width={100} height={100} circle={true} /> :  <div style={{display:'flex', alignItems:'center' ,gap:'12px'}}>
       <SubscriptionsIcon style={{fontSize:'42px',marginBottom:'10px'}} />
       <h1 style={{fontSize:'35px',fontFamily:'monospace'}}>AlievTube</h1>
    </div>
}   </Link>
     <Searchbar timer={timer} />
      <Box />
    </Stack>
  );
}
     
export default NavBar;
