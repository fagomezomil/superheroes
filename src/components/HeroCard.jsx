import { useNavigate } from 'react-router-dom'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'

const HeroCard = ({ superheroe }) => {
  const navigate = useNavigate()
  const fichaCompleta = () => {
    navigate(`/fichacompleta/${superheroe.id}`)
  }

  return (
    <>
      <Card
        hoverable
        className='w-fit m-4'
        cover={<img alt={superheroe.alter_ego} src={superheroe.url} height={350}
        onClick={fichaCompleta}
        />}>
          <p className='font-bold text-xs text-white bg-gray-400 rounded-md w-fit py-1 px-2 mb-2'>Ver historia</p>
        <Meta title={superheroe.superhero} description={superheroe.alter_ego} />
      </Card>
    </>
  )
}

export default HeroCard