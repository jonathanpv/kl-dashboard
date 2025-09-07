import React from 'react'
import type { SVGProps } from 'react'

export const PlusIconLight = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9 3.25V14.75" stroke="black" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.25 9H14.75" stroke="black" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const PlusIconDark = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9 3.25V14.75" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.25 9H14.75" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
