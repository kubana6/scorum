import axios from 'axios';

const baseUrl = 'https://deckofcardsapi.com/api/deck/';

export const getDeckCards = () => axios.get(`${baseUrl}/new/shuffle/?deck_count=1`);

export const getCards = (deckId) => axios.get(`${baseUrl}${deckId}/draw/?count=2`);
