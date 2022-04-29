import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavTabHistory } from '../../hooks/useNavTabHistory';

import { Link } from 'react-router-dom';
import { matchRoute } from '../../utils';

import * as styled from './NavTab.styled';

export type NavPath = {
  link: string;
  label?: string;
  depth?: number;
  /**
   * Inherit higher route label.
   */
  shadow?: boolean;
};

type Props = {};

export const NavTab: React.VFC<Props> = () => {
  const { pathname: location } = useLocation();
  const { paths } = useNavTabHistory();
  const [orderId, setOrderId] = useState('');
  const [storeId, setStoreId] = useState('');

  const [locationPaths, setLocationPaths] = useState<NavPath[]>([]);
  const [locationLabel, setLocationLabel] = useState('');

  useEffect(() => {

    let hidden = false;
    const updatedPaths: NavPath[] = [];
    const params = location.split('/')

    if (params.length > 3 && params[1] === 'orders') {
      setStoreId(params[2]);
      setOrderId(params[3]);
    }


    // if(storeId.length > 3 && )

    for (const path of paths) {
      const { link, shadow, label = '', depth } = path;
      const match = matchRoute(location, link);

      if (match && shadow) {
        const { length } = updatedPaths;
        if (length) {
          const { label } = updatedPaths[length - 1];
          setLocationLabel(label as string);
        }

        break;
      }

      if (match) {
        if (depth === 1) {
          setLocationLabel('Order #' + label)
        } else {
          setLocationLabel(label)
        }
      };

      const isAdd = match || location.includes(link);
      isAdd && updatedPaths.push(path);
    }
    if (!hidden) setLocationPaths(updatedPaths);
  }, [paths, location]);

  const showPaths = useMemo(() => locationPaths.length > 1, [locationPaths]);
  return (
    <styled.BodyWrapper>
      {showPaths && (
        <styled.PathContainer>
          {locationPaths.map(({ link, label, depth }) => {
            if (label === 'Support') {
              return (
                <Link key={link} to={''} children={label} onClick={(event) => event.preventDefault()} />
              )
            }
            return (
              <Link key={link} to={link.replace(':storeId', storeId).replace(':id', orderId)} children={label} />
            )
          })}
        </styled.PathContainer>
      )}
      <styled.VerticalContainer>
        <styled.Title children={locationLabel} />
        <div id="nav-tab-portal" />
      </styled.VerticalContainer>
    </styled.BodyWrapper>
  );
};
