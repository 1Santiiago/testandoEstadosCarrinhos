import '../components/Search.css'
function Search() {
  return (
    <form action="">
        <label htmlFor="search" id="search">Achar Livro </label>
        <input type="search" name="search" id="search" placeholder="Achar um livro" />
        <button>Buscar</button>
    </form>
  )
}

export default Search