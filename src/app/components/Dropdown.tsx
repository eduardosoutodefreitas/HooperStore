interface DropdownProps {
    options: string[]
    active: boolean
    classes?: string
  }
  const Dropdown = ({ options, active, classes }: DropdownProps) => {
    return (
      <div
        className={` flex flex-col gap-x-9 px-4 py-2 bg-white rounded-md w-[110px] absolute 
        -left-2.5 transition-all  ease-in duration-150 z-30
        ${active ? 'opacity-100 top-8 ' : 'opacity-0 top-5'} ${classes}`}>
        {options.map((option: string) => (
          <a href="#" key={option} className={`font-light hover:font-normal`}>
            {option}
          </a>
        ))}
      </div>
    )
  }
  
  export default Dropdown
  