import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { getIdeias, saveIdeias } from '../services/storage';
import { mostrarAlerta } from '../services/alerta';

export default function EditarIdeiaScreen({ navigation, route }) {
  const { ideia } = route.params;

  const [titulo, setTitulo] = useState(ideia.titulo);
  const [descricao, setDescricao] = useState(ideia.descricao);
  const [categoria, setCategoria] = useState(ideia.categoria);

  async function salvarAlteracoes() {
    if (!titulo || !descricao || !categoria) {
      mostrarAlerta('Atenção', 'Preencha todos os campos.');
      return;
    }

    try {
      const ideias = await getIdeias();

      const ideiasAtualizadas = ideias.map((item) => {
        if (item.id === ideia.id) {
          return {
            ...item,
            titulo,
            descricao,
            categoria,
          };
        }

        return item;
      });

      await saveIdeias(ideiasAtualizadas);

      mostrarAlerta('Sucesso', 'Ideia atualizada com sucesso!', () =>
        navigation.goBack()
      );
    } catch (error) {
      mostrarAlerta('Erro', 'Não foi possível atualizar a ideia.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar ideia ✏️</Text>

      <TextInput
        style={styles.input}
        placeholder="Título da ideia"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Descreva sua ideia..."
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />

      <TouchableOpacity style={styles.botao} onPress={salvarAlteracoes}>
        <Text style={styles.textoBotao}>Salvar alterações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F8F5FC',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#222222',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  textarea: {
    height: 120,
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: '#8B5CF6',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});