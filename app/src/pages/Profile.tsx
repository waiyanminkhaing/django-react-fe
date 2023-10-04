import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authSlice from '../store/slices/auth';
import useSWR from 'swr';
import { fetcher } from '../utils/axios';
import { UserResponse } from '../utils/types';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSWR<UserResponse>(`${process.env.REACT_APP_API_URL}/user/profile`, fetcher);

  const handleLogout = () => {
    dispatch(authSlice.actions.setLogout());
    navigate('/login');
  };
  return (
    <div className="w-full h-screen">
      <div className="w-full p-6">
        <button onClick={handleLogout} className="rounded p-2 w-32 bg-red-700 text-white">
          Logout
        </button>
      </div>
      {user.data ? (
        <div className="w-full h-full text-center items-center">
          <p className="self-center my-auto">Welcome, {user.data?.name}</p>
        </div>
      ) : (
        <p className="text-center items-center">Loading ...</p>
      )}
    </div>
  );
};

export default Profile;
