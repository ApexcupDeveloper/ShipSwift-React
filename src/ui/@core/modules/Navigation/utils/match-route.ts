export const matchRoute = (location: string, route: string) => {
  const locations = location.substr(1).split('/');
  const routes = route.substr(1).split('/');  
  if (locations.length !== routes.length) return false;

  for (let i = 0; i < routes.length; i++) {
    const subRoute = routes[i];
    const subLocation = locations[i];
    if (subRoute[0] === ':' || subLocation === subRoute) {
      continue;
    }
    return false;
  }

  return true;
};

export const getLocationParams = (location: string, route: string, type: string) => {
  let param = ''
  const locations = location.substr(1).split('/');
  const routes = route.substr(1).split('/');  
  if (locations.length !== routes.length) return '';

  routes.map((item, i) => {
    const subRoute = routes[i];
    const subLocation = locations[i];
    if (subRoute[0] === ':' || subLocation === subRoute) {
      if(subRoute === type) {
        param = subLocation
        return subLocation
      }
    }
  })
  return param;
};