//Header types and interface
type Child = {
  title: string;
  link: string;
  icon: React.ElementType;
  text?: string;
};

interface HeaderNavLink {
  trigger: string | React.ElementType;
  link?: string;
  children?: Child[];
}

//Sign-in auth interface
interface AuthProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;

  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  rememberMe: boolean;
  setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;

  appName: string;

  className: string;

  funnelLink: string;
}
