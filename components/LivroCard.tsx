import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import StatusLivro from "./StatusLivro";

type Props = {
  id: number;
  titulo: string;
  autor: string;
  imagem: ImageSourcePropType;
  status: string;
};

export default function LivroCard(props: Props) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/livros/${props.id}`)}
    >
      <Image source={props.imagem} style={styles.capa} />
      <View style={styles.informacoes}>
        <Text style={styles.titulo}>{props.titulo}</Text>
        <Text style={styles.autor}>{props.autor}</Text>
        <StatusLivro status={props.status} />
        <Text style={styles.abrir}>Ver detalhes ›</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E3EAF0"
  },
  capa: {
    width: 84,
    height: 118,
    backgroundColor: "#F1F5F9",
    borderRadius: 6
  },
  informacoes: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: "center"
  },
  titulo: {
    color: "#17324D",
    fontSize: 16,
    fontWeight: "bold"
  },
  autor: {
    color: "#526579",
    marginTop: 5
  },
  abrir: {
    color: "#087E8B",
    fontWeight: "bold",
    marginTop: 9
  }
});
