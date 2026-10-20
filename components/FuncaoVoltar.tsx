import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type CabecalhoVoltarProps = {
  titulo: string;
};

export default function CabecalhoVoltar(props: CabecalhoVoltarProps) {
  return (
    <View style={styles.cabecalho}>
      <Pressable onPress={() => router.back()} style={styles.botao}>
        <Ionicons name="arrow-back" size={26} color="#087E8B" />
      </Pressable>
      <Text style={styles.titulo}>{props.titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8 },
  botao: { alignSelf: "flex-start", paddingVertical: 4 },
  titulo: { color: "#17324D", fontSize: 24, fontWeight: "bold", marginTop: 8 },
});