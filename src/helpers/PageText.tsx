import React from 'react'

interface Props{
	className?: string;
	fontSize?: any;
	color?: string;
	textShadow?: boolean;
	textUppercase?: boolean;
	margin?: string;
}
export const PageText:React.FC <Props> = ({className, children}) => {
	return (
			<span className={className}>{children}</span>
	)
}