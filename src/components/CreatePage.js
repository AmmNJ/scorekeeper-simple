import GameForm from './GameForm'

export default function CreatePage({ createGame }) {
  return (
    <div>
      <GameForm onCreateGame={createGame} />
    </div>
  )
}
