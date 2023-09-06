export interface IAddress {
  id: string;
  address: string;
  latitude: number;
  longitude: number;
}

export interface IPhone {
  id: string;
  phone: string;
  active: boolean;
}

export enum ESocialIcon {
  TELEGRAM = 'telegram',
  WHATSAPP = 'whatsapp',
  INSTAGRAM = 'instagram',
  VK = 'vk',
}

export interface ISocial {
  id: string;
  name: string;
  link: string;
  icon: ESocialIcon;
}
