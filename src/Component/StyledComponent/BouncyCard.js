import { Card, styled } from "@mui/material";
export const BouncyCard = styled(Card)`
  animation: slide-bounce 1s ease-in-out;
  @keyframes slide-bounce {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(-35px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
