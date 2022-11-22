import React, { useState } from "react";
import axios from "axios";
import { NativeBaseProvider } from "native-base";
import { Button, Modal } from "native-base";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Buttonn from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    const serverUrl = process.env.REACT_APP_BASE_URL;
    axios
      .post(`${serverUrl}/register`, {
        name: name.value,
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        console.log(response.data);
        setMessage(response.data);
        setShowModal(true);
      });
  };

  const verificaCadastro = () => {
    if (message == "Email cadastrado com sucesso!") {
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Criar uma conta</Header>
      <TextInput
        label="Nome completo"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Buttonn
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Cadastrar
      </Buttonn>

      <NativeBaseProvider>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          _backdrop={{
            _dark: {
              bg: "coolGray.800",
            },
            bg: "warmGray.50",
          }}
        >
          <Modal.Content maxWidth="350" maxH="212">
            <Modal.CloseButton />
            <Modal.Header>Atenção</Modal.Header>
            <Modal.Body> {message}</Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  onPress={() => {
                    setShowModal(false);
                    verificaCadastro();
                  }}
                >
                  Fechar
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </NativeBaseProvider>

      <View style={styles.row}>
        <Text>Já tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const conta = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  login_msg: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#1d9bf0",
  },
});

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: "#1d9bf0",
  },
});

const styles2 = StyleSheet.create({
  modal: {
    marginBottom: 24,
    backgroundColor: "#c0c0c0",
    margin: 10,
    padding: 50,
    borderRadius: 15,
    elevation: 5,
  },
  textoModal: {
    color: "#000",
    fontSize: 20,
  },
});
