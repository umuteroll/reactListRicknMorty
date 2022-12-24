
import { Inter } from '@next/font/google'
import CharacterList from '../../components/CharacterList/CharacterList'

const inter = Inter({ subsets: ['latin'] })

export default function Characters() {
  return (
    <>
     <CharacterList></CharacterList>
    </>
  )
}
