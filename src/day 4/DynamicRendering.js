import React, { useState } from 'react'

export default function DynamicRendering() {
    const [x, setX] = useState(101)
    return (
        x > 10 ? <p>The value is greater than 10</p> : <p>The value is smaller than 10</p>
    )
}
