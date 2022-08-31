import {ReactNode} from "react"

type listaproduto = {
    children: ReactNode
}

export default function ListaProduto({children}:listaproduto){
    return <ul>{children}</ul>
}