export interface IMediaContextProvidedProps {
  children: React.ReactNode;
}

export type TMediaContextProps = Record<EMedias, boolean>;

enum EMedias {
  IS_DESKTOP = 'isDesktop',
  IS_TABLET_BIG = 'isTabletBig',
  IS_TABLET_SMALL = 'isTableSmall',
  IS_MOBILE_BIG = 'isMobileBig',
  IS_MOBILE_SMALL = 'isMobileSmall',
}
