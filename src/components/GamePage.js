import styled from 'styled-components'
import Header from './Header'
import Button from './Button'
import Player from './Player'

export default function GamePage({
  nameOfGame,
  players,
  onMinus,
  onPlus,
  onReset,
  onEnd,
}) {
  return (
    <GameWrapper>
      <Header>{nameOfGame}</Header>
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onMinus={() => onMinus(index)}
          onPlus={() => onPlus(index)}
        />
      ))}

      <Button onClick={onReset}>Reset scores</Button>
      <EndGame onClick={onEnd}>End game</EndGame>
    </GameWrapper>
  )
}

const GameWrapper = styled.div`
  display: grid;
  gap: 10px;
`

const EndGame = styled(Button)`
  border: 2px solid tomato;
  background: transparent;
  color: tomato;
`
