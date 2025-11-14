'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface MenuItem {
  label: string
  href: string
}

interface MobileMenuProps {
  items: MenuItem[]
  linkMedico: string
  linkPaciente: string
}

export function MobileMenu({ items, linkMedico, linkPaciente }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      {/* Botão Hamburger */}
      <button
        onClick={toggleMenu}
        className="p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} aria-hidden="true" />
      )}

      {/* Menu Lateral */}
      <nav
        className={`
          fixed top-0 right-0 h-full w-64 bg-background shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Cabeçalho do Menu */}
          <div className="flex justify-between items-center p-4 border-b border-border">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Itens do Menu */}
          <ul className="flex-1 overflow-y-auto py-4">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-6 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-12 p-10">
            <a
              href={linkMedico}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4EB8B9] text-xs"
            >
              Acesso Médico
            </a>
            <a
              href={linkPaciente}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4EB8B9] text-xs"
            >
              Acesso Paciente
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
