import React, { forwardRef } from 'react';
import { Icon, IconProps } from '.';

interface CreateIconOptions {
  content?: React.ReactNode;
  iconProps?: IconProps;
  viewbox?: string;
}

export function createIcon(option: CreateIconOptions) {
  const { content, iconProps, viewbox = '0 0 1024 1024' } = option;
  return forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon ref={ref} viewBox={viewbox} {...iconProps} {...props}>
        {content}
      </Icon>
    );
  });
}
