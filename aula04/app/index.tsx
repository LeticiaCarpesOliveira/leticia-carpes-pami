import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Index() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function exibirMensagem() {
    if (nome.trim() === '' && email.trim() === '') {
      setMensagem('Por favor, digite seu nome e email!');
    } else {
      setMensagem(`Seja bem-vindo(a), ${nome}! Seu email é ${email}`);
    }
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Formulário de Contato</Text>

      <TextInput
        style={estilos.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={estilos.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={estilos.botao} onPress={exibirMensagem}>
        <Text style={estilos.textoBotao}>Enviar</Text>
      </TouchableOpacity>

      {mensagem !== '' && <Text style={estilos.mensagem}>{mensagem}</Text>}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '75%',
    borderColor: 'transparent',
    outlineStyle: 'none',
    borderWidth: 0,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
  },
  botao: {
    backgroundColor: '#000000',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
