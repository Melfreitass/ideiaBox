import { useCallback, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { getIdeias } from '../services/storage';
import CartaoIdeia from '../components/CartaoIdeia';
import EstadoVazio from '../components/EstadoVazio';

export default function HomeScreen({ navigation, route }) {
  const { usuarioId, nome } = route.params;

  const [ideias, setIdeias] = useState([]);

  async function carregarIdeias() {
    try {
      const todasIdeias = await getIdeias();

      const minhasIdeias = todasIdeias.filter(
        (ideia) => ideia.usuarioId === usuarioId
      );

      setIdeias(minhasIdeias);
    } catch (error) {
      console.error('Erro ao carregar ideias:', error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      carregarIdeias();
    }, [])
  );

  function abrirNovaIdeia() {
    navigation.navigate('NovaIdeia', {
      usuarioId,
    });
  }

  function abrirDetalhes(ideia) {
    navigation.navigate('DetalhesIdeia', {
      ideia,
      usuarioId,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <View>
          <Text style={styles.bemVindo}>
            Olá, {nome}! 👋
          </Text>

          <Text style={styles.titulo}>
            Minhas ideias 💡
          </Text>
        </View>

        <TouchableOpacity
          style={styles.botaoPerfil}
          onPress={() =>
            navigation.navigate('Perfil', {
              nome,
            })
          }
        >
          <Text style={styles.iconePerfil}>👤</Text>
        </TouchableOpacity>
      </View>

      {ideias.length === 0 ? (
        <EstadoVazio onPress={abrirNovaIdeia} />
      ) : (
        <FlatList
          data={ideias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CartaoIdeia
              ideia={item}
              onPress={() => abrirDetalhes(item)}
            />
          )}
          contentContainerStyle={styles.lista}
          showsVerticalScrollIndicator={false}
        />
      )}

      {ideias.length > 0 && (
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={abrirNovaIdeia}
        >
          <Text style={styles.mais}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5FC',
    padding: 20,
  },

  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 15,
  },

  bemVindo: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 4,
  },

  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#222222',
  },

  botaoPerfil: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#E9DFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconePerfil: {
    fontSize: 22,
  },

  lista: {
    paddingBottom: 100,
  },

  botaoAdicionar: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  mais: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '300',
  },
});