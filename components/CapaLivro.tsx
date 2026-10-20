import { Image, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

type CapaLivroProps = {
  id: number;
  imagem: string;
};

export default function CapaLivro(props: CapaLivroProps) {
  return (
    <Pressable onPress={() => router.push(`/livros/${props.id}`)}>
      <Image
        source={{ uri: props.imagem }}
        style={styles.imagem}
        resizeMode="cover"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imagem: {
    width: 110,
    height: 160,
    marginRight: 12,
    borderRadius: 10,
    backgroundColor: "#EAF7F8",
  },
});