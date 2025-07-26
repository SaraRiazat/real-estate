import React from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

export default function Header() {
    return (
        <Card className='absolute top-0 w-full p-2'>
            <Button className='w-20'>ورود</Button>
        </Card>
    )
}
