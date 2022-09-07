export interface ButtonEmptyProps {
  name: string;
  clickAction(): void;
  disabled?: boolean;
  additionalClass?: string;
}
