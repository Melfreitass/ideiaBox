import { Platform, Alert } from 'react-native';

export function mostrarAlerta(titulo, mensagem, aoConfirmar) {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n${mensagem}`);
    if (aoConfirmar) aoConfirmar();
  } else {
    Alert.alert(
      titulo,
      mensagem,
      aoConfirmar ? [{ text: 'OK', onPress: aoConfirmar }] : undefined
    );
  }
}

export function confirmarAcao(titulo, mensagem, aoConfirmar) {
  if (Platform.OS === 'web') {
    const confirmado = window.confirm(`${titulo}\n${mensagem}`);
    if (confirmado && aoConfirmar) aoConfirmar();
  } else {
    Alert.alert(titulo, mensagem, [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', style: 'destructive', onPress: aoConfirmar },
    ]);
  }
}