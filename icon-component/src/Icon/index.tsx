import React, { PropsWithChildren, forwardRef } from 'react';
import cs from 'classnames';
import './index.scss';
type BaseIconProps = {
  className?: string;
  style?: React.CSSProperties;
  size?: string | string[];
  spin?: boolean;
};
export type IconProps = BaseIconProps & Omit<React.SVGAttributes<SVGElement>, keyof BaseIconProps>;
// size 可以传 [10px, 10px] 分别指定宽高，也可以传 10px 来同时指定宽高
function getSize(size: IconProps['size']) {
  if (Array.isArray(size) && size.length > 2) {
    return size;
  }
  const width = size || '1em';
  const height = size || '1em';
  return [width as string, height as string];
}
export const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>((props, ref) => {
  const { className, style, size = '1em', spin, children, ...rest } = props;

  const [width, height] = getSize(size);
  const cn = cs(
    'icon',
    {
      'icon-spin': spin,
    },
    className
  );
  return (
    <svg ref={ref} className={cn} style={style} width={width} height={height} fill="currentColor" {...rest}>
      {children}
    </svg>
  );
});
