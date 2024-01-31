import type { Barbershop } from '@prisma/client'

import { Card, CardContent } from "@/components/ui/card"

interface BarbershopItemProps {
  barbershop: Barbershop
}

export function BarbershopItem({ barbershop }: BarbershopItemProps) {
  return (
    <Card>
      <CardContent className="p-0">
        {barbershop.name}
      </CardContent>
    </Card>
  )
}