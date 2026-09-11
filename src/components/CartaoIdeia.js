import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CartaoIdeia({ ideia, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{ideia.titulo}</Text>

        <Text style={styles.categoria}>
          {ideia.categoria}
        </Text>

        <Text
          style={styles.descricao}
          numberOfLines={2}
        >
          {ideia.descricao}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    elevation: 3,
  },

  conteudo: {
    gap: 6,
  },

  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },

  categoria: {
    fontSize: 13,
    color: '#8B5CF6',
    fontWeight: '600',
  },

  descricao: {
    fontSize: 14,
    color: '#666666',
  },
});