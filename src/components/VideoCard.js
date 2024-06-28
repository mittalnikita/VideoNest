import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import ChannelCard from "./ChannelCard";

import { demoThumbnailUrl, demoProfilePicture, demoChannelTitle,demoVideoTitle, demoChannelUrl, demoVideoUrl } from "./utils/constants";

const VideoCard = ( { video : {id : {videoId}, snippet} } ) => {

  return (
    <Card sx={{ width : { xs : '100%', sm : '400px', md : '405px' }, 
    boxShadow : 'none', borderRadius : 4, color : 'black', background : 'black' }} >
        <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
            <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width : { xs: '100%', sm: '400px', md : '405px' }, height : 230, borderRadius : 4 }} />
        </Link>

        <CardContent sx={{
            background : 'black', height : '100px'
        }}>
            
            <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
            <Typography varient='subtitle1' fontWeight={'bold'} color={'#FFF'}>
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0, 60)}
            </Typography>
            </Link>

                <Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
                <Typography varient='subtitle2' fontWeight={'bold'} color={'gray'}>
                    {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0, 60)}
                    <CheckCircle sx={{ fontSize : 12, color : 'gray', ml : '5px' }} />
                </Typography>
                </Link>
        
        </CardContent>
    </Card>
  )
}

export default VideoCard