import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
const Navbar = () => {
    return (
        <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0 }} >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flex: 0.18 }}>
                <img src={logo} alt="logo" height={45} />
            </Link>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", flex: 1 }}>
                <SearchBar />
            </Box>

        </Stack>
    )
}

export default Navbar