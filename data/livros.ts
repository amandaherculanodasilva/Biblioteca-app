export type Livro = {
  id: number;
  titulo: string;
  autor: string;
  imagem: string;
  descricao: string;
  paginas: number;
  avaliacao: number;
  categoria: string;
  status: "Disponível" | "Emprestado";
};

export const livros: Livro[] = [
  {
    id: 1,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    imagem: "https://covers.openlibrary.org/b/isbn/9788525406958-M.jpg",
    descricao: "Romance clássico da literatura brasileira que apresenta as memórias de Bentinho e sua relação com Capitu.",
    paginas: 256,
    avaliacao: 5,
    categoria: "Romance",
    status: "Disponível"
  },
  {
    id: 2,
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    imagem: "https://covers.openlibrary.org/b/isbn/9780156012195-M.jpg",
    descricao: "Uma história sensível sobre amizade, afeto e a maneira como enxergamos o mundo.",
    paginas: 96,
    avaliacao: 5,
    categoria: "Infantil",
    status: "Emprestado"
  },
  {
    id: 3,
    titulo: "O Cortiço",
    autor: "Aluísio Azevedo",
    imagem: "https://covers.openlibrary.org/b/isbn/9788535910661-M.jpg",
    descricao: "Obra do Naturalismo brasileiro que retrata a vida dos moradores de um cortiço no Rio de Janeiro.",
    paginas: 304,
    avaliacao: 4,
    categoria: "Romance",
    status: "Disponível"
  },
  {
    id: 4,
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J. K. Rowling",
    imagem: "https://covers.openlibrary.org/b/isbn/9780439708180-M.jpg",
    descricao: "O início da aventura de Harry Potter ao descobrir o mundo da magia e estudar em Hogwarts.",
    paginas: 264,
    avaliacao: 5,
    categoria: "Fantasia",
    status: "Emprestado"
  }
];
