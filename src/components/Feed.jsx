import React from 'react';
import { Box,Stack,Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
// import axios from 'axios';


//     const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/playlistItems',
//   params: {
//     playlistId: 'RDZiQo7nAkQHU',
//     part: 'snippet',
//     maxResults: '50'
//   },
//   headers: {
//     'X-RapidAPI-Key': '225dbd971emsh0f0442b635a513dp14a6e4jsned365489d91d',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };


const Feed = () => {

     const [selectedCategory, setSelectedCategory] = useState('New');

    const[videos,setVideos]=useState([])

    useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);


    
    return(
        <Stack sx={{
            flexDirection: {
                sx: 'column', md: 'row'
            }
        }}>
            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <SideBar selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory} />

                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
                    copyright 2023 TeflonDon-dev
                </Typography>
            </Box>
            <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}
export default Feed