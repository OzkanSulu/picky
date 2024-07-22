import Image from 'next/image'


interface SearchButtonProps {
  
  search:string
}

const SearchButton: React.FC<SearchButtonProps> = ( {search} ) => {
    
  return (
    <button
      type='submit'
      disabled={search===''}
      className='p-0 m-0 border-none bg-transparent cursor-pointer'
    >
      <Image
        src='/search@3x.png'
        alt='Search Icon'
        width={20}
        height={20}
        className='w-4 h-4 lg:w-5 lg:h-5'
      />
    </button>
  );
};

export default SearchButton;