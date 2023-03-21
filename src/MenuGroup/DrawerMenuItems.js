import GitHubIcon from '@mui/icons-material/GitHub';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HouseIcon from '@mui/icons-material/House';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const DrawerMenuItems = [
    {
        id:0,
        label:'Coding Service',
        icon: <GitHubIcon color='third'/>,
        path: 'code'
    },
    {
        id:1,
        label:'Car Service',
        icon: <DirectionsCarIcon color='third'/>,
        path: 'car'
    },
    {
        id:2,
        label:'Schedule a Call',
        icon: <HouseIcon color='third'/>,
        path: 'schedule'
    },
    {
        id:3,
        label:'About Me',
        icon: <SupportAgentIcon color='third'/>,
        path: 'about'
    },
    {
        id:4,
        label:'Contact Me',
        icon: <AccountCircleIcon color='third'/>,
        path: 'about'
    },
]