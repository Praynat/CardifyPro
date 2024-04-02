import React, { useEffect, useState } from "react";
import PageHeader from "../Components/PageHeader";
import { Card } from "@mui/material";
import axios from "axios"
import CardsFeedback from "../Components/CardsFeedback";


export default function CardsPage() {
const [cards, setCards] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState();

  useEffect(()=>{
    const getCardsData = async ()=>{
      try {
        setIsLoading(true);
        const response = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards");
        const data =response.data;
        setCards(data);
        setIsLoading(false);

      } catch (error) {
        setIsLoading(false);
        setError(error.message)
      }
    };
    getCardsData();
  }, []);

  const handleCardDelete= (id)=>{
    console.log("you deleted  card no"+ id);
  }
  const handleCardLike= (id)=>{
    console.log("you liked  card no"+ id);
  }

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


