import './MyLabel.css';
export interface Props {
    /**
     * Text to display
    */
    label: string;
    /**
     * Label size
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalizr all letters
    */
    AllCaps?: boolean;
    /**
     * Label color
    */
    color?: 'text-primary' | 'text-secondary' | 'text-tetiary';
    /**
     * Font Color
    */
    fontColor?: string;
    /**
     * background Color
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, AllCaps, color, fontColor, backgroundColor }: Props) => import("react/jsx-runtime").JSX.Element;
export default MyLabel;
