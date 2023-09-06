import { IconInstagram, IconTelegram, IconVK, IconWhatsapp } from '@shared/icons';
import { ESocialIcon } from '@types';

export const GET_SOCIAL_ICON: Map<ESocialIcon, JSX.Element> = new Map([
  [ESocialIcon.INSTAGRAM, <IconInstagram key={'instagram'} />],
  [ESocialIcon.TELEGRAM, <IconTelegram key={'telegram'} />],
  [ESocialIcon.WHATSAPP, <IconWhatsapp key={'whatsapp'} />],
  [ESocialIcon.VK, <IconVK key={'vk'} />],
]);
