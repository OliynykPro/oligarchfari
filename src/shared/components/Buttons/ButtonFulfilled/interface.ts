export interface ButtonFulfilledProps {
  name: string;
  clickAction(): void;
  iconLeft?: string;
  iconRight?: string;
  disabled?: boolean;
  additionalClass?: string;
}
