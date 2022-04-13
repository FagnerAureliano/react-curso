import { PropsWithChildren, ReactNode } from "react"
import './Card.css'

type CardProps = {
    title?: string
    children?: ReactNode
    align?: 'left'| 'right'| 'center'
}

// type CardProps = PropsWithChildren<{
//     title?: string
//    
// }>
export default function Card(props: CardProps) {
    return <div className={`Card ${props.align || 'center'}`}>
        {props.children}
    </div>

}