import { useContext } from 'react';
import NavigatioContext from'../context/navigation';

function useNavigation() {
  return useContext(NavigatioContext);
}

export default useNavigation;