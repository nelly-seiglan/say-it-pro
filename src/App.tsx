import './index.css'

function App() {
  return (
    <div className="min-h-dvh bg-[var(--bg-primary)] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm flex flex-col items-center gap-8">

        {/* Language toggle */}
        <div className="flex items-center gap-1 bg-[var(--bg-secondary)] rounded-full p-1">
          <button className="px-4 py-1.5 rounded-full bg-[var(--accent)] text-white text-sm font-body font-medium transition-all">
            FR
          </button>
          <button className="px-4 py-1.5 rounded-full text-[var(--text-secondary)] text-sm font-body font-medium transition-all">
            EN
          </button>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-1">
            say it pro
          </h1>
          <p className="text-sm text-[var(--text-secondary)] font-body">
            Parle, on s'occupe du reste.
          </p>
        </div>

        {/* Mic button */}
        <button className="w-24 h-24 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" x2="12" y1="19" y2="22"/>
          </svg>
        </button>

        <p className="text-xs text-[var(--text-secondary)] font-body">
          Appuie pour parler
        </p>

        {/* Output card (placeholder) */}
        <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-4 flex flex-col gap-3">
          <p className="text-sm text-[var(--text-secondary)] font-body italic">
            Ton message reformulé apparaîtra ici…
          </p>
          <div className="flex gap-2 flex-wrap">
            {['Email', 'Slack', 'Copier'].map((label) => (
              <button
                key={label}
                className="px-3 py-1.5 rounded-full border border-[var(--border)] text-xs font-body text-[var(--text-secondary)] bg-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
