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


          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 m-5">
            <a
              href="https://www.instagram.com/fighting_x_mens_oficial/"
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-50 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"/></svg>             <div className="text-center">



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
                    Astro Galaxie
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Escenario ambientado en el espacio
                  </p>
                </Card>
              </div>
            </div>
            <div className=' mt-3'>
              <div className="max-w-sm">
                <Card imgSrc="https://autoloanpe.com/wp-content/uploads/2022/08/image-placeholder.png">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Ice of the death                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Escenario ambientado en el hielo                  </p>
                </Card>
              </div>
            </div>
            <div className=' mt-3 ml-24'>
              <div className="max-w-sm">
                <Card imgSrc="https://autoloanpe.com/wp-content/uploads/2022/08/image-placeholder.png">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Burning stage                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Escenario ambientado en el fuego                  </p>
                </Card>
              </div>
            </div>
            <div className=' mt-3 ml-24'>
              <div className="max-w-sm">
                <Card imgSrc="https://scontent.ftpq2-1.fna.fbcdn.net/v/t1.6435-9/52692486_10156966786253446_2670481553640914944_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=973b4a&_nc_ohc=deGJvCf9eNsAX95Q5v9&_nc_oc=AQkF37kciIGmsQUCtPzRS6UF2Wq92GR7ez3UZ2AzweJU4rqYGOQ4AK4y16hrJvOnXoY&_nc_ht=scontent.ftpq2-1.fna&oh=00_AfC12E96eBJOSVsxaU9d03hSfKmmXMcLCNFr6tH7M-er_Q&oe=639B7281">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    CMD                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Escenario ambientado en el centro de medios digitales de la UT                  </p>
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