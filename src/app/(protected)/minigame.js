import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

// Função para embaralhar o array (fora do componente)
const shuffleArray = (array) =>
  array.sort(() => Math.random() - 0.5);

export default function Minigames() {
  const [currentGame, setCurrentGame] = useState("TicTacToe");

  // ----------------- JOGO DA VELHA -----------------
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every((cell) => cell !== null)) {
      return "draw";
    }

    return null;
  };

  const handleTicTacToePress = (index) => {
    if (board[index] || checkWinner(board)) return;

    const updatedBoard = board.slice();
    updatedBoard[index] = isXTurn ? "X" : "O";

    const winner = checkWinner(updatedBoard);
    if (winner) {
      setTimeout(() => {
        if (winner === "draw") {
          Alert.alert("Empate!", "O jogo terminou em empate.");
        } else {
          Alert.alert("Parabéns!", `O jogador ${winner} venceu!`);
        }
        resetTicTacToe();
      }, 200);
    }

    setBoard(updatedBoard);
    setIsXTurn(!isXTurn);
  };

  const resetTicTacToe = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  const renderTicTacToeCell = (index) => (
    <TouchableOpacity
      style={styles.cell}
      onPress={() => handleTicTacToePress(index)}
      activeOpacity={0.7}
    >
      <Text style={styles.cellText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  const TicTacToe = () => (
    <View style={styles.gameContainer}>
      <Text style={styles.title}>Jogo da Velha</Text>
      <View style={styles.board}>
        {[...Array(9)].map((_, index) => renderTicTacToeCell(index))}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetTicTacToe}>
        <Text style={styles.resetButtonText}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );

  // ----------------- JOGO DA MEMÓRIA -----------------
  const initialCards = [
    { id: 1, value: "🐱", matched: false },
    { id: 2, value: "🐱", matched: false },
    { id: 3, value: "🐶", matched: false },
    { id: 4, value: "🐶", matched: false },
    { id: 5, value: "🦊", matched: false },
    { id: 6, value: "🦊", matched: false },
    { id: 7, value: "🐼", matched: false },
    { id: 8, value: "🐼", matched: false },
  ];

  const [cards, setCards] = useState(shuffleArray([...initialCards]));
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardPress = (index) => {
    if (selectedCards.length === 2 || cards[index].matched) return;

    const updatedSelectedCards = [...selectedCards, index];
    setSelectedCards(updatedSelectedCards);

    if (updatedSelectedCards.length === 2) {
      const [first, second] = updatedSelectedCards;
      if (cards[first].value === cards[second].value) {
        const updatedCards = cards.map((card, idx) =>
          idx === first || idx === second ? { ...card, matched: true } : card
        );
        setCards(updatedCards);
        setSelectedCards([]);
      } else {
        setTimeout(() => setSelectedCards([]), 1000);
      }
    }
  };

  const resetMemoryGame = () => {
    setCards(shuffleArray([...initialCards]));
    setSelectedCards([]);
  };

  const renderCard = (card, index) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.card,
        card.matched || selectedCards.includes(index)
          ? styles.cardFlipped
          : styles.cardBack,
      ]}
      onPress={() => handleCardPress(index)}
    >
      <Text style={styles.cardText}>
        {card.matched || selectedCards.includes(index) ? card.value : "❓"}
      </Text>
    </TouchableOpacity>
  );

  const MemoryGame = () => (
    <View style={styles.gameContainer}>
      <Text style={styles.title}>Jogo da Memória</Text>
      <View style={styles.memoryBoard}>
        {cards.map((card, index) => renderCard(card, index))}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetMemoryGame}>
        <Text style={styles.resetButtonText}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={styles.switchButton}
          onPress={() => setCurrentGame("TicTacToe")}
        >
          <Text style={styles.switchButtonText}>Jogo da Velha</Text>
          <Text style={styles.descriptionText}>2 jogadores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.switchButton}
          onPress={() => setCurrentGame("MemoryGame")}
        >
          <Text style={styles.switchButtonText}>Jogo da Memória</Text>
          <Text style={styles.descriptionText}>1 jogador</Text>
        </TouchableOpacity>
      </View>
      {currentGame === "TicTacToe" ? <TicTacToe /> : <MemoryGame />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E6E6FA",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4B0082",
    textAlign: "center",
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  switchButton: {
    alignItems: "center",
  },
  switchButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B0082",
  },
  descriptionText: {
    fontSize: 14,
    color: "#4B0082",
  },
  gameContainer: {
    alignItems: "center",
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
    height: 300,
  },
  cell: {
    width: "33.33%",
    height: "33.33%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4B0082",
  },
  cellText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#4B0082",
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: "#4B0082",
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  memoryBoard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 300,
  },
  card: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  cardBack: {
    backgroundColor: "#4B0082",
  },
  cardFlipped: {
    backgroundColor: "#FFF",
    borderColor: "#4B0082",
    borderWidth: 1,
  },
  cardText: {
    fontSize: 24,
    color: "#4B0082",
  },
});
