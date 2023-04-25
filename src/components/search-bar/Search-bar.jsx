import { Colors } from "../../constants/Colors";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from "react-router-dom";

function Searchbar({timer}) {
const [value ,setValue] = useState('')
const navigate = useNavigate()
const submitHandle = e => {
  e.preventDefault()
  navigate(`/search/${value}`)
}
  return (
    <>
{ timer ? <Skeleton width={370} height={50} /> :  <Paper
      component={"form"}
      onSubmit={submitHandle}
      sx={{
        border: `1px solid ${Colors.secondary} `,
        paddingLeft: 2,
        boxShadow: "none",
        borderRadius: "none",
      }}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Search..." className="search-bar" />
      <IconButton type={"submit"}>
        <Search />
      </IconButton>
    </Paper>
}    </>
  );
}

export default Searchbar;
