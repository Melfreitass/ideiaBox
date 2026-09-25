import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { getIdeias, saveIdeias } from '../services/storage';
import { mostrarAlerta, confirmarAcao } from '../services/alerta';

export default function DetalhesIdeiaScreen({ navigation, route }) {
  const { ideia, usuarioId } = route.params;

  function voltar() {
    navigation.goBack();
  }

  function editarIdeia() {
    navigation.navigate('EditarIdeia', {
      ideia,
      usuarioId,
    });
  }

  function excluirIdeia() {
    confirmarAcao(
      'Excluir ideia',
      'Tem certeza que deseja excluir esta ideia?',
      confirmarExclusao
    );
  }

  async function confirmarExclusao() {
    try {
      const ideias = await getIdeias();

      const novasIdeias = ideias.filter(
        (item) => item.id !== ideia.id
      );

      await saveIdeias(novasIdeias);

      mostrarAlerta(
        'Sucesso',
        'Ideia excluída com sucesso!',
        () => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home', params: { usuarioId } }],
          });
        }
      );
    } catch (error) {
      mostrarAlerta(
        'Erro',
        'Não foi possível excluir a ideia.'
      );
    }
  }

  return (
    <View style={styles.container}>

      {/* SETA PARA VOLTAR */}
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={voltar}
      >
        <Text style={styles.seta}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.icone}>💡</Text>

      <Text style={styles.titulo}>
        {ideia.titulo}
      </Text>

      <View style={styles.categoriaContainer}>
        <Text style={styles.categoria}>
          {ideia.categoria}
        </Text>
      </View>

      <Text style={styles.label}>
        Descrição
      </Text>

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

  botaoVoltar: {
    position: 'absolute',
    top: 45,
    left: 24,
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#E9DFFF',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },

  seta: {
    fontSize: 38,
    color: '#8B5CF6',
    lineHeight: 40,
    marginTop: -4,
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