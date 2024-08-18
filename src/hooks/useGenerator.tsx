import React from 'react'
interface hookInterface {
    count: number 
    element: React.ReactNode
}

export const useGenerator = (props: hookInterface) => {
    const { count, element } = props
    const result = []

    while(count > 0){
        result.push(element)
    }
    return [...result]
}