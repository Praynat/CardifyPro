import { useCallback, useState } from "react";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,

} from "../Services/cardsApiService";
import { useSnack } from "../../providers/SnackbarProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useAxios from "../../hooks/useAxios";
import normalizeCard from "../helpers/normalization/normalizeCard";
import { useMyUser } from "../../users/providers/UserProvider";

export default function useCards() {
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const setSnack = useSnack();
  const {user}= useMyUser();

  useAxios();

  
  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCards();
      setCards(data);
      
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getFavCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCards();
      const filteredData = data.filter(card => card.likes.includes(user._id));

      setCards(filteredData);
      
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [user]);

  const getAllMyCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getMyCards();
      setCards(data);
      
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getCardById = useCallback(async (id) => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCard(id);
      setCard(data);
      return data;
  } catch (err) {
      setError(err.message);
    }finally {
      setIsLoading(false);
    }
  }, []);

  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      setError(null);
      setIsLoading(true);

      try {
        const card = await createCard(normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "A new business card has been created");
        setTimeout(() => {
          navigate(ROUTES.MY_CARDS);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      setIsLoading(true);

      try {
        const card = await editCard(cardId, normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "The business card has been successfully updated");
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleCardDelete = useCallback((cardId) => {
    const confirmed = window.confirm("Are you sure you want to delete this card?");
    if (confirmed) {
      
        setIsLoading(true);
  
        try {
          const card = deleteCard(cardId);
          setSnack("success", "The business card has been successfully deleted");
          setCard(card)
          setTimeout(() => {
           getAllMyCards();
          }, 1000);
        } catch (error) {
          setError(error.message);
        }finally{

          setIsLoading(false);
        }
    }

    }, [setSnack,getAllMyCards]);

  const handleCardLike = useCallback(
    async (id) => {
      try {
        const updatedCard = await changeLikeStatus(id);
        setCards((prevCards) =>
          prevCards.map((card) =>
            card._id === updatedCard._id ? updatedCard : card
          )
        );
        setSnack("success", "Card like status updated");
      } catch (error) {
        setSnack("error", error.message);
      }
    },
    [setSnack] 
  );

  return {
    cards,
    card,
    error,
    isLoading,
    getAllCards,
    getCardById,
    handleCardDelete,
    handleCardLike,
    handleCreateCard,
    handleUpdateCard,
    getAllMyCards,
    getFavCards,
  };
}