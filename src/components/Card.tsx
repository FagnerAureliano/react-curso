import { PropsWithChildren, ReactNode } from "react"


type CardProps = {
    title?: string
    children?: ReactNode
}

// type CardProps = PropsWithChildren<{
//     title?: string
//    
// }>
export default function Card(props: CardProps) {
    return <div
        style={{
            background: 'rgba(0,0,0,.25)',
            borderRadius: 8,
            padding: 16
        }}
    >
        {props.children}
    </div>

}