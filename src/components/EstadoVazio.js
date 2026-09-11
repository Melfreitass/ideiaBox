import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function EstadoVazio({ onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icone}>💡</Text>

      <Text style={styles.titulo}>
        Nenhuma ideia ainda!
      </Text>

      <Text style={styles.texto}>
        Você ainda não salvou nenhuma ideia.
        Que tal registrar uma agora?
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={onPress}
      >
        <Text style={styles.textoBotao}>
          Criar minha primeira ideia
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    flex: 1,
  },

  icone: {
    fontSize: 50,
    marginBottom: 15,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  texto: {
    textAlign: 'center',
    color: '#666666',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 12,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});