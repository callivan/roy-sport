import { Info } from '@entities';
import { IconPhone } from '@shared/icons';
import { ButtonText } from '@shared/ui';

import { IPhoneProps } from './types/component';

export function Phone({ phones }: IPhoneProps) {
  return (
    <Info
      title="Телефоны:"
      data={phones.map((phone) => ({
        id: phone.id,
        name: phone.phone,
      }))}
      element={({ name }) => (
        <a href={`tel:+${name.replace(/[^0-9]/gi, '')}`}>
          <ButtonText icon={<IconPhone />}>{name}</ButtonText>
        </a>
      )}
    />
  );
}
