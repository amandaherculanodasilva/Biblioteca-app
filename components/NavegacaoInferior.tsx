import { router, usePathname } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const itens = [
  { nome: "Chat", rota: "/chat", simbolo: "✉" },
  { nome: "Pesquisa", rota: "/livros", simbolo: "⌕" },
  { nome: "Início", rota: "/", simbolo: "⌂" },
  { nome: "Categorias", rota: "/categorias", simbolo: "▦" },
  { nome: "Usuário", rota: "/usuario", simbolo: "♙" }
];

export default function NavegacaoInferior() {
  const caminho = usePathname();

  return (
    <View style={styles.barra}>
      {itens.map((item) => {
        const ativo =
          caminho === item.rota ||
          (item.rota === "/livros" && caminho.startsWith("/livros"));
        return (
          <Pressable key={item.rota} style={styles.item} onPress={() => router.push(item.rota)}>
            <Text style={[styles.simbolo, ativo && styles.ativo]}>{item.simbolo}</Text>
            <Text style={[styles.nome, ativo && styles.ativo]}>{item.nome}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  barra: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#DCE5EC",
    paddingVertical: 9,
    paddingHorizontal: 2
  },
  item: { alignItems: "center", flex: 1 },
  simbolo: { fontSize: 19, color: "#526579" },
  nome: { fontSize: 9, color: "#526579", marginTop: 3 },
  ativo: { color: "#087E8B", fontWeight: "bold" }
});
