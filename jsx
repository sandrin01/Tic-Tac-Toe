<>
  <Board squares={board} onClick={handleClick} />
  <div style={styles}>
    <p>
      {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
    </p>
  </div>
</>
