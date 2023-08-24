import { jsx as _jsx } from "react/jsx-runtime";
import './MyLabel.css';
export const MyLabel = ({ label, size = 'normal', AllCaps = false, color = 'text-primary', fontColor, backgroundColor = 'transparent' }) => {
    return (_jsx("span", { className: `${size} ${color} label`, style: { color: fontColor, borderRadius: '1rem', padding: '0.5rem', backgroundColor }, children: AllCaps ? label.toUpperCase() : label }));
};
export default MyLabel;
