import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#087E8B" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: { backgroundColor: "#F5F8FA" }
        }}
      >
        <Stack.Screen name="index" options={{ title: "Minha Biblioteca" }} />
        <Stack.Screen name="livros/index" options={{ title: "Catálogo de livros" }} />
        <Stack.Screen name="livros/[id]" options={{ title: "Detalhes do livro" }} />
        <Stack.Screen name="categorias" options={{ title: "Categorias" }} />
        <Stack.Screen name="chat" options={{ title: "Chat" }} />
        <Stack.Screen name="usuario" options={{ title: "Usuário" }} />
      </Stack>
    </>
  );
}
