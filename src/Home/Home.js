import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import MyAppBar from '../Component/MyAppBar'
import LeftDrawer from '../Component/LeftDrawer'
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Fade from '@mui/material/Fade';
import dayjs from 'dayjs';
import TalkPage from '../Page/TalkPage';
import AboutPage from '../Page/AboutPage';
import CarPage from '../Page/CarPage';
import useMediaQuery from '@mui/material/useMediaQuery';
import CodingServicePage from '../Page/CodingServicePage';
import { DrawerHeader } from '../Component/SubComponent/DrawerHeader';
import { useTheme } from '@mui/material/styles';

function Home() {
  const theme = useTheme();
  const [talks, updateTalks] = useState([{ day: dayjs('2022-10-30 09:30'), description: "", firstName: "Kevin", lastName: "Zhang", reasons: ['Car related questions'] },
  { day: dayjs('2022-10-30 10:30'), description: "I just want to know you...", firstName: "Josh", lastName: "Sky", reasons: ['Other'] },
  { day: dayjs('2022-10-30 09:30'), description: "", firstName: "Kevin", lastName: "Zhang", reasons: ['Car related questions'] },
  { day: dayjs('2022-10-30 10:30'), description: "I just want to know you...", firstName: "Josh", lastName: "Sky", reasons: ['Other'] },
  { day: dayjs('2022-10-30 09:30'), description: "", firstName: "Kevin", lastName: "Zhang", reasons: ['Car related questions'] },
  { day: dayjs('2022-10-30 10:30'), description: "I just want to know you...", firstName: "Josh", lastName: "Sky", reasons: ['Other'] },]);

  const [showAlert, setShowAlert] = useState(false);

  const[currentPage, setCurrentPage] = useState('Talk');

  function updateTalksHook(newTalks) {
    updateTalks(newTalks);
    setShowAlert(true);
  }

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowAlert(false)
    }, 3000)
    return () => {
      clearTimeout(timeId)
    }
  }, [talks])

  function renderSwitch(page){
    switch(page) {
      case 'Talk':
        return <TalkPage talks={talks} updateTalksHook={updateTalks} />
      case 'About': 
        return <AboutPage />
      case 'Car':
        return <CarPage />
    }
  }
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <MyAppBar talks={talks} updateTalks={updateTalksHook} />
      </Box >
      <Box sx={{display: 'flex', justifyContent: 'center', backgroundColor: theme.palette.bg_secondary.main}} >
        <CodingServicePage></CodingServicePage>
      </Box>
    </>
  )
}

export default Home