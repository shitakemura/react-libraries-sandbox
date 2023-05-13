import { useListPets } from '../api/pets/pets'
import { Pet } from '../model'

function Pets() {
  const { data: pets } = useListPets()

  return (
    <div>
      <h1>Pets</h1>
      {pets?.data.map((p: Pet) => {
        return <p key={p.id}>{p.name}</p>
      })}
    </div>
  )
}

export default Pets
