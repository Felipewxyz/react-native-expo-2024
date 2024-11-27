import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DiarioDeViagem() {
  const [diarios, setDiarios] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSaveDiary = () => {
    if (!titulo || !descricao || !data) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const newDiary = {
      titulo,
      descricao,
      data,
      isLiked,
    };

    // Se estiver editando, atualize o diário existente, senão crie um novo
    if (editingIndex !== null) {
      const updatedDiarios = diarios.map((diario, index) =>
        index === editingIndex ? newDiary : diario
      );
      setDiarios(updatedDiarios);
      setEditingIndex(null);
    } else {
      setDiarios([...diarios, newDiary]);
    }

    // Limpa os campos após salvar
    setTitulo('');
    setDescricao('');
    setData('');
    setIsLiked(false);
  };

  const handleDeleteDiary = (index) => {
    const updatedDiarios = diarios.filter((_, idx) => idx !== index);
    setDiarios(updatedDiarios); // Atualiza a lista de diários
  };

  const handleEditDiary = (index) => {
    const diario = diarios[index];
    setTitulo(diario.titulo);
    setDescricao(diario.descricao);
    setData(diario.data);
    setIsLiked(diario.isLiked);
    setEditingIndex(index);
  };

  const handleLikeDiary = (index) => {
    const updatedDiarios = diarios.map((diario, idx) =>
      idx === index ? { ...diario, isLiked: !diario.isLiked } : diario
    );
    setDiarios(updatedDiarios);
  };

  const renderDiary = ({ item, index }) => (
    <View style={styles.diaryCard}>
      <Text style={styles.diaryTitle}>{item.titulo}</Text>
      <Text style={styles.diaryText}>{item.descricao}</Text>
      <Text style={styles.diaryDate}>{item.data}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleLikeDiary(index)}>
          <Ionicons
            name={item.isLiked ? 'heart' : 'heart-outline'}
            size={24}
            color={item.isLiked ? 'red' : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEditDiary(index)}>
          <Text style={styles.editButton}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteDiary(index)}>
          <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Diário de Viagem</Text>

      {/* Campo de data com formato DD/MM/AAAA */}
      <TextInput
        style={styles.input}
        placeholder="DD/MM/AAAA"
        selectionColor="#4B0082"
        value={data}
        onChangeText={setData}
      />

      {/* Titulo do diário */}
      <TextInput
        style={styles.input}
        placeholder="Nome do Diário"
        selectionColor="#4B0082"
        value={titulo}
        onChangeText={setTitulo}
      />

      {/* Descrição do diário com caixa maior */}
      <TextInput
        style={[styles.input, styles.largeInput]}
        placeholder="O que você fez hoje?"
        selectionColor="#4B0082"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      {/* Botão para salvar o diário */}
      <TouchableOpacity style={styles.button} onPress={handleSaveDiary}>
        <Text style={styles.buttonText}>
          {editingIndex !== null ? 'Atualizar Diário' : 'Salvar Diário'}
        </Text>
      </TouchableOpacity>

      {/* Lista de Diários */}
      <FlatList
        data={diarios}
        renderItem={renderDiary}
        keyExtractor={(item, index) => index.toString()}
        style={styles.diaryList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  largeInput: {
    height: 100,
    textAlignVertical: 'top', // Alinha o texto no topo
  },
  button: {
    backgroundColor: '#4B0082',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  diaryCard: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  diaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  diaryText: {
    fontSize: 14,
    marginBottom: 5,
  },
  diaryDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    color: '#4B0082',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  diaryList: {
    marginTop: 20,
  },
});



