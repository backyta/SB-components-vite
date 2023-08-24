import './MyLabel.css';



export interface Props{
    /** 
     * Text to display
    */
    label: string;

    /** 
     * Label size
    */
    size?: 'normal'|'h1'|'h2'|'h3';
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
    fontColor?:string;
    /** 
     * background Color
    */
    backgroundColor?:string;

}



export const MyLabel = ({ 
   label, size='normal', 
   AllCaps=false, 
   color='text-primary', 
   fontColor,
   backgroundColor='transparent'
 }:Props) => {

    return (
        <span 
            className={`${ size } ${ color } label`}
            style={{ color: fontColor, borderRadius:'1rem', padding:'0.5rem', backgroundColor}}
            >
                { AllCaps ? label.toUpperCase() : label }
        </span>
    )
}
export default MyLabel;
