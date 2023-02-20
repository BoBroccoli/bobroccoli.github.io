import Box from '@mui/material/Box'; 
import MyAppBar from '../Component/MyAppBar' 
import CodingServicePage from '../Page/CodingServicePage'; 
import { useTheme } from '@mui/material/styles';
import CarServicePage from '../Page/CarServicePage';
import SchedulePage from '../Page/SchedulePage';

function Home() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <MyAppBar />
      </Box >
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: theme.palette.bg_secondary.main}} >
        <CodingServicePage></CodingServicePage>
        <CarServicePage></CarServicePage>
        <SchedulePage></SchedulePage>
      </Box>
    </>
  )
}

export default Home