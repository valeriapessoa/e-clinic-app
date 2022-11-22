import React, { useState } from "react";
import axios from "axios";
import { NativeBaseProvider } from "native-base";
import { Button, Modal } from "native-base";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Buttonn from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const serverUrl = process.env.REACT_APP_BASE_URL;
    console.log("server", `${serverUrl}/login`);
    axios
      .post(`${serverUrl}/login`, {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        console.log(response.data);
        setMessage(response.data);
        setShowModal(true);
      });
  };

  const verificaLogin = () => {
    if (message == "Usuário logado com sucesso!") {
      navigation.reset({
        index: 0,
        routes: [{ name: "Agendamento" }],
      });
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Bem vindo de volta</Header>
      <TextInput
        label="E-mail"
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Esqueceu seu senha?</Text>
        </TouchableOpacity>
      </View>
      <Buttonn
        mode="contained"
        onPress={() => {
          onLoginPressed();
        }}
      >
        Login
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
                    verificaLogin();
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
        <Text>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}> Registre-se</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
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
