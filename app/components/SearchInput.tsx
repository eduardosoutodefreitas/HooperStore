import { BsSearch } from 'react-icons/bs'
// action="/" method="GET" atributos do form?
export default function SearchInput() {
  return (
    <form className="flex items-center">
      <input
        type="type"
        className="px-7 py-3 w-[350px] border border-lightGray rounded-3xl shadow-sm outline-none focus:border-primary placeholder:text-sm placeholder:font-light "
        placeholder="Procure um produto ou Categoria "
      />
      <button className="-ml-12">
        <BsSearch title="Search Icon" size={20} color="#202020" />
      </button>
    </form>
  )
}
