import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="flex w-3/5 justify-center pt-4 pb-2 text-gray-500">
      <Link
        to={'/'}
        className="flex w-1/2 font-medium tracking-tight text-3xl">
          Jeff Gong
      </Link>
      <div className="flex flex-row-reverse w-1/2 text-lg items-center py-2 space-x-reverse space-x-8">
        <Link to={'/accomplishments'}> Resume </Link>
        <Link to={'/posts'}> Blog </Link>
      </div>
    </div>
  )
}

export default Header;
