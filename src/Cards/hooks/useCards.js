import  axios from "axios";
import { useCallback, useState } from "react";


export default function useCards() {

    const [card, setCard] = useState(null);
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getAllCards = useCallback(async ()=>{
        try {
          setIsLoading(true);
          const response = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/");
          const data =response.data;
          setCards(data);
          setIsLoading(false);
  
        } catch (error) {
          setIsLoading(false);
          setError(error.message)
        }
      },[]);

    const getCardById = async (id)=>{
        try {
            setError(null)
            setIsLoading(true)
            const response = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/"+id)
            const data= response.data
            setCard(data)
            setIsLoading(false);
        } catch (error) {
            
            setError(error.message)
            setIsLoading(false);
        }
    };
    const handleCardDelete= (id)=>{
        console.log("you deleted  card no"+ id);
      }
      const handleCardLike= (id)=>{
        console.log("you liked  card no"+ id);
      }
return {cards,card,error,isLoading, getAllCards, getCardById,handleCardDelete,handleCardLike}
}

