import { createContext } from 'react';

interface LocaleContextType {
  locale: string;
}

const LocaleContent = createContext<LocaleContextType> ({
  locale: 'zh_CN'
});

export default LocaleContent;