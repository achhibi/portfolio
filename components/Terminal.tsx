'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/app/providers'
import { createPortal } from 'react-dom'
import { getRandomJoke } from '@/lib/jokes'

interface TerminalCommand {
  name: string
  description: string
  execute: () => string
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<Array<{ type: 'input' | 'output' | 'error'; text: string }>>([
    { type: 'output', text: '👨‍💻 Welcome to Amor Chhibi\'s Developer Console\nType "help" for available commands\nType "exit" or "close" to exit\n' }
  ])
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  const { language } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const commands: Record<string, TerminalCommand> = {
    help: {
      name: 'help',
      description: 'Show available commands',
      execute: () => Object.values(commands).map(c => `${c.name.padEnd(15)} - ${c.description}`).join('\n')
    },
    home: {
      name: 'home',
      description: 'Display user profile',
      execute: () => `
👤 AMOR CHHIBI - Senior Software Engineer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Location: France (Île-de-France)
💼 Title: Senior Java Developer & Technical Leader
🎯 Experience: 13+ years
🏆 Expertise: Spring Boot, Cloud, Microservices, AI/LLMs
🔐 Specialization: IAM, Keycloak
🎮 Hobby: Chess
`
    },
    cert: {
      name: 'cert',
      description: 'Show certifications',
      execute: () => `
🏅 CERTIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Oracle Certified Associate Java Programmer
✅ AWS Certified Solutions Architect
✅ Keycloak Certified Expert
✅ Spring Professional Certification
✅ Kubernetes Administrator (CKA)
`
    },
    skills: {
      name: 'skills',
      description: 'List technical skills',
      execute: () => `
🛠️ TECHNICAL SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Backend:     Java, Spring Boot, Quarkus, Jakarta EE
Frontend:    React, TypeScript, Next.js
Cloud:       AWS, GCP, Docker, Kubernetes
Databases:   Oracle, PostgreSQL, MySQL, Redis
IAM:         Keycloak, OAuth2, OpenID Connect, SAML
DevOps:      CI/CD, GitLab, Jenkins, Ansible
AI/ML:       LLMs, Prompt Engineering, Claude AI
`
    },
    experience: {
      name: 'experience',
      description: 'Career timeline',
      execute: () => `
📋 PROFESSIONAL EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 Senior Developer @ Groupe AGRICA (2024-Present)
   IAM & Keycloak specialist, Cloud architecture

🔹 Tech Lead @ Previous Company (2019-2024)
   Microservices architecture, Team leadership

🔹 Senior Developer @ StartUp (2015-2019)
   Full-stack development, Cloud infrastructure

🔹 Java Developer @ Enterprise (2012-2015)
   Enterprise applications, Spring ecosystem

🔹 Junior Developer @ First Job (2011-2012)
   Java web applications
`
    },
    projects: {
      name: 'projects',
      description: 'Featured projects',
      execute: () => `
🚀 FEATURED PROJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 50+ GitHub projects
🌟 Top projects:
  • Keycloak extensions & plugins
  • Spring Boot microservices
  • Cloud infrastructure automation
  • AI integration frameworks

→ Visit: github.com/achhibi
`
    },
    contact: {
      name: 'contact',
      description: 'Contact information',
      execute: () => `
📧 CONTACT & SOCIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🐙 GitHub:      github.com/achhibi
💼 LinkedIn:    linkedin.com/in/chhibiamor
📧 Message:     use the contact form below
🌐 Portfolio:   portfolio-achhibi.vercel.app
📍 Available for: Freelance, Consulting, Full-time
`
    },
    clear: {
      name: 'clear',
      description: 'Clear console',
      execute: () => {
        setOutput([])
        return ''
      }
    },
    exit: {
      name: 'exit',
      description: 'Close terminal',
      execute: () => {
        setIsOpen(false)
        return ''
      }
    },
    close: {
      name: 'close',
      description: 'Close terminal',
      execute: () => {
        setIsOpen(false)
        return ''
      }
    },
    age: {
      name: 'age',
      description: 'Show my current age',
      execute: () => {
        const BIRTH_YEAR = 1988
        const BIRTH_MONTH = 7
        const BIRTH_DAY = 25

        // Day counts are done in UTC so daylight-saving shifts cannot skew them.
        const now = new Date()
        const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
        const birth = Date.UTC(BIRTH_YEAR, BIRTH_MONTH - 1, BIRTH_DAY)
        const DAY_MS = 86400000

        const hadBirthdayThisYear =
          now.getMonth() + 1 > BIRTH_MONTH ||
          (now.getMonth() + 1 === BIRTH_MONTH && now.getDate() >= BIRTH_DAY)
        const years = now.getFullYear() - BIRTH_YEAR - (hadBirthdayThisYear ? 0 : 1)

        const daysAlive = Math.round((today - birth) / DAY_MS)
        const nextBirthday = Date.UTC(
          now.getFullYear() + (hadBirthdayThisYear ? 1 : 0),
          BIRTH_MONTH - 1,
          BIRTH_DAY
        )
        const daysToGo = Math.round((nextBirthday - today) / DAY_MS)
        const isBirthday = now.getMonth() + 1 === BIRTH_MONTH && now.getDate() === BIRTH_DAY

        return `
🎂 AGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎈 Age:           ${years} years old
📆 Days alive:    ${daysAlive.toLocaleString('en-US')}
⏳ Next birthday: ${isBirthday ? 'today — happy birthday! 🎉' : `in ${daysToGo} days`}
`
      }
    },
    sudo: {
      name: 'sudo',
      description: 'Request elevated privileges',
      execute: () => `
⚠️  Requesting elevated privileges...

[████████████████████] 100%

ACCESS DENIED.

Reason:
You are already inside the system. 😎
`
    },
    terminal: {
      name: 'terminal',
      description: 'Run the console boot sequence',
      execute: () => `
Initializing developer console...

✓ Terminal interface ........ OK
✓ Portfolio system .......... OK
✓ Project database .......... OK
✓ Contact system ............ OK

System status: ONLINE 🟢

Built to showcase the work, skills
and journey of Amor Chhibi.
`
    },
    jokes: {
      name: 'jokes',
      description: 'Get a random programmer joke',
      execute: () => {
        const joke = getRandomJoke()
        return `\n${joke}\n`
      }
    }
  }

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    // `sudo` is also matched with arguments, the way it is actually typed.
    const command =
      commands[trimmed] || (trimmed.startsWith('sudo ') ? commands.sudo : undefined)

