import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';
interface MyLazyloadProps {
  className?: string;
  style?: CSSProperties;
  placeholder?: ReactNode;
  offset?: string | number;
  width?: number | string;
  height?: string | number;
  onContentVisible?: () => void;
  children: ReactNode;
}

const MyLazyload: FC<MyLazyloadProps> = (props) => {
  const { className = '', style, offset = 0, width, onContentVisible, placeholder, height, children } = props;
  const [visible, setVisible] = useState(false);
  const styles = { height, width, ...style };

  const elementObserver = useRef<IntersectionObserver>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      rootMargin: typeof offset === 'number' ? offset + 'px' : offset || '0px',
      threshold: 0,
    };
    const lazyloadHandler = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      const { isIntersecting } = entry;
      if (isIntersecting) {
        setVisible(true);
        onContentVisible?.();
      }
    };
    const node = containerRef.current;
    elementObserver.current = new IntersectionObserver(lazyloadHandler, options);
    if (node instanceof HTMLElement) {
      elementObserver.current.observe(node);
    }
    return () => {
      if (node && node instanceof HTMLElement) {
        elementObserver.current?.unobserve(node);
      }
    };
  }, [offset, onContentVisible]);

  return (
    <div ref={containerRef} style={styles} className={className}>
      {visible ? children : placeholder}
    </div>
  );
};

export default MyLazyload;
