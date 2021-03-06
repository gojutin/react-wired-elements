import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
import { Icon } from './utils/icons';
const { useMemo } = React;

export interface WiredFabProps extends BaseProps {
  /**
   * Disable the button.
   * @default false
   */
  disabled?: boolean;
  /**
   * The background color of the button.
   * @default #018786
   */
  bgColor?: string;
  /**
   * The color of the icon.
   * @default white
   */
  iconColor?: string;
  /**
   * Name of the icon (from Material icons)
   * @default favorite
   */
  icon?: Icon;
  /**
   * Event fired when button is clicked/submitted
   */
  onClick?(e: MouseEvent): void;
  /**
   * The children. Optionally pass in your own icon.
   */
  children?: React.ReactNode;
}

export const WiredFab = ({
  disabled = false,
  bgColor = '#018786',
  iconColor = 'white',
  icon = 'favorite',
  onClick,
  children,
  className,
  style,
}: WiredFabProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { disabled },
      methods: { click: onClick },
      css: { '--wired-fab-bg-color': bgColor, color: iconColor },
    };
  }, [disabled, bgColor, iconColor, onClick]);

  const register = useCustomElement(customValues);
  return (
    <wired-fab class={className} style={style} ref={register}>
      <span>
        {children || (
          <span className="material-icons" style={{ color: iconColor }}>
            {icon}
          </span>
        )}
      </span>
    </wired-fab>
  );
};
