import Image from "next/image"
import { MenuIcon } from 'lucide-react'

import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

export function Header() {
  return (
    <Card className="rounded-none border-l-0 border-r-0 border-t-0">
      <CardContent className="flex items-center justify-between px-5 py-8">
        <Image src="/logo.png" alt="FSW Barber" width={130} height={22} />
        <Button variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </CardContent>
    </Card>
  )
}