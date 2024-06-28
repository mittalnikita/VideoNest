import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from "./utils/fetchFromApi";

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams() ;

  console.log(channelDetail);

  useEffect(() => {
      fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
        setVideos(data?.items));

  }, [id]);

  return (
    <Box minHeight={'95vh'}>
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(232,113,165,1) 0%, rgba(152,148,233,1) 82%)',
          zIndex : 10 ,
          height : '250px'
        }}
        />

        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>
      <Box display="flex" py="2" px="6" >
        <Box sx={{ mr : { sm : '150px'} }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
};

export default ChannelDetail ;