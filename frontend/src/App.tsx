import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card.tsx';
import { useFoodData } from './hooks/useFoodData.ts';
import { CreateModal } from './components/create-modal/create-modal.tsx';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => 
          <Card
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button className='btn-novo' onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App