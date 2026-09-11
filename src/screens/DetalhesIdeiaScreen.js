import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

import { getIdeias, saveIdeias } from '../services/storage';

export default function DetalhesIdeiaScreen({ navigation, route }) {
  const { ideia, usuarioId } = route.params;

  function editarIdeia() {
    navigation.navigate('EditarIdeia', {
      ideia,
      usuarioId,
    });
  }

  function excluirIdeia() {
    Alert.alert(
      'Excluir ideia',
      'Tem certeza que deseja excluir esta ideia?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: confirmarExclusao,
        },
      ]
    );
  }

  async function confirmarExclusao() {
    try {
      const ideias = await getIdeias();

      const novasIdeias = ideias.filter(
        (item) => item.id !== ideia.id
      );

      await saveIdeias(novasIdeias);

      Alert.alert('Sucesso', 'Ideia excluída com sucesso!', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir a ideia.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.icone}>💡</Text>

      <Text style={styles.titulo}>{ideia.titulo}</Text>

      <View style={styles.categoriaContainer}>
        <Text style={styles.categoria}>{ideia.categoria}</Text>
      </View>

      <Text style={styles.label}>Descrição</Text>

      <Text style={styles.descricao}>
        {ideia.descricao}
      </Text>

      <TouchableOpacity
        style={styles.botaoEditar}
        onPress={editarIdeia}
      >
        <Text style={styles.textoBotaoEditar}>
          Editar ideia
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoExcluir}
        onPress={excluirIdeia}
      >
        <Text style={styles.textoBotaoExcluir}>
          Excluir ideia
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5FC',
    padding: 24,
    justifyContent: 'center',
  },
  icone: {
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222222',
    marginBottom: 12,
  },
  categoriaContainer: {
    alignSelf: 'center',
    backgroundColor: '#E9DFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 30,
  },
  categoria: {
    color: '#8B5CF6',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  descricao: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    fontSize: 16,
    lineHeight: 24,
    color: '#555555',
    marginBottom: 30,
  },
  botaoEditar: {
    backgroundColor: '#8B5CF6',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  textoBotaoEditar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoExcluir: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E05252',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotaoExcluir: {
    color: '#E05252',
    fontSize: 16,
    fontWeight: 'bold',
  },
});