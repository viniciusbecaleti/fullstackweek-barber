import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="Busque por uma barbearia..." />

      <Button>
        <SearchIcon size={20} />
      </Button>
    </div>
  )
}