export const COLOR = {
  Content: `rgba(246,246,239, 1)`,
  Navbar: `rgba(255, 102, 0, 1)`,
  NavBarTitle: `rgba(34, 34, 34 ,1)`,
  DarkGrey: `rgba(130, 130, 130, 1)`,
  Span: `rgba(130, 130, 130, 1)`,
  ListTitle: `color: rgba(64, 64, 64, 0.9)`,
  Divider: `rgba(162, 162, 162, 1)`
};

export const DEVICE = {
  minMobileS: `(min-width: 20rem)`,
  minMobileL: `(min-width: 25.875rem)`,
  minTablet: `(min-width: 48rem)`,
  minDesktop: `(min-width: 62.25rem)`
};

export const DEVICEGUTTER = `
  padding: 0.7rem 1rem;

  @media ${DEVICE.minDesktop} {
    padding: 0.8rem 1.25rem;
  }
`;

export const SPACING = {
  navbarHeight: `

    @media ${DEVICE.minDesktop} {
    }
  `,

  navbar: `
    padding: 0.4rem 0.6rem;

    @media ${DEVICE.minDesktop} {
      padding-left: 0.9rem;
      padding-right: 0.9rem;
    }
  `,

  Content: `
    padding: 0.4rem 0.6rem;

    @media ${DEVICE.minDesktop} {
      padding: 1.2rem 0.9rem;
    }
  `
};

export const FONT = {
  H2: `
    font-size: 1.15rem;

    @media ${DEVICE.minDesktop} {
      font-size: 1.3rem;
    }
  `,

  H3: `
    font-size: 1rem;

    @media ${DEVICE.minDesktop} {
      font-size: 1.15rem;
    }
  `,

  H4: `
    @media ${DEVICE.minDesktop} {
    }
  `,

  Span: `
   font-size: 0.8125rem;

    @media ${DEVICE.minDesktop} {
      font-size: 0.9rem;
    }
  `,

  P: `
    font-size: 0.75rem;

    @media ${DEVICE.minDesktop} {
      font-size: 0.9rem;
    }
  `,

  ListTitle: `
    font-size: 0.8125rem;

    @media ${DEVICE.minDesktop} {
      font-size: 0.875rem;
    }
  `,

  Loading: `
    font-size: 1.5rem;

    @media ${DEVICE.minDesktop} {
      font-size: 2rem;
    }
  `
};
