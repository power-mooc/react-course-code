import React, { useContext, useMemo } from 'react';
import classNames from 'classnames';
import './index.scss';
import { ConfigContext } from './ConfigProvider';
export type SizeType = 'small' | 'middle' | 'large' | number | undefined;
interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  size?: SizeType | [SizeType, SizeType];
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  split?: React.ReactNode;
  wrap?: boolean;
}

const getNumberSize = (size: SizeType) => {
  const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
  };
  return typeof size === 'string' ? spaceSize[size] : size || 0;
};
const Space: React.FC<SpaceProps> = (props) => {
  const { space } = useContext(ConfigContext);
  const {
    className,
    style,
    children,
    size = space?.size || 'small',
    direction = 'horizontal',
    align,
    split,
    wrap = false,
    ...otherProps
  } = props;

  const mergedAlign = direction === 'horizontal' && align === undefined ? 'center' : align;
  const cn = classNames(
    'space',
    `space-${direction}`,
    {
      [`space-align-${mergedAlign}`]: mergedAlign,
    },
    className
  );

  const chilrenNodes = React.Children.toArray(props.children);
  const nodes = chilrenNodes.map((child: any, i) => {
    const key = (child && child.key) || `space-item-${i}`;
    return (
      <>
        <div key={key} className="space-item">
          {child}
        </div>
        {i < chilrenNodes.length && split && (
          <div style={style} className={`${className}-split`}>
            {split}
          </div>
        )}
      </>
    );
  });

  const OtherStyles: React.CSSProperties = {};
  const [horizontalSize, verticalSize] = useMemo(() => {
    return (Array.isArray(size) ? size : [size, size]).map((item) => getNumberSize(item));
  }, [size]);
  OtherStyles.columnGap = horizontalSize;
  OtherStyles.rowGap = verticalSize;
  if (wrap) {
    OtherStyles.flexWrap = 'wrap';
  }

  return (
    <div className={cn} style={{ ...OtherStyles, ...style }} {...otherProps}>
      {nodes}
    </div>
  );
};
export default Space;
