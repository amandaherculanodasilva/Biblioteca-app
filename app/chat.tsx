import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NavegacaoInferior from "../components/NavegacaoInferior";

type Publicacao = { id: number; livro: string; texto: string; hashtag: string; curtidas: number };

export default function Chat() {
  const [publicacoes, setPublicacoes] = useState<Publicacao[]>([
    { id: 1, livro: "Dom Casmurro", texto: "Uma leitura que faz pensar sobre memória e confiança.", hashtag: "#LiteraturaBrasileira", curtidas: 3 },
    { id: 2, livro: "O Pequeno Príncipe", texto: "Uma história simples, bonita e cheia de significado.", hashtag: "#Leitura", curtidas: 5 }
  ]);
  const [livro, setLivro] = useState("");
  const [texto, setTexto] = useState("");

  function criarResenha() {
    if (livro.trim() && texto.trim()) {
      setPublicacoes([
        { id: Date.now(), livro: livro.trim(), texto: texto.trim(), hashtag: "#MinhaResenha", curtidas: 0 },
        ...publicacoes
      ]);
      setLivro("");
      setTexto("");
    }
  }

  function curtir(id: number) {
    setPublicacoes(publicacoes.map((p) => p.id === id ? { ...p, curtidas: p.curtidas + 1 } : p));
  }

  return (
    <View style={styles.tela}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <Text style={styles.secao}>Criar uma resenha</Text>
        <TextInput style={styles.campo} placeholder="Nome do livro" value={livro} onChangeText={setLivro} />
        <TextInput style={[styles.campo, styles.multilinha]} placeholder="Escreva sua resenha" value={texto} onChangeText={setTexto} multiline />
        <Pressable style={styles.botao} onPress={criarResenha}>
          <Text style={styles.textoBotao}>Publicar resenha</Text>
        </Pressable>

        <Text style={styles.secao}>Publicações</Text>
        {publicacoes.map((p) => (
          <View key={p.id} style={styles.publicacao}>
            <Text style={styles.livro}>{p.livro}</Text>
            <Text style={styles.texto}>{p.texto}</Text>
            <Text style={styles.hashtag}>{p.hashtag}</Text>
            <Pressable onPress={() => curtir(p.id)} style={styles.curtir}>
              <Ionicons name="heart-outline" size={20} color="#087E8B" />
              <Text style={styles.curtirTexto}>Curtir ({p.curtidas})</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
      <NavegacaoInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#FFFFFF" },
  conteudo: { padding: 16 },
  secao: { color: "#17324D", fontSize: 18, fontWeight: "bold", marginBottom: 10, marginTop: 8 },
  campo: { borderWidth: 1, borderColor: "#A8C9CF", borderRadius: 10, padding: 12, marginBottom: 10, color: "#17324D" },
  multilinha: { minHeight: 75, textAlignVertical: "top" },
  botao: { backgroundColor: "#087E8B", padding: 13, borderRadius: 10, alignItems: "center", marginBottom: 18 },
  textoBotao: { color: "#FFFFFF", fontWeight: "bold" },
  publicacao: { borderWidth: 1, borderColor: "#DCE5EC", borderRadius: 12, padding: 14, marginBottom: 12, backgroundColor: "#FFFFFF" },
  livro: { color: "#17324D", fontWeight: "bold", fontSize: 16 },
  texto: { color: "#526579", marginTop: 8, lineHeight: 21 },
  hashtag: { color: "#087E8B", marginTop: 8 },
  curtir: { flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start", marginTop: 10 },
  curtirTexto: { color: "#087E8B", fontWeight: "bold" }
});