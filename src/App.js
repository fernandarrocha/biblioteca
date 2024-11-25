import logo from "./logo.svg";
import "./App.css";
import service from "./services/index";
import { useEffect, useState } from "react";
import "./services/header";

function App() {
  const [books, setBooks] = useState([{ id: "1", title: "A" }]);
  const [estante1, setEstante1] = useState([]);
  const [estante2, setEstante2] = useState([]);
  const [estante3, setEstante3] = useState([]);
  async function getBooks() {
    try {
      const result = await service.getBooks();
      console.log("Result: ", result);
      setBooks(result.data);
    } catch (err) {
      console.log("Erro: ", err);
    }
  }

  function adicionarQueroLer(book) {
    setEstante1((prev) => [...prev, book]);
  }

  function adicionarJaLido(book) {
    setEstante2((prev) => [...prev, book]);
  }

  function adicionarEstouLendo(item, numeroEstante) {
    if (numeroEstante == 1) {
      const updatedEstante = estante1.map((livro) => {
        if (livro === item) {
          const newItem = { ...item, status: "estouLendo" };
          return newItem;
        } else {
          return item;
        }
      });
      setEstante1(updatedEstante);
    } else {
    }
  }

  useEffect(() => {
    getBooks();
    console.log("Books: ", books);
  }, []);

  <header className="header">
    <h1>Estante de livros</h1>
  </header>;
  return (
    <div className="App">
      <div>
        {books &&
          books.map((book) => {
            return (
              <>
                <h1>{book.title}</h1>
                <button type="button" onClick={() => adicionarQueroLer(book)}>
                  Eu quero ler
                </button>
                <button type="button" onClick={() => adicionarJaLido(book)}>
                  Já lido
                </button>
                <button type="button" onClick={() => adicionarEstouLendo(book)}>
                  Estou lendo
                </button>
              </>
            );
          })}
        <div className="queroLer">
          <h1>Livros que eu quero ler</h1>
          {estante1 &&
            estante1.map((item) => {
              return (
                <>
                  <h1>{item.title}</h1>
                  <button
                    type="button"
                    onClick={() => adicionarEstouLendo(item, 1)}
                  >
                    Livros que estou lendo
                  </button>
                </>
              );
            })}
        </div>
        <div className="livroLido">
          <h1>Livros já lidos</h1>
          {estante2 &&
            estante2.map((item) => {
              return (
                <>
                  <h1>{item.title}</h1>
                </>
              );
            })}
        </div>
        <div className="estouLendo">
          <h1>Livros que estou lendo</h1>
          {estante1 &&
            estante1.map((item) => {
              return (
                <>
                  {item.status === "estouLendo" ? (
                    <div>{item.title}</div>
                  ) : (
                    <div></div>
                  )}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
