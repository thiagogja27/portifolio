import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules' // Importa o Autoplay

const projetos = [
  { imagem: '/image.png', alt: 'Projeto 1' },
  { imagem: '/frotadhs.PNG', alt: 'Projeto 2' },
  { imagem: '/conf0.PNG', alt: 'Projeto 3' },
  { imagem: '/conf1.PNG', alt: 'Projeto 4' },
  { imagem: '/conf3.PNG', alt: 'Projeto 5' },
  { imagem: '/notas1.PNG', alt: 'Projeto 6' },
  { imagem: '/notas2.PNG', alt: 'Projeto 7' },
 
  { imagem: '/rologin.PNG', alt: 'Projeto 9' },
  { imagem: '/dashro.PNG', alt: 'Projeto 10' },
  { imagem: '/celulas.PNG', alt: 'Projeto 11' },
]

const CarrosselProjetos = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '16px 0' }}>
      <Swiper
        navigation
        modules={[Navigation, Autoplay]} // Inclui o Autoplay aqui
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Ativa autoplay
        style={{ borderRadius: '12px', overflow: 'hidden' }}
      >
        {projetos.map((projeto, index) => (
          <SwiperSlide key={index}>
            <img
              src={projeto.imagem}
              alt={projeto.alt}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                objectFit: 'cover'
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarrosselProjetos
