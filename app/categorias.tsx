import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NavegacaoInferior from "../components/NavegacaoInferior";
import FuncaoVoltar from "../components/FuncaoVoltar";

type Categoria = {
  nome: string;
  cor: string;
  icone: keyof typeof Ionicons.glyphMap;
};

const categorias: Categoria[] = [
  { nome: "Romance", cor: "#62a2b3", icone: "heart" },
  { nome: "Infantil", cor: "#62a2b3", icone: "happy" },
  { nome: "Fantasia", cor: "#62a2b3", icone: "sparkles" },
];

export default function Categorias() {
  return (
<View style={styles.tela}>
  
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.grade}>
          {categorias.map((categoria) => (
            <Pressable
              key={categoria.nome}
              style={styles.cartao}
              onPress={() => router.push({ pathname: "/livros", params: { categoria: categoria.nome } })}
            >
              <View style={[styles.bloco, { backgroundColor: categoria.cor }]}>
                <Ionicons name={categoria.icone} size={48} color="#FFFFFF" />
              </View>
              <Text style={styles.nome}>{categoria.nome}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <NavegacaoInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#FFFFFF" },
  conteudo: { padding: 16 },
  grade: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  cartao: { width: "48%", borderRadius: 12, overflow: "hidden", marginBottom: 16, borderWidth: 1, borderColor: "#030507" },
  bloco: { height: 120, alignItems: "center", justifyContent: "center" },
  nome: { padding: 13, color: "#17324D", fontSize: 16, fontWeight: "bold" }
});