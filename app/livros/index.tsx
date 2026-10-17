import { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { livros } from "../../data/livros";
import LivroCard from "../../components/LivroCard";
import NavegacaoInferior from "../../components/NavegacaoInferior";

export default function Pesquisa() {
  const [pesquisa, setPesquisa] = useState("");
  const params = useLocalSearchParams<{ categoria?: string | string[] }>();
  const categoria = Array.isArray(params.categoria) ? params.categoria[0] : params.categoria;
  const listaLivros = livros
    .filter((livro) => livro.titulo.toLowerCase().includes(pesquisa.toLowerCase()))
    .filter((livro) => !categoria || livro.categoria === categoria)
    .sort((a, b) => a.titulo.localeCompare(b.titulo));

  return (
    <View style={styles.tela}>
      <View style={styles.topo}>
        <Pressable onPress={() => router.back()}><Text style={styles.voltar}>‹ Voltar</Text></Pressable>
        <Text style={styles.titulo}>Tela de pesquisa</Text>
      </View>
      <ScrollView contentContainerStyle={styles.conteudo}>
        {categoria ? <Text style={styles.categoria}>Categoria: {categoria}</Text> : null}
        <TextInput
          style={styles.campo}
          placeholder="Pesquisar livro..."
          value={pesquisa}
          onChangeText={setPesquisa}
        />
        {listaLivros.length > 0
          ? listaLivros.map((livro) => (
              <LivroCard key={livro.id} id={livro.id} titulo={livro.titulo} autor={livro.autor} imagem={livro.imagem} status={livro.status} />
            ))
          : <Text style={styles.vazio}>Nenhum livro encontrado.</Text>}
      </ScrollView>
      <NavegacaoInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#FFFFFF" },
  topo: { flexDirection: "row", alignItems: "center", padding: 16 },
  voltar: { color: "#087E8B", fontSize: 15, width: 76 },
  titulo: { color: "#17324D", fontSize: 21, fontWeight: "bold" },
  conteudo: { padding: 16 },
  categoria: { color: "#087E8B", marginBottom: 10 },
  campo: { backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#A8C9CF", borderRadius: 10, padding: 12, marginBottom: 16, color: "#17324D" },
  vazio: { color: "#526579", textAlign: "center", marginTop: 20 }
});
