import { Info } from '@entities';
import { IconMarker } from '@shared/icons';
import { ButtonText } from '@shared/ui';

import { IAddressProps } from './types/component';

export function Address({ addresses, activeCoords, onClick }: IAddressProps) {
  return (
    <Info
      className="w-full"
      title="Адреса:"
      data={addresses.map((address) => ({
        ...address,
        id: address.id,
        name: address.address,
      }))}
      element={({ name, latitude, longitude }) => (
        <ButtonText
          onClick={() => {
            onClick([latitude, longitude]);
          }}
          icon={<IconMarker />}
          isActive={activeCoords[0] === latitude && activeCoords[1] === longitude}
        >
          {name}
        </ButtonText>
      )}
    />
  );
}
