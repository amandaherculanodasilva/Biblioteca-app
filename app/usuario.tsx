import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import NavegacaoInferior from "../components/NavegacaoInferior";
import FuncaoVoltar from "../components/FuncaoVoltar";

export default function Usuario() {
  return (
    <View style={styles.tela}>
        <Text style={styles.titulo}>Usuário</Text>
      <NavegacaoInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#FFFFFF", justifyContent: "space-between" },
  conteudo: { padding: 18 },
  voltar: { color: "#087E8B", fontSize: 15, marginBottom: 20 },
  titulo: { color: "#17324D", fontSize: 24, fontWeight: "bold" }
});