    const newOutput = [...output]
    newOutput.push({ type: 'input', text: `$ ${cmd}` })

    if (command) {
      const result = command.execute()
      if (result) newOutput.push({ type: 'output', text: result })
    } else if (trimmed === '') {
      // Do nothing for empty commands
    } else {
      newOutput.push({ type: 'error', text: `Command not found: ${cmd}\nType "help" for available commands` })
    }

    setOutput(newOutput)
    setHistory([...history, cmd])
    setHistoryIndex(-1)
  }

  const handleSubmit = () => {
    if (input.trim()) {
      executeCommand(input)
      setInput('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const newIndex = historyIndex + 1
      if (newIndex < history.length) {
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newIndex = historyIndex - 1
      if (newIndex >= 0) {
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      } else if (newIndex < 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [output])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-[9999] flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="terminal-console bg-slate-900 border border-green-500/50 rounded-lg w-[95vw] sm:w-[90vw] md:w-[85vw] h-[85vh] sm:h-[85vh] md:h-[90vh] max-w-[1400px] max-h-[90vh] flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal Header */}
              <div className="bg-slate-800 px-2 sm:px-4 py-2 sm:py-3 border-b border-green-500/30 flex justify-between items-center">
                <div className="flex gap-1 sm:gap-2 items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                  <span className="ml-2 sm:ml-3 text-green-400 font-mono text-xs sm:text-sm">amor@portfolio:~$</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-green-400 hover:text-green-300 font-mono text-lg sm:text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Terminal Output */}
              <div
                ref={outputRef}
                className="flex-1 overflow-y-auto p-2 sm:p-4 font-mono text-xs sm:text-sm bg-slate-950 space-y-1 flex flex-col justify-end"
              >
                {output.map((line, i) => (
                  <div
                    key={i}
                    className={`${
                      line.type === 'input'
                        ? 'text-green-400'
                        : line.type === 'error'
                          ? 'text-red-400'
                          : 'text-gray-300'
                    } whitespace-pre-wrap break-words`}
                  >
                    {line.text}
                  </div>
                ))}
              </div>

              {/* Terminal Input */}
              <div className="bg-slate-800 px-2 sm:px-4 py-2 border-t border-green-500/30 flex gap-1 sm:gap-2">
                <span className="text-green-400 font-mono text-xs sm:text-sm">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-green-400 outline-none font-mono text-xs sm:text-sm"
                  spellCheck="false"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  )

  return (
    <>
      {/* Terminal Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-slate-700/50 dark:bg-slate-800/50 text-white hover:bg-slate-600 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-600 dark:border-slate-700 items-center justify-center hover:shadow-lg hover:shadow-slate-700/50 text-sm sm:text-base"
        title="Developer Console"
      >
        {'>'}_
      </button>

      {/* Terminal Modal - Full Screen using Portal */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  )
}
