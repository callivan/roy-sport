import { Info } from '@entities';
import { ButtonText } from '@shared/ui';
import { GET_SOCIAL_ICON } from '@shared/utils';

import { ISocialProps } from './types/component';

export function Social({ socials }: ISocialProps) {
  return (
    <Info
      title="Социальные сети:"
      data={socials.map((social) => ({
        ...social,
        id: social.id,
        name: social.name,
      }))}
      element={({ name, link, icon }) => (
        <a href={link} target="_blank">
          <ButtonText icon={GET_SOCIAL_ICON.get(icon)}>{name}</ButtonText>
        </a>
      )}
    />
  );
}
