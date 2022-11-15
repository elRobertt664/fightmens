import React from 'react'
import videoBg from '../assets/sword.mp4'
import { Carousel, Accordion, Card } from 'flowbite-react'
const Main = () => {
  return (
    <>
      <div className='main '>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content ">

          <h5 className="mb-2 mt-sa text-3xl font-light text-gray-50 dark:text-white">
            Disponible pronto
          </h5>
          <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
            Suscribete para recibir detalles y fechas de lanzamiento
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
            >
              <svg class="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd"></path></svg>
              <div className="text-center">

                <div className="ml-3 font-sans text-sm font-semibold">
                  Suscribirme
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className=" container mx-auto px-4 bg-black">
          <div className="h-56 mx-24 sm:h-64 xl:h-80 2xl:h-96 ">
            <p class="text-5xl text-gray-50 p-11">Historia y Personajes</p>
            <Carousel>
              <img
                src="https://static.wikia.nocookie.net/0460335d-86e2-4c7f-88ff-4522e331b752/scale-to-width/755"
                alt="..."
              />
              
            </Carousel>
          </div>
          <p class="text-5xl text-gray-50 p-11 mt-28 ml-24">Escenarios</p>
          <div class="flex flex-nowrap bg-black">

            <div className='mx-24 mt-3'>
              <div className="max-w-sm">
                <Card imgSrc="https://autoloanpe.com/wp-content/uploads/2022/08/image-placeholder.png">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                   escenario_name
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    escenario_descripcion
                  </p>
                </Card>
              </div>
            </div>
            <div className=' mt-3'>
              <div className="max-w-sm">
                <Card imgSrc="https://autoloanpe.com/wp-content/uploads/2022/08/image-placeholder.png">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  escenario_name                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  escenario_descripcion                  </p>
                </Card>
              </div>
            </div>
            <div className=' mt-3 ml-24'>
              <div className="max-w-sm">
                <Card imgSrc="https://autoloanpe.com/wp-content/uploads/2022/08/image-placeholder.png">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  escenario_name                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  escenario_descripcion                  </p>
                </Card>
              </div>
            </div>
          </div>
          <div className='mx-24 mt-11'>
          <Accordion flush={true}>
            <Accordion.Panel>
              <Accordion.Title>
               <h1 className='text-gray-50 text-3xl font-light'> Preguntas Frecuentes</h1>
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                 Seccion de preguntas y respuestas y soporte
                </p>
               
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
               Requisitos
              </Accordion.Title>
              <Accordion.Content>
                
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Lanzamiento
              </Accordion.Title>
              <Accordion.Content>
                
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
          </div>
          

        </div>


      </div>
    </>


  )
}

export default Main