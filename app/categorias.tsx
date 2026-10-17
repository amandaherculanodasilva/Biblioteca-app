import { router } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import NavegacaoInferior from "../components/NavegacaoInferior";

const categorias = [
  { nome: "Romance" },
  { nome: "Infantil" },
  { nome: "Fantasia" }
];

export default function Categorias() {
  return (
    <View style={styles.tela}>
      <View style={styles.topo}>
        <Pressable onPress={() => router.back()}><Text style={styles.voltar}>‹ Voltar</Text></Pressable>
        <Text style={styles.titulo}>Categorias</Text>
      </View>
      <ScrollView contentContainerStyle={styles.conteudo}>
        {categorias.map((categoria, indice) => (
          <Pressable
            key={categoria.nome}
            style={styles.cartao}
            onPress={() => router.push({ pathname: "/livros", params: { categoria: categoria.nome } })}
          >
            <Image
              source={{ uri: [
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
                "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600",
                "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600"
              ][indice] }}
              style={styles.imagem}
            />
            <Text style={styles.nome}>{categoria.nome}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <NavegacaoInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#FFFFFF" },
  topo: { flexDirection: "row", alignItems: "center", padding: 16 },
  voltar: { color: "#087E8B", fontSize: 15, width: 76 },
  titulo: { color: "#17324D", fontSize: 22, fontWeight: "bold" },
  conteudo: { padding: 16 },
  cartao: { borderRadius: 12, overflow: "hidden", marginBottom: 16, borderWidth: 1, borderColor: "#DCE5EC" },
  imagem: { width: "100%", height: 135, backgroundColor: "#EAF7F8" },
  nome: { padding: 13, color: "#17324D", fontSize: 17, fontWeight: "bold" }
});
