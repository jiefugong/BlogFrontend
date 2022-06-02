import {
  CameraIcon,
  CollectionIcon,
  ChatIcon,
  HomeIcon,
  BookOpenIcon,
  LoginIcon,
  PencilAltIcon,
} from '@heroicons/react/outline'

import { useContext } from 'react';
import { useNavigate } from 'react-router';

import { GlobalContext } from '../../context/globalState';


const SideBar = () => {
  const navigate = useNavigate();
  const { loggedIn } = useContext(GlobalContext);

  const sideBarComponent = () => {
    if (loggedIn) {
      return (
        <div className="fixed top-0 left-0 flex flex-col justify-center w-1/12 h-screen bg-orange-200 hover:cursor-pointer">
          <div className="w-full h-1/6">
            <HomeIcon
              className="px-12 py-12 hover:bg-orange-300"
              onClick={() => navigate('/')}
            />
          </div>
          <div className="w-full h-1/6">
            <BookOpenIcon
              className="px-12 py-12 hover:bg-orange-300"
              onClick={() => navigate('/blog')}
            />
          </div>
          <div className="w-full h-1/6">
            <CollectionIcon
              className="px-12 py-12 hover:bg-orange-300"
              onClick={() => navigate('/projects')}
            />
          </div>
          <div className="w-full h-1/6">
            {
              !loggedIn ?
                <LoginIcon
                  className="px-12 py-12 hover:bg-orange-300"
                  onClick={() => navigate('/login')}
                />
              :
                <PencilAltIcon
                  className="px-12 py-12 hover:bg-orange-300"
                  onClick={() => navigate('/submit_post')}
                />
            }
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  return (
    sideBarComponent()
  )
}

export default SideBar;
