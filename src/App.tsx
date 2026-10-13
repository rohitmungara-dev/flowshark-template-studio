import { useMemo, useState } from 'react'
import { ArrowDownRight, ArrowLeft, ArrowRight, Check, ChevronDown, FileText, Menu, Plus, Search, Sparkles, WandSparkles, X } from 'lucide-react'
import { initialData, templates } from './data'
import type { DocumentData, Kind, Template } from './types'
import DocumentPreview from './components/DocumentPreview'
import EditorPanel from './components/EditorPanel'

type Page = 'home' | 'about' | 'proposal' | 'invoice'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [selected, setSelected] = useState<Template | null>(null)
  const [data, setData] = useState<DocumentData>(initialData)
  const [editing, setEditing] = useState(false)
  const [accent, setAccent] = useState('#5838e8')
  const [query, setQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  const filtered = useMemo(() =>
    templates
      .filter(t => (page === 'proposal' || page === 'invoice') ? t.kind === page : true)
      .filter(t => `${t.name} ${t.description}`.toLowerCase().includes(query.toLowerCase())),
    [page, query]
  )

  const go = (next: Page) => {
    setPage(next)
    setSelected(null)
    setEditing(false)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const choose = (template: Template) => {
    setSelected(template)
    setAccent(template.color)
    setEditing(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const download = async () => {
    const element = document.getElementById('document-canvas')
    if (!element) return
    const isDark = selected?.id === 'bold' || selected?.id === 'proposal-dark'
    const html2pdf = (await import('html2pdf.js')).default
    await html2pdf().set({
      margin: 0,
      filename: `${data.documentNumber || 'flowshark-document'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: isDark ? '#090912' : '#ffffff' },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).from(element).save()
  }

  return (
    <div className="app-shell">
      <nav className="navbar">
        <button className="brand" onClick={() => go('home')}>
          <span className="brand-symbol">F</span>
          <span>flowshark<span className="brand-dot">.ai</span></span>
        </button>
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <button className={page === 'home' ? 'active' : ''} onClick={() => go('home')}>Home</button>
          <button className={page === 'about' ? 'active' : ''} onClick={() => go('about')}>About</button>
          <button className={page === 'proposal' ? 'active' : ''} onClick={() => go('proposal')}>Proposal templates</button>
          <button className={page === 'invoice' ? 'active' : ''} onClick={() => go('invoice')}>Invoice templates</button>
        </div>
        <button className="nav-cta" onClick={() => go('proposal')}>
          Explore templates <ArrowRight size={15}/>
        </button>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X/> : <Menu/>}
        </button>
      </nav>

      {selected ? (
        <main className="studio-page">
          <div className="studio-top">
            <button className="back-link" onClick={() => { setSelected(null); setEditing(false) }}>
              <ArrowLeft size={16}/> Back to templates
            </button>
            <div className="studio-title">
              <div>
                <span className="eyebrow">TEMPLATE STUDIO / {selected.kind.toUpperCase()}</span>
                <h1>{selected.name} <span>template</span></h1>
                <p>Personalize your document and see every change live.</p>
              </div>
              <div className="studio-actions">
                <button className="button-secondary" onClick={() => setEditing(!editing)}>
                  {editing ? 'Hide editor' : 'Edit template'}
                </button>
                <button className="button-primary" onClick={download}>
                  <FileText size={16}/> Download PDF
                </button>
              </div>
            </div>
          </div>

          <div className={`studio-layout ${editing ? 'with-editor' : ''}`}>
            {editing && <EditorPanel data={data} onChange={setData} kind={selected.kind}/>}
            <section className="preview-area">
              <div className="preview-toolbar">
                <div>
                  <span className="live-dot"></span> Live preview <span className="preview-label">A4 document</span>
                </div>
                <div className="theme-picker">
                  <span>Theme</span>
                  {['#5838e8', '#0877df', '#b78b42', '#171717', '#e56f4e', '#149b80'].map(color => (
                    <button
                      key={color}
                      className={accent === color ? 'swatch active' : 'swatch'}
                      style={{ background: color }}
                      onClick={() => setAccent(color)}
                      aria-label={`Set theme ${color}`}
                    />
                  ))}
                </div>
              </div>

              <div className="paper-stage">
                <DocumentPreview template={selected} data={data} kind={selected.kind} accent={accent}/>
              </div>

              <div className="preview-footnote">
                <Check size={14}/> Your edits update this preview instantly. Switch templates anytime; your entered data is preserved.
              </div>
            </section>
          </div>
        </main>
      ) : page === 'about' ? (
        <main className="about-page">
          <section className="about-hero">
            <span className="eyebrow"><Sparkles size={14}/> ABOUT FLOWSHARK</span>
            <h1>Less admin.<br/><span>More momentum.</span></h1>
            <p>Flowshark.ai helps modern teams simplify client operations, automate repetitive workflows, and create polished business documents without starting from scratch.</p>
            <button className="button-primary" onClick={() => go('proposal')}>
              Explore the templates <ArrowRight size={16}/>
            </button>
          </section>
          <section className="about-cards">
            <div>
              <span>01</span>
              <h3>Look professional</h3>
              <p>Consistent, thoughtful documents that build trust from the first interaction.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Move faster</h3>
              <p>Start with a proven structure and personalize it for each client in minutes.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Stay in control</h3>
              <p>Preview every detail, change themes, and export a polished PDF when ready.</p>
            </div>
          </section>
        </main>
      ) : (
        <main>
          {page === 'home' && (
            <section className="hero">
              <div className="hero-copy">
                <div className="eyebrow"><span className="eyebrow-dot"></span> THE FLOWSHARK TEMPLATE STUDIO</div>
                <h1>Create professional<br/>proposals <span>& invoices.</span></h1>
                <p>Beautiful business documents, made yours. Choose a design, customize every detail, and send work that makes a great first impression.</p>
                <div className="hero-actions">
                  <button className="button-primary" onClick={() => go('proposal')}>Explore proposals <ArrowRight size={16}/></button>
                  <button className="button-secondary" onClick={() => go('invoice')}>Browse invoices <ArrowDownRight size={16}/></button>
                </div>
                <div className="hero-proof">
                  <div className="proof-avatars"><span>F</span><span>A</span><span>M</span></div>
                  <p><strong>12 thoughtfully designed templates</strong><br/>6 bespoke invoices and 6 distinct commercial proposals.</p>
                </div>
              </div>
              <div className="hero-visual">
                <div className="floating-label">
                  <span className="floating-icon"><WandSparkles size={17}/></span>
                  <div><strong>Made for your workflow</strong><small>Customize as you go</small></div>
                  <Check size={17} className="check-icon"/>
                </div>
                <div className="hero-paper hero-paper-back">
                  <div className="mini-header"></div>
                  <div className="mini-title"></div>
                  <div className="mini-lines"></div>
                  <div className="mini-table"></div>
                </div>
                <div className="hero-paper hero-paper-front">
                  <div className="mini-brand"><span>F</span> flowshark.ai</div>
                  <div className="mini-kicker">CLIENT OPERATIONS</div>
                  <div className="mini-doc-title">Business<br/><i>Proposal</i></div>
                  <div className="mini-copy">A clearer way to build<br/>great client relationships.</div>
                  <div className="mini-graphic"><div></div><div></div><div></div></div>
                  <div className="mini-bottom"><span>PREPARED FOR</span><b>BrightLens Media</b></div>
                </div>
                <div className="floating-tag"><span>✦</span> Your brand, your way</div>
              </div>
            </section>
          )}

          <section className="gallery-section" id="templates">
            <div className="gallery-heading">
              <div>
                <span className="eyebrow">{page === 'home' ? 'START WITH A GREAT FIRST IMPRESSION' : 'THE TEMPLATE COLLECTION'}</span>
                <h2>{page === 'proposal' ? 'Proposal templates' : page === 'invoice' ? 'Invoice templates' : 'Find your document style.'}</h2>
                <p>{page === 'proposal' ? 'Win confidence with a proposal that feels as considered as your work.' : page === 'invoice' ? 'Get paid with clear, professional invoices that are easy to personalize.' : 'Distinctive designs for every kind of client conversation.'}</p>
              </div>
              <div className="gallery-controls">
                <label className="search-box">
                  <Search size={16}/>
                  <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search templates"/>
                </label>
                <button className="filter-select" onClick={() => setQuery('')}>
                  All styles <ChevronDown size={14}/>
                </button>
              </div>
            </div>

            {page === 'home' && (
              <div className="category-tabs">
                <button className="tab active" onClick={() => go('home')}>All templates <span>12</span></button>
                <button className="tab" onClick={() => go('proposal')}>Proposals <span>6</span></button>
                <button className="tab" onClick={() => go('invoice')}>Invoices <span>6</span></button>
              </div>
            )}

            <div className="template-grid">
              {filtered.map((template, i) => (
                <TemplateCard key={template.id} template={template} index={i} onChoose={() => choose(template)}/>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="empty-state">
                <Search size={24}/>
                <h3>No matching templates</h3>
                <p>Try another search term or clear your search.</p>
                <button className="button-secondary" onClick={() => setQuery('')}>Clear search</button>
              </div>
            )}
          </section>

          {page === 'home' && (
            <section className="bottom-cta">
              <div>
                <span className="eyebrow">YOUR NEXT DOCUMENT STARTS HERE</span>
                <h2>Good work deserves<br/>a great presentation.</h2>
              </div>
              <button className="button-light" onClick={() => go('invoice')}>
                Create your first invoice <ArrowRight size={16}/>
              </button>
              <div className="cta-orb"></div>
            </section>
          )}
        </main>
      )}

      <footer className="site-footer">
        <button className="brand footer-brand" onClick={() => go('home')}>
          <span className="brand-symbol">F</span>
          <span>flowshark<span className="brand-dot">.ai</span></span>
        </button>
        <p>Client operations, flowing better.</p>
        <span>© 2026 Flowshark.ai · Template Studio</span>
      </footer>
    </div>
  )
}

function TemplateCard({ template, index, onChoose }: { template: Template; index: number; onChoose: () => void }) {
  // Render distinct miniature previews for each template
  const renderCardContent = () => {
    switch (template.id) {
      // Invoices
      case 'luxe':
        return (
          <div className="h-full flex flex-col justify-between text-left">
            <div className="bg-[#141414] -mx-4 -mt-4 p-2.5 rounded-t text-amber-200 border-b border-[#b78b42]">
              <div className="flex justify-between items-center text-[7px]">
                <span className="font-serif font-bold text-amber-300">FLOWSHARK</span>
                <span className="font-serif tracking-widest text-amber-200">INVOICE</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2 text-[6px] text-stone-600">
              <div className="p-1 bg-[#fbf7ee] rounded border border-[#ebdcc4]">
                <b>Billed to:</b><br />BrightLens Media
              </div>
              <div className="p-1 bg-[#181818] text-amber-100 rounded">
                <b>№ FS-2026-0428</b><br />Due: 27 Oct
              </div>
            </div>
            <div className="my-1.5 border border-[#e4dcce] rounded overflow-hidden">
              <div className="bg-[#141414] text-amber-300 text-[5px] font-bold py-0.5 px-1 flex justify-between">
                <span>SERVICES</span><span>AMOUNT</span>
              </div>
              <div className="bg-white py-0.5 px-1 text-[5px] flex justify-between border-b border-stone-100">
                <span>Business Plan</span><span>$299.00</span>
              </div>
              <div className="bg-[#fcfaf6] py-0.5 px-1 text-[5px] flex justify-between">
                <span>Automations Setup</span><span>$499.00</span>
              </div>
            </div>
            <div className="flex justify-between items-center bg-[#151413] text-white p-1 rounded border border-[#b78b42] text-[6px]">
              <span className="text-[#b78b42] font-bold">TOTAL DUE</span>
              <span className="font-serif font-bold text-amber-100">$1,389.92</span>
            </div>
            <div className="font-serif italic text-center text-[6px] text-amber-800 mt-1">
              Thank you for your business.
            </div>
          </div>
        )

      case 'modern':
        return (
          <div className="h-full flex flex-col justify-between text-left">
            <div className="flex justify-between items-start pb-1 border-b border-violet-100">
              <div className="flex items-center gap-1 text-[7px] font-bold text-violet-950">
                <span className="w-3 h-3 rounded bg-violet-600 text-white flex items-center justify-center text-[6px]">F</span>
                Flowshark
              </div>
              <div className="text-[10px] font-black text-violet-600 font-sans tracking-tight">INVOICE</div>
            </div>
            <div className="grid grid-cols-3 gap-1 my-1 text-[5px]">
              <div className="bg-violet-50 p-1 rounded text-violet-900">№ 0428</div>
              <div className="bg-violet-50 p-1 rounded text-violet-900">13 Oct</div>
              <div className="bg-violet-100 p-1 rounded text-violet-900 font-bold">Due 27 Oct</div>
            </div>
            <div className="rounded overflow-hidden border border-violet-100 my-1">
              <div className="bg-violet-600 text-white text-[5px] font-bold py-0.5 px-1 flex justify-between">
                <span>ITEM</span><span>AMOUNT</span>
              </div>
              <div className="p-0.5 bg-white text-[5px] flex justify-between">
                <span>Automation Setup</span><span>$499.00</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 mt-1 text-[5px]">
              <div className="bg-violet-50 p-1 rounded text-violet-800">
                <b>Bank:</b> Silicon Tech
              </div>
              <div className="bg-violet-600 text-white p-1 rounded font-bold flex justify-between items-center">
                <span>TOTAL</span><span>$1,389.92</span>
              </div>
            </div>
          </div>
        )

      case 'corporate':
        return (
          <div className="h-full flex flex-col justify-between text-left">
            <div className="bg-[#0877df] -mx-4 -mt-4 p-2 rounded-t text-white">
              <div className="flex justify-between items-center text-[7px]">
                <span className="font-bold">FLOWSHARK CORP</span>
                <span className="font-black">TAX INVOICE</span>
              </div>
              <div className="text-[5px] text-blue-100 flex justify-between mt-1">
                <span>REF: FS-2026-0428</span>
                <span>NET 14 DAYS</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 my-1 text-[5px] text-slate-700 bg-slate-50 p-1 rounded border border-slate-200">
              <div><b>CLIENT:</b> BrightLens</div>
              <div><b>SUPPLIER:</b> Flowshark</div>
            </div>
            <div className="border border-slate-200 rounded overflow-hidden my-1">
              <div className="bg-[#0877df] text-white text-[5px] font-bold py-0.5 px-1 flex justify-between">
                <span>DESCRIPTION</span><span>TOTAL</span>
              </div>
              <div className="p-0.5 text-[5px] flex justify-between bg-white">
                <span>Enterprise Suite</span><span>$1,295.00</span>
              </div>
            </div>
            <div className="bg-[#0877df] text-white p-1 rounded font-bold text-[6px] flex justify-between items-center">
              <span>TOTAL DUE</span><span>$1,389.92</span>
            </div>
          </div>
        )

      case 'minimal':
        return (
          <div className="h-full flex flex-col justify-between text-left bg-white text-black font-mono">
            <div className="flex justify-between items-start pb-1">
              <span className="text-[7px] font-bold border border-black px-1">F</span>
              <span className="text-[9px] font-bold uppercase tracking-widest font-sans">INVOICE</span>
            </div>
            <div className="w-full h-px bg-black my-1"></div>
            <div className="text-[5px] flex justify-between py-0.5 text-neutral-600">
              <span>№ FS-2026-0428</span>
              <span>DUE: 27 OCT</span>
            </div>
            <div className="w-full h-px bg-neutral-200 my-0.5"></div>
            <div className="text-[5px] text-neutral-800 my-1">
              Billed to: <b>BrightLens Media</b>
            </div>
            <div className="border-t border-b border-black py-1 my-1 text-[5px]">
              <div className="flex justify-between font-bold">
                <span>ITEM</span><span>AMT</span>
              </div>
              <div className="flex justify-between text-neutral-600 mt-0.5">
                <span>Services</span><span>$1,389.92</span>
              </div>
            </div>
            <div className="flex justify-between items-center font-bold text-[6px] border-b-2 border-black pb-0.5">
              <span>TOTAL</span><span>$1,389.92</span>
            </div>
          </div>
        )

      case 'creative':
        return (
          <div className="h-full flex flex-col justify-between text-left bg-[#fffaf5] text-[#2e1d16]">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[5px] font-bold uppercase text-orange-700 bg-orange-100 px-1 py-0.5 rounded">STUDIO</span>
                <div className="font-serif font-black text-[9px] text-stone-900 mt-1 leading-tight">Statement of<br/><i className="text-[#e56f4e]">Services</i></div>
              </div>
              <div className="bg-orange-100/80 p-1 rounded text-[5px] font-mono text-orange-950 font-bold">
                № 0428
              </div>
            </div>
            <div className="bg-orange-50 border-l-2 border-[#e56f4e] p-1 rounded-r my-1 text-[5px] text-stone-700">
              Partner: <b>BrightLens Media</b>
            </div>
            <div className="space-y-0.5 my-1">
              <div className="bg-white p-1 rounded border border-orange-100 flex justify-between text-[5px]">
                <span className="font-medium text-stone-800">01 Automation Setup</span>
                <span className="font-bold">$499.00</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#e56f4e] to-amber-700 text-white p-1 rounded text-[6px] flex justify-between items-center font-bold">
              <span>INVESTMENT</span><span>$1,389.92</span>
            </div>
          </div>
        )

      case 'bold':
        return (
          <div className="h-full flex flex-col justify-between text-left bg-[#0c0b14] text-white">
            <div className="h-0.5 bg-[#7864ff] -mx-4 -mt-4 mb-2 shadow-[0_0_8px_#7864ff]"></div>
            <div className="flex justify-between items-start">
              <span className="w-4 h-4 rounded bg-[#7864ff] flex items-center justify-center text-[7px] font-bold">F</span>
              <span className="text-[10px] font-black text-white tracking-tight">INVOICE</span>
            </div>
            <div className="grid grid-cols-2 gap-1 my-1 text-[5px] font-mono">
              <div className="bg-[#141324] border border-violet-900/50 p-1 rounded text-violet-300">ID: 0428</div>
              <div className="bg-[#141324] border border-violet-900/50 p-1 rounded text-violet-300">DUE: 27 OCT</div>
            </div>
            <div className="border border-violet-900/40 rounded overflow-hidden my-1 bg-[#121120]">
              <div className="bg-[#1a182e] text-violet-300 text-[5px] font-bold py-0.5 px-1 flex justify-between">
                <span>SPEC</span><span>VALUE</span>
              </div>
              <div className="p-0.5 text-[5px] flex justify-between text-slate-200">
                <span>Core Setup</span><span>$499.00</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#7864ff] to-violet-900 text-white p-1 rounded font-bold text-[6px] flex justify-between items-center shadow">
              <span>SETTLEMENT</span><span>$1,389.92</span>
            </div>
          </div>
        )

      // Proposals
      case 'proposal-luxe':
      case 'proposal-minimal':
        return (
          <div className="h-full flex flex-col justify-between text-left bg-white text-slate-800">
            <div className="flex justify-between items-center text-[6px] text-slate-400">
              <span className="font-bold text-blue-600">FLOWSHARK.AI</span>
              <span>SPEC // 2026</span>
            </div>
            <div className="my-1">
              <div className="text-[9px] font-black uppercase text-slate-900 leading-tight">
                Client <br/><span className="text-[#1764e8]">Operations</span><br/>Platform.
              </div>
            </div>
            <div className="border border-slate-200 p-1 rounded bg-slate-50 flex items-center justify-between text-[5px] my-1">
              <span className="font-mono text-slate-400">ARCH_STRUCT</span>
              <span className="w-2 h-2 rounded bg-[#1764e8]"></span>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[5px] my-1">
              <div className="bg-slate-100 p-1 rounded">01 Summary</div>
              <div className="bg-blue-50 p-1 rounded text-blue-800 font-bold">02 Scope</div>
            </div>
            <div className="bg-slate-900 text-white p-1 rounded text-[6px] flex justify-between items-center font-bold">
              <span>INVESTMENT</span><span className="text-blue-400">$1,389.92</span>
            </div>
          </div>
        )

      case 'proposal-dark':
        return (
          <div className="h-full flex flex-col justify-between text-left bg-[#090912] text-white">
            <div className="flex justify-between items-center text-[6px] text-violet-400">
              <span className="font-bold">STRATEGY</span>
              <span className="font-mono">№ 0428</span>
            </div>
            <div className="my-1">
              <div className="text-[9px] font-black uppercase leading-tight">
                STRATEGIC <br/><span className="text-[#7864ff]">ACCELERATION</span><br/>PROPOSAL.
              </div>
            </div>
            <div className="bg-[#121124] border border-violet-900/40 p-1 rounded my-1">
              <div className="text-[5px] font-mono text-violet-300 font-bold mb-1">ROADMAP: 4-STAGE</div>
              <div className="flex justify-between text-[4px] text-slate-400">
                <span>01 Discovery</span><span>02 Build</span><span>03 Launch</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-violet-950 to-[#121124] border border-violet-500/40 p-1 rounded text-[6px] flex justify-between items-center font-bold">
              <span className="text-violet-300">TOTAL PROPOSED</span><span className="text-white">$1,389.92</span>
            </div>
          </div>
        )

      case 'proposal-creative':
        return (
          <div className="h-full flex flex-col justify-between text-left bg-[#fffcf7] text-[#2c221e]">
            <div className="flex justify-between items-center text-[6px] text-amber-800">
              <span className="font-serif font-bold">FLOWSHARK</span>
              <span>№ 0428</span>
            </div>
            <div className="my-1">
              <div className="font-serif font-black text-[9px] leading-tight">
                Ideas into <br/><i className="text-[#d89a55]">Measurable Impact.</i>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 my-1">
              <div className="bg-[#fef08a] p-1 rounded text-[5px] font-serif italic text-amber-900 shadow-xs">
                "3x velocity!"
              </div>
              <div className="bg-[#fed7aa] p-1 rounded text-[5px] font-serif italic text-orange-950 shadow-xs">
                "Dedicated Slack"
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#d89a55] to-amber-700 text-white p-1 rounded text-[6px] flex justify-between items-center font-bold">
              <span>TOTAL INVESTMENT</span><span>$1,389.92</span>
            </div>
          </div>
        )

      case 'proposal-corporate':
        return (
          <div className="h-full flex flex-col justify-between text-left bg-white text-zinc-900 font-sans">
            <div className="flex justify-between items-center text-[6px] text-zinc-500 border-b border-zinc-900 pb-1">
              <span className="font-bold text-zinc-900">FLOWSHARK CORP</span>
              <span className="font-mono">CONFIDENTIAL</span>
            </div>
            <div className="my-1">
              <div className="text-[8px] font-black uppercase text-zinc-900 leading-tight">
                Statement of Work & Strategic Architecture
              </div>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 p-1 rounded my-1 text-[5px] font-mono text-zinc-600">
              <div>1.0 Executive Summary</div>
              <div>2.0 Scope & Deliverables Matrix</div>
              <div>3.0 Mutual Sign-Off</div>
            </div>
            <div className="flex justify-between items-center border border-zinc-300 p-1 rounded text-[6px] font-bold">
              <span>AGREED INVESTMENT</span><span className="font-mono text-zinc-900">$1,389.92</span>
            </div>
          </div>
        )

      case 'proposal-artistic':
        return (
          <div className="h-full flex flex-col justify-between text-left bg-[#fff9fb] text-[#2c1b22]">
            <div className="flex justify-between items-center text-[6px] text-pink-700">
              <span className="font-serif font-bold">ARTISTIC STUDIO</span>
              <span>№ 0428</span>
            </div>
            <div className="my-1">
              <div className="font-serif font-black text-[9px] leading-tight">
                The Architecture <br/><i className="text-[#ec8aa8]">of Experience.</i>
              </div>
            </div>
            <div className="flex justify-between items-center p-1 rounded-full bg-pink-100 text-[5px] text-pink-900 font-bold my-1">
              <span>01 Discovery</span><span>→</span><span>02 Design</span><span>→</span><span>03 Launch</span>
            </div>
            <div className="bg-gradient-to-r from-[#ec8aa8] to-rose-600 text-white p-1 rounded text-[6px] flex justify-between items-center font-bold">
              <span>AGREED TOTAL</span><span>$1,389.92</span>
            </div>
          </div>
        )

      case 'proposal-blueprint':
        return (
          <div className="h-full flex flex-col justify-between text-left bg-[#f7fbff] text-[#0f2842] font-mono border border-blue-200">
            <div className="bg-[#0b335c] text-white p-1 rounded-t text-[6px] flex justify-between items-center">
              <span>SYS_SPEC // 0428</span>
              <span className="text-cyan-300 font-bold">APPROVED</span>
            </div>
            <div className="my-1 text-[7px] font-bold font-sans text-[#0b335c] uppercase leading-tight">
              ARCHITECTURE SPECIFICATION
            </div>
            <div className="grid grid-cols-3 gap-0.5 text-[4px] my-1 text-center font-bold">
              <div className="bg-white border border-blue-300 p-0.5 rounded">01 INGEST</div>
              <div className="bg-blue-100 border border-blue-400 p-0.5 rounded">02 FINN AI</div>
              <div className="bg-white border border-blue-300 p-0.5 rounded">03 PIPELINE</div>
            </div>
            <div className="bg-[#0b335c] text-white p-1 rounded text-[6px] flex justify-between items-center">
              <span className="text-cyan-300">TOTAL CAPITAL</span><span>$1,389.92</span>
            </div>
          </div>
        )

      default:
        return (
          <div className="h-full flex flex-col justify-between text-left">
            <div className="art-top">
              <span className="art-logo"><b>F</b> Flowshark</span>
              <span>{template.kind.toUpperCase()}<small> NO. FS-2026-0428</small></span>
            </div>
            <div className="art-heading">{template.name}</div>
            <div className="art-total"><span>TOTAL</span><b>$1,389.92</b></div>
          </div>
        )
    }
  }

  return (
    <article className="template-card">
      <button
        className={`template-art art-${template.style}`}
        onClick={onChoose}
        aria-label={`Preview ${template.name} template`}
      >
        <div className="art-paper">
          {renderCardContent()}
        </div>
        <span className="art-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="art-select">Preview template <ArrowRight size={14}/></span>
      </button>
      <div className="template-info">
        <div>
          <h3>{template.name}</h3>
          <p>{template.description}</p>
        </div>
        <span className="template-type">{template.kind}</span>
      </div>
      <button className="card-select" onClick={onChoose}>
        Use template <ArrowRight size={15}/>
      </button>
    </article>
  )
}
