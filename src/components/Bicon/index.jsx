export default function Icon ({ name, className = '', ...props }) {
    return <i className={`bi bi-${name} ${className}`} {...props}></i>
}
