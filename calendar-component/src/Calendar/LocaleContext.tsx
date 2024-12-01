import { createContext } from 'react';

interface LocaleContextType {
  locale: string;
}

const localeContent = createContext<LocaleContextType> ({
  locale: 'zh_CN'
});

export default localeContent;