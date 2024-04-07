import React, { useEffect} from "react";
import PageHeader from "../Components/PageHeader";
import { Card } from "@mui/material";
import CardsFeedback from "../Components/CardsFeedback";
import useCards from "../hooks/useCards";


export default function CardsPage() {

  const { cards,error,isLoading, getAllCards,handleCardDelete,handleCardLike} = useCards();

  useEffect(()=>{
    getAllCards();
  }, []);

  return (
    <>
    

<Card  sx={{m:"1rem",p:"1rem 2rem",borderRadius:"1rem"}}>
        <PageHeader 
          title="Cards"
          />
        </Card>

    <CardsFeedback 
    cards={cards}
    isLoading={isLoading}
    error={error}
    handleCardDelete={handleCardDelete}
    handleCardLike={handleCardLike}
    />

  </>
  )
  

}


