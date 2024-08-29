document.querySelectorAll('.player').forEach(player => {
  player.addEventListener('click', function() {
    let playerId = this.dataset.player;
    document.getElementById('instructionText').textContent = getPlayerInstructions(playerId);
    document.getElementById('instructionModal').style.display = 'block';
  });
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('instructionModal').style.display = 'none';
});

function getPlayerInstructions(playerId) {
  const instructions = {
    player1: "Goalkeeper - Stay alert and keep communication with defenders.",
    player2: "Left Back - Focus on marking the right winger, overlap when possible."
    // Add more player instructions here
  };
  return instructions[playerId] || "No instructions available.";
}
