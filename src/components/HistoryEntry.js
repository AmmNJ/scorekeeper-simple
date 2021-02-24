import React from 'react'
import styled from 'styled-components/macro'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryEntryGrid>
      {nameOfGame}
      {players.map((player, index) => (
        <HistroyPlayerFlexbox key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </HistroyPlayerFlexbox>
      ))}
    </HistoryEntryGrid>
  )
}

const HistoryEntryGrid = styled.section`
  display: grid;
  gap: 10px;
`

const HistroyPlayerFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
`
