import React, { useState } from "react";
import axios from "axios";
import { NativeBaseProvider } from "native-base";
import { Select, Input, CheckIcon, Box, Modal, Button } from "native-base";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Header from "../components/HeaderPages";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import agendamento from "../assets/agendamento/agendamento.jpg";
import Buttonn from "../components/Button";
import LoginScreen from "../screens/LoginScreen";
import { MaskedTextInput } from "react-native-mask-text";

const Agendamento = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [convenio, setConvenio] = useState("");
  const [carteira, setCarteira] = useState("");
  const [unidade, setUnidade] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [dtconsulta, setDtconsulta] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [maskedValue, setMaskedValue] = useState("");
  const [unMaskedValue, setUnmaskedValue] = useState("");

  const hideDatePicker = () => {
    setVisible(false);
  };

  const showPicker = () => {
    setVisible(true);
  };

  const handleConfirm = (datetime) => {
    setDtconsulta(moment(datetime).format("DD/MM/YYYY HH:mm"));
    setVisible(false);
  };

  const AgendarConsulta = () => {
    const serverUrl = process.env.REACT_APP_BASE_URL;
    console.log("server", `${serverUrl}/agendar`);
    axios
      .post(`${serverUrl}/agendar`, {
        nome: nome.value,
        celular: celular.value,
        convenio: convenio.value,
        carteira: carteira.value,
        unidade: unidade.value,
        especialidade: especialidade.value,
        dtconsulta: dtconsulta,
      })
      .then((response) => {
        console.log(response.data);
        setMessage(response.data);
        setShowModal(true);
      });
  };

  const verificaConsulta = () => {
    if (
      message ==
      "A consulta foi agendada em nosso sistema. Por favor, comparecer no dia com a carteira do convênio e documento com foto."
    ) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Agendamento" }],
      });
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Header />
        <Image source={agendamento} style={styles.img} />
        <Text style={styles.title}>Agendar Consulta</Text>
        <Text style={styles.text}>
          Preencha o formulário abaixo para agendar uma consulta na E-Clinic.
        </Text>

        <View style={styles.textInputView}>
          <Text style={styles.texto}>Nome do Paciente</Text>
          <NativeBaseProvider>
            <Box alignItems="center">
              <Input
                mx="5"
                variant="outline"
                borderColor="#1d9bf0"
                size="lg"
                placeholder="Digite o seu nome..."
                w="100%"
                value={nome.value}
                onChangeText={(text) => setNome({ value: text, error: "" })}
              />
            </Box>
          </NativeBaseProvider>

          <Text style={styles.texto}>{"\n"}Celular para Contato</Text>
          <MaskedTextInput
            mask="(99) 99999-9999"
            placeholder="  (00) 90000-0000"
            placeholderTextColor="grey"
            value={celular.value}
            onChangeText={(text, rawText) => {
              setMaskedValue(text);
              setUnmaskedValue(rawText);
              setCelular({ value: text, error: "" });
            }}
            style={{
              marginTop: 10,
              borderWidth: 1,
              height: 45,
              fontSize: 16.5,
              borderRadius: 4,
              width: "100%",
              borderColor: "#1d9bf0",
            }}
            keyboardType="numeric"
          />

          <Text style={styles.texto}>{"\n"}Convênio Médico </Text>
          <NativeBaseProvider>
            <Box maxW="1000">
              <Select
                style={styles.textosimples}
                borderColor="#1d9bf0"
                selectedValue={convenio.value}
                minWidth="200"
                accessibilityLabel="Selecione o seu convênio"
                placeholder="Selecione o seu convênio"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                value={convenio.value}
                onValueChange={(text) =>
                  setConvenio({ value: text, error: "" })
                }
              >
                <Select.Item label="SulAmérica" value="SulAmérica" />
                <Select.Item label="mediservice" value="mediservice" />
                <Select.Item label="Cassi" value="Cassi" />
                <Select.Item label="Bradesco Saúde" value="Bradesco Saúde" />
                <Select.Item label="Amil" value="Amil" />
                <Select.Item label="One Health" value="One Health" />
                <Select.Item label="Lincx Saúde" value="Lincx Saúde" />
                <Select.Item label="CarePlus" value="CarePlus" />
                <Select.Item
                  label="NotreDame Intermédica"
                  value="NotreDame Intermédica"
                />
                <Select.Item label="Abet" value="Abet" />
                <Select.Item label="Unimed" value="Unimed" />
                <Select.Item label="Seguros Unimed" value="Seguros Unimed" />
                <Select.Item
                  label="Porto Seguro Saúde"
                  value="Porto Seguro Saúde"
                />
                <Select.Item label="Capep Saúde" value="Capep Saúde" />
                <Select.Item label="Allianz Saúde" value="Allianz Saúde" />
              </Select>
            </Box>
          </NativeBaseProvider>

          <Text style={styles.texto}>{"\n"}Número da Carteirinha</Text>
          <MaskedTextInput
            mask="9 999 999999999999 9"
            placeholder="  0 000 000000000000 0"
            placeholderTextColor="grey"
            value={carteira.value}
            onChangeText={(text, rawText) => {
              setMaskedValue(text);
              setUnmaskedValue(rawText);
              setCarteira({ value: text, error: "" });
            }}
            style={{
              marginTop: 10,
              borderWidth: 1,
              height: 45,
              fontSize: 16.5,
              borderRadius: 4,
              width: "100%",
              borderColor: "#1d9bf0",
            }}
            keyboardType="numeric"
          />

          <Text style={styles.texto}>{"\n"}Unidade Médica</Text>
          <NativeBaseProvider>
            <Box maxW="1000">
              <Select
                style={styles.textosimples}
                borderColor="#1d9bf0"
                selectedValue={unidade.value}
                minWidth="200"
                accessibilityLabel="Selecione a unidade..."
                placeholder="Selecione a unidade..."
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                value={unidade.value}
                onValueChange={(text) => setUnidade({ value: text, error: "" })}
              >
                <Select.Item label="Morumbi" value="Morumbi" />
                <Select.Item label="Paulista" value="Paulista" />
                <Select.Item label="Pompéia" value="Pompéia" />
                <Select.Item label="Sumaré" value="Sumaré" />
              </Select>
            </Box>
          </NativeBaseProvider>

          <Text style={styles.texto}>{"\n"}Especialidade</Text>
          <NativeBaseProvider>
            <Box maxW="1000">
              <Select
                style={styles.textosimples}
                borderColor="#1d9bf0"
                selectedValue={especialidade.value}
                minWidth="200"
                accessibilityLabel="Selecione a sua consulta..."
                placeholder="Selecione a sua consulta..."
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                value={especialidade.value}
                onValueChange={(text) =>
                  setEspecialidade({ value: text, error: "" })
                }
              >
                <Select.Item label="Clínico Geral" value="Clínico Geral" />
                <Select.Item label="Pediatria" value="Pediatria" />
                <Select.Item
                  label="Ginecologia e Obstetrícia"
                  value="Ginecologia e Obstetrícia"
                />
                <Select.Item
                  label="Ortopedia e Traumatologia"
                  value="Ortopedia e Traumatologia"
                />
                <Select.Item label="Cardiologia" value="Cardiologia" />
                <Select.Item label="Oftalmologia" value="Oftalmologia" />
                <Select.Item label="Endoscopia" value="Endoscopia" />
              </Select>
            </Box>
          </NativeBaseProvider>

          <Text style={styles.texto}>{"\n"}Data/Hora da Consulta</Text>
          <NativeBaseProvider>
            <Box alignItems="center">
              <Input
                mx="5"
                variant="outline"
                borderColor="#1d9bf0"
                size="lg"
                w="100%"
                value={dtconsulta}
                onChangeText={(text) =>
                  setDtconsulta({ value: text, error: "" })
                }
              />
            </Box>
            <Button
              style={{
                marginTop: 10,
                backgroundColor: "#1d9bf0",
                borderColor: "#1d9bf0",
              }}
              onPress={showPicker}
            >
              Escolha a data e horário
            </Button>
            <DateTimePicker
              isVisible={isVisible}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              mode={"datetime"}
              is24Hour={true}
            />
          </NativeBaseProvider>

          <Buttonn
            mode="contained"
            style={{
              marginTop: 24,
              backgroundColor: "#18BD5B",
              borderColor: "#18BD5B",
            }}
            onPress={() => {
              AgendarConsulta();
            }}
          >
            Agendar Consulta
          </Buttonn>
        </View>

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
            <Modal.Content maxWidth="350" maxH="1212">
              <Modal.CloseButton />
              <Modal.Header>Atenção</Modal.Header>
              <Modal.Body> {message}</Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    onPress={() => {
                      setShowModal(false);
                      verificaConsulta();
                    }}
                  >
                    Fechar
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </NativeBaseProvider>

        <Buttonn
          mode="outlined"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "startAgendamento" }],
            })
          }
        >
          Sair
        </Buttonn>
      </View>
    </ScrollView>
  );
};

export default Agendamento;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
  },
  texto: {
    color: "#1d9bf0",
    textAlign: "justify",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    color: "#1d9bf0",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
  img: {
    width: "100%",
    height: 250,
  },
  text: {
    color: "#737680",
    margin: 20,
    textAlign: "justify",
    fontSize: 22,
  },
  textInputView: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 500,
  },
  input: {
    fontSize: 18,
    width: "100%",
    height: 55,
    margin: 12,
    borderWidth: 1,
    borderColor: "",
    borderRadius: 5,
  },
  textosimples: {
    fontSize: 18,
  },
  buttonView: {
    paddingVertical: 15,
  },
});
