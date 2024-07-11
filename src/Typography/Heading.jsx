const Heading = ({children, className}) => {
    return(
        <h1 className={`text-5xl my-8 ${className || ''}`}>
            {children}
        </h1>
    )
}

export default Heading;