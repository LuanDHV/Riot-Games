export interface IHeaderData {
  title?: string;
  href?: string;
  subHeader?: ISubHeaderData[];
}

export interface ISubHeaderData {
  title: string;
  href: string;
}

export interface IHeaderLeftProps {
  isHeaderLeftOpen: boolean;
  handleHeaderLeftToggle: () => void;
}

export interface IHeaderRightProps {
  isScrolled: boolean;
  isHeaderRightOpen: boolean;
  handleHeaderRightToggle: () => void;
  handleHeaderLeftToggle: () => void;
}
