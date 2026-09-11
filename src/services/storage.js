import AsyncStorage from '@react-native-async-storage/async-storage';

const IDEIAS_KEY = '@ideabox:ideas';
const USUARIOS_KEY = '@ideabox:users';


// ==================== IDEIAS ====================

export async function getIdeias() {
  try {
    const jsonValue = await AsyncStorage.getItem(IDEIAS_KEY);

    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }

    return [];
  } catch (error) {
    console.error('Erro ao ler ideias do AsyncStorage:', error);
    throw new Error('Não foi possível carregar as ideias.');
  }
}

export async function saveIdeias(ideias) {
  try {
    const jsonValue = JSON.stringify(ideias);
    await AsyncStorage.setItem(IDEIAS_KEY, jsonValue);
  } catch (error) {
    console.error('Erro ao salvar ideias no AsyncStorage:', error);
    throw new Error('Não foi possível salvar as ideias.');
  }
}


// ==================== USUÁRIOS ====================

export async function getUsuarios() {
  try {
    const jsonValue = await AsyncStorage.getItem(USUARIOS_KEY);

    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }

    return [];
  } catch (error) {
    console.error('Erro ao ler usuários do AsyncStorage:', error);
    throw new Error('Não foi possível carregar os usuários.');
  }
}

export async function saveUsuarios(usuarios) {
  try {
    const jsonValue = JSON.stringify(usuarios);
    await AsyncStorage.setItem(USUARIOS_KEY, jsonValue);
  } catch (error) {
    console.error('Erro ao salvar usuários no AsyncStorage:', error);
    throw new Error('Não foi possível salvar os usuários.');
  }
}