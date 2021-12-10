import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBalance, checkResult, startGameCards } from '../../actions/balance';
import { getCardsInformation, getDeckCardsInformation, removeCards } from '../../actions/card';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { LEFT, RIGHT } from '../../constants';
import style from './view.module.css';

var HomePage = function() {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false);
  const [winner, setWinner] = useState(false);
  const [lose, setLose] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [equally, setEqually] = useState(false);
  const [resultInformation, setResultInformation] = useState(null)

  const { deckId, cards } = useSelector((state) => state.card)
  const { currentBalance, currentRate } = useSelector((state) => state.balance)

  useEffect(() => {
    dispatch(getDeckCardsInformation())
    dispatch(checkBalance)
  }, [dispatch]);

  const handleClick = useCallback((side) => async () => {
    if (!startGame) return
    await dispatch(getCardsInformation(deckId));
    const result = dispatch(checkResult(side));
    setStartGame(false)
    switch (result) {
      case -currentRate:
        debugger
        setLose(true);
        setResultInformation('You lose 10');
        break;
      case currentRate:
        setWinner(true);
        setResultInformation('You winner 10');
        break;

      default:
        setEqually(true);
        setResultInformation('you played to a draw')
        break;
    }

  }, [dispatch, deckId, checkResult, startGame]);

  const handleClickStartGame = useCallback(() => {
    setStartGame(true);
    setLose(false);
    setWinner(false);
    setEqually(false);
    setResultInformation(null);
    dispatch(startGameCards);
    dispatch(removeCards);
  }, [dispatch])

  return (
    <div className={style.homePage}>
     {!resultInformation &&<p className={style.title}>
        Who will win?
        <span>Play the game and try your luck!</span>
      </p>}
      {resultInformation && <p className={style.resultInformtion}>
        {resultInformation}
      </p>}
      <p className={style.balance}>Your balance: {currentBalance}</p>
      <div className={style.content}>
        <div className={`${style.card} ${!startGame ? style.showCard : ''}`}>
          <Card url={cards ? cards[LEFT].image : ''} />
          {startGame && <Button onClick={handleClick(LEFT)}>Left</Button>}
        </div>
        {!startGame && <Button onClick={handleClickStartGame}>Start Game</Button>}
        <div className={`${style.card} ${!startGame ? style.showCard : ''}`}>
          {startGame && <Button onClick={handleClick(RIGHT)}>Right</Button>}
          <Card url={cards ? cards[RIGHT].image : ''} />
        </div>
      </div>

    </div>
  )
}

export default HomePage;
