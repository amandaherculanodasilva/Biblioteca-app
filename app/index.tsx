import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import NavegacaoInferior from "../components/NavegacaoInferior";
import { livros } from "../data/livros";

export default function Inicio() {
  return (
    <View style={styles.tela}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <ImageBackground
          source={require("../assets/images/inicio.jpg")}
          resizeMode="cover"
          style={styles.fundo}
          imageStyle={styles.imagemFundo}
        >
          <View style={styles.topo}>
            <Pressable onPress={() => router.push("/usuario")}><Text style={styles.icone}>⚙</Text></Pressable>
            <Text style={styles.titulo}>Minha Biblioteca</Text>
            <Pressable onPress={() => router.push("/usuario")}><Text style={styles.icone}>♙</Text></Pressable>
          </View>
          <Text style={styles.descricao}>
            Um espaço para pesquisar livros, conhecer novas histórias e acompanhar os empréstimos.
          </Text>
        </ImageBackground>

        <Text style={styles.secao}>Livros em destaque</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {livros.map((livro) => (
            <Pressable key={livro.id} style={styles.destaque} onPress={() => router.push(`/livros/${livro.id}`)}>
              <Text style={styles.destaqueTitulo}>{livro.titulo}</Text>
              <Text style={styles.destaqueAutor}>{livro.autor}</Text>
              <Text style={styles.link}>Ver detalhes ›</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.secao}>Livros emprestados</Text>
        {livros.filter((livro) => livro.status === "Emprestado").map((livro, indice) => (
          <View key={livro.id} style={styles.emprestimo}>
            <Text style={styles.destaqueTitulo}>{livro.titulo}</Text>
            <Text style={styles.dado}>Empréstimo: {indice === 0 ? "05/10/2026" : "08/10/2026"}</Text>
            <Text style={styles.dado}>Devolução: {indice === 0 ? "19/10/2026" : "22/10/2026"}</Text>
          </View>
        ))}
      </ScrollView>
      <NavegacaoInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#FFFFFF" },
  conteudo: { paddingBottom: 12 },
  fundo: { padding: 18, paddingTop: 20, minHeight: 210, justifyContent: "center" },
  imagemFundo: { opacity: 0.32 },
  topo: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  titulo: { flex: 1, textAlign: "center", color: "#17324D", fontSize: 22, fontWeight: "bold" },
  icone: { color: "#087E8B", fontSize: 23, paddingHorizontal: 4 },
  descricao: { color: "#17324D", fontSize: 15, lineHeight: 22, marginTop: 16 },
  secao: { color: "#17324D", fontSize: 19, fontWeight: "bold", marginHorizontal: 16, marginTop: 18, marginBottom: 10 },
  destaque: { width: 180, padding: 14, marginLeft: 12, backgroundColor: "#EAF7F8", borderRadius: 12, borderWidth: 1, borderColor: "#C8E7E9" },
  destaqueTitulo: { color: "#17324D", fontWeight: "bold", fontSize: 15 },
  destaqueAutor: { color: "#526579", marginTop: 6, fontSize: 13 },
  link: { color: "#087E8B", marginTop: 12, fontWeight: "bold" },
  emprestimo: { marginHorizontal: 16, marginBottom: 9, padding: 13, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#DCE5EC", borderRadius: 10 },
  dado: { color: "#526579", marginTop: 5, fontSize: 13 }
});
