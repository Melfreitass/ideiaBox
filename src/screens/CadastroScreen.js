import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { getUsuarios, saveUsuarios } from '../services/storage';
import { mostrarAlerta } from '../services/alerta';

export default function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function cadastrarUsuario() {
        if (!nome || !email || !senha) {
            mostrarAlerta('Atenção', 'Preencha todos os campos.');
            return;
        }

        try {
            const usuarios = await getUsuarios();
            const emailNormalizado = email.trim().toLowerCase();

            const usuarioExiste = usuarios.some((usuario) => usuario.email === emailNormalizado);

            if (usuarioExiste) {
                mostrarAlerta('Erro', 'Esse e-mail já está cadastrado.');
                return;
            }

            const novoUsuario = {
                id: Date.now().toString(),
                nome,
                email: emailNormalizado,
                senha,
            };

            const novosUsuarios = [...usuarios, novoUsuario];

            await saveUsuarios(novosUsuarios);

            mostrarAlerta('Sucesso', 'Cadastro realizado com sucesso!', () => navigation.goBack());
        } catch (error) {
            mostrarAlerta('Erro', 'Não foi possível realizar o cadastro.');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Criar conta</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />

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

            <TouchableOpacity style={styles.botao} onPress={cadastrarUsuario}>
                <Text style={styles.textoBotao}>Criar conta</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.login}>
                    Já tem uma conta? Entrar
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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
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
    login: {
        textAlign: 'center',
        marginTop: 20,
        color: '#8B5CF6',
        fontWeight: 'bold',
    },
});
