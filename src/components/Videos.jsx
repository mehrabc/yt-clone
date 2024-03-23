import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from './'
const Videos = ({ videos, direction }) => {
    if (!videos?.length) return <Loader />;
    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="center" gap={2}>
            {videos.map((item, index) => (
                <Box key={index} >
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}

        </Stack>
    )
}

export default Videos