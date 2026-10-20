import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import NavegacaoInferior from "../components/NavegacaoInferior";
import { livros } from "../data/livros";


export default function Inicio() {
  return (
    <ImageBackground
      source={require("../assets/images/pexels-photo-13695499.avif")}
      resizeMode="cover"
      style={styles.tela}
      imageStyle={styles.imagemFundo}
    >
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.cabecalho}>
        <Pressable onPress={() => router.push("/usuario")} style={styles.botaoIcone}>
          <Ionicons name="settings-outline" size={26} color="#ffffff" />
        </Pressable>

        <Text style={styles.tituloCabecalho}>Tela inicial</Text>

        <Pressable onPress={() => router.push("/usuario")} style={styles.botaoIcone}>
          <Ionicons name="person-circle-outline" size={30} color="#eef3f3" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.conteudo}>
        <Text style={styles.secao}>Destaques da semana</Text>
        <FlatList
          data={livros}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(livro) => livro.id.toString()}
          contentContainerStyle={styles.listaDestaques}
          renderItem={({ item }) => (
  <Pressable onPress={() => router.push(`/livros/${item.id}`)}>
    <Image
  source={item.imagem}
  style={styles.capa}
  resizeMode="cover"
/>
  </Pressable>
)}
        />

        <View style={styles.balao}>
          <View style={styles.topoBalao}>
            <Ionicons name="information-circle-outline" size={24} color="#087E8B" />
            <Text style={styles.titulo}>Sobre o app Biblioteca</Text>
          </View>
          <Text style={styles.descricao}>
            O Biblioteca é um aplicativo que conecta você a um mundo de histórias. Aqui você pode pesquisar, reservar e acompanhar seus livros, além de trocar ideias com outros leitores.
            {"\n"}
            {"\n"}
            Nosso objetivo é incentivar a leitura, facilitar o acesso aos livros e criar uma comunidade de leitores apaixonados por boas histórias.
          </Text>
        </View>

        <Text style={styles.secao}>Livros emprestados no momento</Text>
        {livros
          .filter((livro) => livro.status === "Emprestado")
          .map((livro, indice) => (
            <Pressable
              key={livro.id}
              style={styles.emprestimo}
              onPress={() => router.push(`/livros/${livro.id}`)}
            >
              <Image source={livro.imagem} style={styles.miniCapa} />

              <View style={styles.infoEmprestimo}>
                <Text style={styles.emprestimoTitulo}>{livro.titulo}</Text>
                <Text style={styles.dado}>{livro.autor}</Text>
                <Text style={styles.dado}>Pegou em: {indice === 0 ? "05/10/2026" : "08/10/2026"}</Text>
                <Text style={styles.dado}>Devolver em: {indice === 0 ? "19/10/2026" : "22/10/2026"}</Text>
              </View>

              <Ionicons name="chevron-forward" size={22} color="#087E8B" />
            </Pressable>
          ))}
      </ScrollView>

      <NavegacaoInferior />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#2b2622" },
imagemFundo: { opacity: 0.55, width: "100%", height: "100%" },
conteudo: { paddingBottom: 12 },

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: "rgba(83, 167, 173, 0)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(83, 167, 173, 0.02)",
  },
  botaoIcone: { width: 40, alignItems: "center"},
  tituloCabecalho: { flex: 1, textAlign: "center", color: "#f8fafc", fontSize: 20, fontWeight: "bold" },

 secao: { color: "#f4f4f5", fontSize: 19, fontWeight: "bold", marginHorizontal: 16, marginTop: 18, marginBottom: 10 },
  listaDestaques: { paddingHorizontal: 16 },
  capa: {
    width: 110,
    height: 160,
    marginRight: 12,
    borderRadius: 10,
    backgroundColor: "#EAF7F8",
  },

  balao: {
    margin: 16,
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#C8E7E9",
  },
  topoBalao: { flexDirection: "row", alignItems: "center", gap: 8 },
  titulo: { flex: 1, color: "#0B4F8A", fontSize: 20, fontWeight: "bold" },
  descricao: { color: "#0B4F8A", fontSize: 15, lineHeight: 22, marginTop: 12, fontWeight: "600" },

  emprestimo: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DCE5EC",
    borderRadius: 10,
  },
  miniCapa: {
    width: 50,
    height: 70,
    borderRadius: 6,
    backgroundColor: "#EAF7F8",
  },
  infoEmprestimo: { flex: 1, marginLeft: 12 },
  emprestimoTitulo: { color: "#0B4F8A", fontWeight: "bold", fontSize: 15 },
  dado: { color: "#0B4F8A", marginTop: 3, fontSize: 13, fontWeight: "600" },
});