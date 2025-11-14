'use client'

import Link from 'next/link'
import { MobileMenu } from './MobileMenu'
import { Container } from './container'
import { Media } from './Media'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Exames', href: '#exames' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

interface HeaderProps {
  data: {
    header: {
      logo: any
      doctorAccess: string
      patientAccess: string
    }
    social: {
      facebook: string
      instagram: string
      linkedin: string
    }
    contact: {
      whatsapp: string
    }
  }
}

export function Header({ data }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 z-50 w-full">
      {/* Barra Superior */}
      <div className="w-full bg-[#27233F] h-10">
        <Container className="flex items-center justify-end h-full gap-12">
          <div className="flex items-center gap-7">
            <a href={data.social.facebook} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M10.4993 0.00291293L8.68387 0C6.64426 0 5.32617 1.35233 5.32617 3.44542V5.03399H3.5008C3.34306 5.03399 3.21533 5.16187 3.21533 5.3196V7.62126C3.21533 7.77899 3.34321 7.90672 3.5008 7.90672H5.32617V13.7145C5.32617 13.8723 5.4539 14 5.61163 14H7.99322C8.15096 14 8.27869 13.8721 8.27869 13.7145V7.90672H10.413C10.5707 7.90672 10.6984 7.77899 10.6984 7.62126L10.6993 5.3196C10.6993 5.24386 10.6692 5.17133 10.6157 5.11773C10.5623 5.06414 10.4894 5.03399 10.4137 5.03399H8.27869V3.68734C8.27869 3.04008 8.43293 2.71151 9.27607 2.71151L10.499 2.71107C10.6566 2.71107 10.7844 2.58319 10.7844 2.4256V0.288381C10.7844 0.130936 10.6568 0.00320423 10.4993 0.00291293Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href={data.social.instagram} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_0_191)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.79159 0.583313C2.01967 0.583313 0.583252 2.01973 0.583252 3.79165V10.2083C0.583252 11.9802 2.01967 13.4166 3.79159 13.4166H10.2083C11.9802 13.4166 13.4166 11.9802 13.4166 10.2083V3.79165C13.4166 2.01973 11.9802 0.583313 10.2083 0.583313H3.79159ZM6.99992 4.66665C5.71125 4.66665 4.66659 5.71132 4.66659 6.99998C4.66659 8.28862 5.71125 9.33331 6.99992 9.33331C8.28856 9.33331 9.33325 8.28862 9.33325 6.99998C9.33325 5.71132 8.28856 4.66665 6.99992 4.66665ZM3.49992 6.99998C3.49992 5.06698 5.06692 3.49998 6.99992 3.49998C8.93291 3.49998 10.4999 5.06698 10.4999 6.99998C10.4999 8.93297 8.93291 10.5 6.99992 10.5C5.06692 10.5 3.49992 8.93297 3.49992 6.99998ZM10.4999 2.33331C9.85557 2.33331 9.33325 2.85565 9.33325 3.49998C9.33325 4.14431 9.85557 4.66665 10.4999 4.66665C11.1443 4.66665 11.6666 4.14431 11.6666 3.49998C11.6666 2.85565 11.1443 2.33331 10.4999 2.33331Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_191">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_0_183)">
                  <path
                    d="M3.25874 4.50391H0.448219C0.323483 4.50391 0.222412 4.60502 0.222412 4.72971V13.7587C0.222412 13.8835 0.323483 13.9845 0.448219 13.9845H3.25874C3.38348 13.9845 3.48455 13.8835 3.48455 13.7587V4.72971C3.48455 4.60502 3.38348 4.50391 3.25874 4.50391Z"
                    fill="white"
                  />
                  <path
                    d="M1.85459 0.0153809C0.831961 0.0153809 0 0.846439 0 1.86794C0 2.8899 0.831961 3.72127 1.85459 3.72127C2.87641 3.72127 3.7077 2.88985 3.7077 1.86794C3.70774 0.846439 2.87641 0.0153809 1.85459 0.0153809Z"
                    fill="white"
                  />
                  <path
                    d="M10.4077 4.27948C9.27891 4.27948 8.44447 4.76474 7.93835 5.31611V4.72969C7.93835 4.605 7.83728 4.50389 7.71254 4.50389H5.02097C4.89624 4.50389 4.79517 4.605 4.79517 4.72969V13.7587C4.79517 13.8834 4.89624 13.9845 5.02097 13.9845H7.82535C7.95009 13.9845 8.05116 13.8834 8.05116 13.7587V9.29144C8.05116 7.78607 8.46005 7.19961 9.50942 7.19961C10.6523 7.19961 10.7431 8.13978 10.7431 9.36889V13.7587C10.7431 13.8835 10.8442 13.9846 10.9689 13.9846H13.7743C13.899 13.9846 14.0001 13.8835 14.0001 13.7587V8.80618C14.0001 6.56776 13.5733 4.27948 10.4077 4.27948Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_183">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href={data.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white text-xs max-md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_0_193)">
                  <path
                    d="M7.00175 0H6.99825C3.13863 0 0 3.1395 0 7C0 8.53125 0.4935 9.9505 1.33263 11.1029L0.46025 13.7034L3.15088 12.8433C4.25775 13.5765 5.57812 14 7.00175 14C10.8614 14 14 10.8596 14 7C14 3.14038 10.8614 0 7.00175 0ZM11.0749 9.88488C10.906 10.3617 10.2358 10.7572 9.70113 10.8727C9.33537 10.9506 8.85763 11.0128 7.24937 10.346C5.19225 9.49375 3.8675 7.40337 3.76425 7.26775C3.66537 7.13212 2.933 6.16088 2.933 5.15637C2.933 4.15188 3.44313 3.66275 3.64875 3.45275C3.81763 3.28038 4.09675 3.20162 4.3645 3.20162C4.45113 3.20162 4.529 3.206 4.599 3.2095C4.80463 3.21825 4.90788 3.2305 5.0435 3.55513C5.21238 3.962 5.62362 4.9665 5.67262 5.06975C5.7225 5.173 5.77238 5.313 5.70238 5.44863C5.63675 5.58863 5.579 5.65075 5.47575 5.76975C5.3725 5.88875 5.2745 5.97975 5.17125 6.1075C5.07675 6.21863 4.97 6.33763 5.089 6.54325C5.208 6.7445 5.61925 7.41562 6.22475 7.95462C7.00612 8.65025 7.63962 8.8725 7.86625 8.967C8.03512 9.037 8.23637 9.02038 8.35975 8.88913C8.51637 8.72025 8.70975 8.44025 8.90662 8.16463C9.04663 7.96688 9.22338 7.94237 9.40888 8.01237C9.59788 8.078 10.598 8.57237 10.8036 8.67475C11.0092 8.778 11.1449 8.827 11.1947 8.91363C11.2437 9.00025 11.2437 9.40712 11.0749 9.88488Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_193">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {data.contact.whatsapp.replace(/\D/g, '')}
            </a>
          </div>

          <div className="h-full flex items-center gap-12 max-sm:hidden">
            <a
              href={data.header.doctorAccess}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4EB8B9] text-xs"
            >
              Acesso Médico
            </a>
            <a
              href={data.header.patientAccess}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4EB8B9] text-xs"
            >
              Acesso Paciente
            </a>
          </div>
        </Container>
      </div>

      {/* Header Principal */}
      <header
        className={`w-full py-4 transition-all duration-300 ${
          isScrolled ? 'bg-white border-b border-gray-200' : 'bg-transparent'
        }`}
      >
        <Container className="flex items-center justify-between">
          <Link href={'/'} className="relative w-[222px] h-[55px] max-md:w-[150px] max-md:h-[37px]">
            {data.header.logo && typeof data.header.logo !== 'string' && (
              <Image src={data.header.logo.url} alt="Logo" width={222} height={55} />
            )}
          </Link>

          {/* Menu Desktop - oculto em telas < 768px */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-12">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-[#27233F] font-semibold relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-1/2 after:w-0 after:h-[2px] after:bg-[#4EB8B9] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Mobile - visível apenas em telas < 768px */}
          <MobileMenu
            items={menuItems}
            linkMedico={data.header.doctorAccess}
            linkPaciente={data.header.patientAccess}
          />
        </Container>
      </header>
    </div>
  )
}
