import { useNavigate } from 'react-router-dom';
import Button from '../button';

export const ButtonSignout = () => {
  const navigate = useNavigate();

  const signOut = () => {
    //TODO: Implement logic to sign out. remove token from localstorage and delete cookie.
    navigate('/');
  };

  return (
    <div className='w-full px-6 pb-7 flex justify-center'>
      {/* A ESTE BOTON HAY QUE CAMBIARLO POR EL BOTON "secundario". */}
      <Button
        type='button'
        className='border-2 border-violet-700 bg-white-100 p-4 text-violet-700 w-full rounded-xl font-semibold text-xl tracking-wider'
        label='Cerrar sesión'
        onClick={signOut}
      />
    </div>
  );
};
