import { Text, StyleSheet } from "react-native";

type Props = {
  status: string;
};

export default function StatusLivro({ status }: Props) {
  const disponivel = status === "Disponível";

  return (
    <Text style={[styles.status, disponivel ? styles.disponivel : styles.emprestado]}>
      {status}
    </Text>
  );
}

const styles = StyleSheet.create({
  status: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    overflow: "hidden",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 6
  },
  disponivel: {
    color: "#14532D",
    backgroundColor: "#DCFCE7"
  },
  emprestado: {
    color: "#9A3412",
    backgroundColor: "#FFEDD5"
  }
});
