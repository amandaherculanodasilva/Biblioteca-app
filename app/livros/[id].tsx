import { router, useLocalSearchParams } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { livros } from "../../data/livros";
import StatusLivro from "../../components/StatusLivro";
import NavegacaoInferior from "../../components/NavegacaoInferior";

export default function DetalhesLivro() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const livro = livros.find((item) => item.id === Number(id));

  return (
    <View style={styles.tela}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <Pressable onPress={() => router.back()}><Text style={styles.voltar}>‹ Voltar</Text></Pressable>
        {!livro ? (
          <Text style={styles.titulo}>Livro não encontrado.</Text>
        ) : (
          <>
            <Image source={livro.imagem} style={styles.capa} resizeMode="contain" />
            <Text style={styles.titulo}>{livro.titulo}</Text>
            <Text style={styles.dado}>Autor: {livro.autor}</Text>
            <Text style={styles.descricao}>{livro.descricao}</Text>
            <Text style={styles.dado}>Avaliação: {"★".repeat(livro.avaliacao)}</Text>
            <Text style={styles.dado}>Quantidade de páginas: {livro.paginas}</Text>
            <Text style={styles.dado}>Categoria: {livro.categoria}</Text>
            <View style={styles.status}><Text style={styles.dado}>Situação: </Text><StatusLivro status={livro.status} /></View>
          </>
        )}
      </ScrollView>
      <NavegacaoInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#FFFFFF" },
  conteudo: { padding: 18 },
  voltar: { color: "#087E8B", fontSize: 15, marginBottom: 16 },
  capa: { width: 150, height: 210, alignSelf: "center", marginBottom: 18 },
  titulo: { color: "#17324D", fontSize: 23, fontWeight: "bold", textAlign: "center", marginBottom: 12 },
  dado: { color: "#526579", marginTop: 9, fontSize: 15 },
  descricao: { color: "#526579", fontSize: 15, lineHeight: 22, marginTop: 12 },
  status: { flexDirection: "row", alignItems: "center", marginTop: 8 }
});
