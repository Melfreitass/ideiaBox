import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function PerfilScreen({ navigation, route }) {
  const { nome } = route.params;

  function voltarParaLogin() {
    navigation.replace('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.icone}>👤</Text>
      </View>

      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.subtitulo}>Meu perfil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.valor}>{nome}</Text>
      </View>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotaoVoltar}>
          Voltar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSair}
        onPress={voltarParaLogin}
      >
        <Text style={styles.textoBotaoSair}>
          Sair da conta
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
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E9DFFF',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icone: {
    fontSize: 40,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222222',
  },
  subtitulo: {
    fontSize: 15,
    color: '#777777',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    color: '#777777',
    marginBottom: 5,
  },
  valor: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222222',
  },
  botaoVoltar: {
    backgroundColor: '#8B5CF6',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  textoBotaoVoltar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoSair: {
    padding: 16,
    alignItems: 'center',
  },
  textoBotaoSair: {
    color: '#E05252',
    fontSize: 16,
    fontWeight: 'bold',
  },
});