import useNavigation from "../hooks/use-navigation";

;

function Router({ path, children}) {
  const { currentPath } = useNavigation();

  if(path === currentPath) return children;

  return null;
};


export default Router;