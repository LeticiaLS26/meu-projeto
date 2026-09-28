import './Footer.css'; // Importando o CSS no topo

export function Footer() {
  // Obtendo o ano atual dinamicamente
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="pokedex-footer">
      {/* Parágrafo com texto dinâmico */}
      <p>© {anoAtual} PokéAgenda. Dados consumidos da PokéAPI.</p>
      
      {/* Navegação com acessibilidade */}
      <nav aria-label="Links de documentação e código fonte">
        {/* Link para a PokéAPI */}
        <a 
          href="https://pokeapi.co" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Acessar site oficial da PokéAPI"
        >
          PokéAPI
        </a>

        {/* Link para o GitHub */}
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Ver código fonte no GitHub"
        >
          GitHub
        </a>
      </nav>
    </footer>
  );
}