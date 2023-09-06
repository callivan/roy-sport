import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

import { IMapProps } from './types/component';

export function MapComponent({ coords }: IMapProps) {
  return (
    <YMaps>
      <Map width="100%" height="100%" state={{ center: coords, zoom: 17 }}>
        <Placemark geometry={coords} />
      </Map>
    </YMaps>
  );
}
