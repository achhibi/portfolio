'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/app/providers'
import { Chess } from 'chess.js'

interface TerminalCommand {
  name: string
  description: string
  execute: (args?: string[]) => string
}

interface ChessGame {
  active: boolean
  chess: Chess
  moves: string[]
}

function renderChessBoard(chess: Chess): string {
  const board = chess.board()
  const pieceSymbols: Record<string, string> = {
    'p': '♟', 'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚',
    'P': '♙', 'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔'
  }

  let boardStr = '  a b c d e f g h\n'
  for (let i = 7; i >= 0; i--) {
    boardStr += `${i + 1} `
    for (let j = 0; j < 8; j++) {
      const piece = board[i][j]
      if (piece) {
        const symbol = piece.type + (piece.color === 'w' ? '' : '')
        boardStr += (piece.color === 'w' ? piece.type.toUpperCase() : piece.type) + ' '
      } else {
        boardStr += '· '
      }
    }
    boardStr += `${i + 1}\n`
  }
  boardStr += '  a b c d e f g h'
  return boardStr
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<Array<{ type: 'input' | 'output' | 'error'; text: string }>>([
    { type: 'output', text: '👨‍💻 Welcome to Amor Chhibi\'s Developer Console\nType "help" for available commands\n' }
  ])
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [chessGame, setChessGame] = useState<ChessGame | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  const { language } = useLanguage()

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
📧 Email:       amor.chhibi@hotmail.fr
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
    chess: {
      name: 'chess',
      description: 'Play chess (chess --play)',
      execute: (args?: string[]) => {
        if (args?.[0] === '--play') {
          const chess = new Chess()
          setChessGame({ active: true, chess, moves: [] })
          return `♟️ Chess Game Started!\nType moves in algebraic notation (e.g., e2e4)\nType "quit" to exit\n\n${renderChessBoard(chess)}`
        }
        return 'Usage: chess --play'
      }
    },
    exit: {
      name: 'exit',
      description: 'Close terminal',
      execute: () => {
        setIsOpen(false)
        return ''
      }
    }
  }

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    const parts = trimmed.split(' ')
    const baseCmd = parts[0]

    const newOutput = [...output]
    newOutput.push({ type: 'input', text: `$ ${cmd}` })

    // Handle chess game moves
    if (chessGame?.active && !commands[baseCmd]) {
      if (trimmed === 'quit') {
        setChessGame(null)
        newOutput.push({ type: 'output', text: 'Exiting chess game...' })
      } else {
        try {
          const moves = chessGame.chess.moves({ verbose: true })
          const move = chessGame.chess.move(trimmed)

          if (move) {
            const newMoves = [...chessGame.moves, move.san]
            setChessGame({ ...chessGame, moves: newMoves })

            let result = `Move: ${move.san}\n\n${renderChessBoard(chessGame.chess)}\n`
            if (chessGame.chess.isCheckmate()) {
              result += '\n♔ Checkmate! Game Over.'
              setChessGame(null)
            } else if (chessGame.chess.isCheck()) {
              result += '\n♔ Check!'
            } else if (chessGame.chess.isStalemate()) {
              result += '\n♔ Stalemate!'
              setChessGame(null)
            }
            newOutput.push({ type: 'output', text: result })
          } else {
            newOutput.push({ type: 'error', text: `Invalid move: ${trimmed}\nValid moves: ${moves.map(m => m.san).join(', ').substring(0, 100)}...` })
          }
        } catch (e) {
          newOutput.push({ type: 'error', text: `Invalid move: ${trimmed}` })
        }
      }
    } else {
      const command = commands[baseCmd]
      if (command) {
        const result = command.execute(parts.slice(1))
        if (result) newOutput.push({ type: 'output', text: result })
      } else if (trimmed === '') {
        // Do nothing for empty commands
      } else {
        newOutput.push({ type: 'error', text: `Command not found: ${cmd}\nType "help" for available commands` })
      }
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

  return (
    <>
      {/* Terminal Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden sm:flex w-11 h-11 rounded-lg bg-slate-700/50 dark:bg-slate-800/50 text-white hover:bg-slate-600 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-600 dark:border-slate-700 items-center justify-center hover:shadow-lg hover:shadow-slate-700/50 text-lg"
        title="Developer Console"
      >
        {'>'}_
      </button>

      {/* Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-900 border border-green-500/50 rounded-lg w-full max-w-2xl max-h-96 flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal Header */}
              <div className="bg-slate-800 px-4 py-3 border-b border-green-500/30 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-green-400 font-mono text-sm">amor@portfolio:~$</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-green-400 hover:text-green-300 font-mono text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Terminal Output */}
              <div
                ref={outputRef}
                className="flex-1 overflow-y-auto p-4 font-mono text-sm bg-slate-950 space-y-1"
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
              <div className="bg-slate-800 px-4 py-2 border-t border-green-500/30 flex gap-2">
                <span className="text-green-400 font-mono">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-green-400 outline-none font-mono"
                  spellCheck="false"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
