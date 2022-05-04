import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="flex w-full xl:w-3/5 justify-center items-center pt-4 pb-2 text-gray-500">
      <Link
        to={'/'}
        className="flex w-1/2 font-medium tracking-tight text-xl xl:text-3xl px-4">
          Jeff Gong
      </Link>
      <div className="flex flex-row-reverse w-1/2 text-md xl:text-lg items-center py-2 space-x-reverse space-x-4 px-4">
        <Link to={'/accomplishments'}> Resume </Link>
        <Link to={'/posts'}> Blog </Link>
      </div>
    </div>
  )
}

export default Header;
