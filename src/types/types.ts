export type SvgProps = {
  onClick?: () => void;
  props?: any;
};

export interface LoginInputType {
  email?: string;
  password?: string;
  repassword?: string;
  isAccept?: boolean;
}
