import { PropsWithChildren, createContext } from 'react';
import { SizeType } from '.';
interface ConfigContextType {
  space?: {
    size?: SizeType;
  };
}

export const ConfigContext = createContext<ConfigContextType>({});

export const ConfigProvider = (props: PropsWithChildren<ConfigContextType>) => {
  const { space, children } = props;
  return <ConfigContext.Provider value={{ space }}>{children}</ConfigContext.Provider>;
};
