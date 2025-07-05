import {Children, type ReactElement, type ReactNode} from 'react';

interface OptionProps {
  value: string | number;
  children: ReactNode;
}

export function getDisplayedValue(value: string, children: ReactNode) {
  const childArray = Children.toArray(children) as ReactElement<OptionProps>[];
  const selectedChild = childArray.find(
    (child) => child.props.value === value
  );

  return selectedChild?.props.children;
}
