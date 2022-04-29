import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { NavPath } from '..';
import { matchRoute } from '../utils';

export const _useNavTabHistory = (navPaths: NavPath[]) => {
  const [paths, setPaths] = useState(navPaths);
  const { pathname } = useLocation();
  
  const updateLabel = useCallback((label: string) => {
    if (label) {
      setPaths((all) => {
        const newRoutes: NavPath[] = [];
        
        for (const route of all) {
          if (matchRoute(pathname, route.link)) {
            newRoutes.push({ label, link: route.link, depth: route.depth });
            continue;
          }

          newRoutes.push(route);
        }

        return newRoutes;
      });
    }
  }, [pathname]);

  return { paths, updateLabel };
};
