function Icon({ children, className, color, onClick, size, viewBox, style }) {
    return (
        <svg className={className} fill={color} width={size} height={size} viewBox={viewBox} style={style} onClick={onClick}>
            {children}
        </svg>
    )
}

export default Icon
