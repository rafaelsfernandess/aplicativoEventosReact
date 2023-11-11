import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";

function CadastroEventoScreen() {
  
  return (
    <View style={styles.container}>
    <View style={styles.containerTitle}>
        <Text variant="displayMedium" style={styles.title}>Cadastre-se</Text>
    </View>
    <View style={styles.containerInputs}>
        <TextInput
            label="Nome Completo"
            value={nome}
            onChangeText={text => setNome(text)}
        />
        <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
        />
        <TextInput
            label="Senha"
            value={senha}
            onChangeText={text => setSenha(text)}
        />
        <TextInput
            label="Confirmar Senha"
            value={confirmarSenha}
            onChangeText={text => setConfirmarSenha(text)}
        />
        <View style={ styles.containerButton }> 
            <Button icon="content-save" mode="contained" buttonColor="#5DB075" onPress={() => handleSaveUser()}>
                Salvar
            </Button>
        </View>
    </View>
</View>
  );
}

export default CadastroEventoScreen;
