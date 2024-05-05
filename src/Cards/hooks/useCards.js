import { useCallback, useState } from "react";
import { getCard, getCards } from "../Services/cardsApiService";


export default function useCards() {

    const [card, setCard] = useState({});
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getAllCards = useCallback(async ()=>{
        try {
          setIsLoading(true);
          
          const data =await getCards();
          setCards(data);
          setIsLoading(false);
  
        } catch (error) {
          setIsLoading(false);
          setError(error.message)
        }
      },[]);

    const getCardById = useCallback(async (id)=>{
        try {
            setError(null)
            setIsLoading(true)
           
            const data= await getCard();
            setCard(data);
            setIsLoading(false);
        } catch (error) {
            
            setError(error.message)
            setIsLoading(false);
        }
    },[]);

    const handleCardDelete= useCallback((id)=>{
        console.log("you deleted  card no"+ id);
      },[])
      const handleCardLike= useCallback((id)=>{
        console.log("you liked  card no"+ id);
      },[])
return {cards,card,error,isLoading, getAllCards, getCardById,handleCardDelete,handleCardLike}
}

