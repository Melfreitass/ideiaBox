import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

import { getUsuarios } from '../services/storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function fazerLogin() {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    try {
      const usuarios = await getUsuarios();

      const usuario = usuarios.find(
        (usuario) =>
          usuario.email === email && usuario.senha === senha
      );

      if (!usuario) {
        Alert.alert('Erro', 'E-mail ou senha incorretos.');
        return;
      }

      navigation.replace('Home', {
        usuarioId: usuario.id,
        nome: usuario.nome,
      });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível realizar o login.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>IdeaBox 💡</Text>

      <Text style={styles.subtitulo}>
        Entre na sua conta
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={fazerLogin}
      >
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.cadastro}>
          Ainda não tem uma conta? Criar conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F8F5FC',
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
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

  cadastro: {
    textAlign: 'center',
    marginTop: 20,
    color: '#8B5CF6',
    fontWeight: 'bold',
  },
});