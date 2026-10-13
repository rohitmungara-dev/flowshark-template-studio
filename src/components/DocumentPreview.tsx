import type { DocumentData, Template, Kind } from '../types'
import InvoiceLuxe from './InvoiceLuxe'
import InvoiceModern from './InvoiceModern'
import InvoiceCorporate from './InvoiceCorporate'
import InvoiceMinimal from './InvoiceMinimal'
import InvoiceCreative from './InvoiceCreative'
import InvoiceDarkBold from './InvoiceDarkBold'
import ProposalMinimal from './ProposalMinimal'
import ProposalDarkBold from './ProposalDarkBold'
import ProposalCreative from './ProposalCreative'
import ProposalCorporate from './ProposalCorporate'
import ProposalArtistic from './ProposalArtistic'
import ProposalBlueprint from './ProposalBlueprint'

type Props = {
  template: Template
  data: DocumentData
  kind: Kind
  accent: string
}

export default function DocumentPreview({ template, data, kind, accent }: Props) {
  // Registry router based on template.id or template.style
  const renderTemplateComponent = () => {
    switch (template.id) {
      // Invoices
      case 'luxe':
        return <InvoiceLuxe data={data} template={template} accent={accent} />
      case 'modern':
        return <InvoiceModern data={data} template={template} accent={accent} />
      case 'corporate':
        return <InvoiceCorporate data={data} template={template} accent={accent} />
      case 'minimal':
        return <InvoiceMinimal data={data} template={template} accent={accent} />
      case 'creative':
        return <InvoiceCreative data={data} template={template} accent={accent} />
      case 'bold':
        return <InvoiceDarkBold data={data} template={template} accent={accent} />

      // Proposals
      case 'proposal-luxe':
      case 'proposal-minimal':
        return <ProposalMinimal data={data} template={template} accent={accent} />
      case 'proposal-dark':
        return <ProposalDarkBold data={data} template={template} accent={accent} />
      case 'proposal-creative':
        return <ProposalCreative data={data} template={template} accent={accent} />
      case 'proposal-corporate':
        return <ProposalCorporate data={data} template={template} accent={accent} />
      case 'proposal-artistic':
        return <ProposalArtistic data={data} template={template} accent={accent} />
      case 'proposal-blueprint':
        return <ProposalBlueprint data={data} template={template} accent={accent} />

      // Fallback handlers by kind
      default:
        if (kind === 'proposal') {
          return <ProposalMinimal data={data} template={template} accent={accent} />
        }
        return <InvoiceModern data={data} template={template} accent={accent} />
    }
  }

  // Determine if this is a dark background template for canvas background rendering
  const isDark = template.id === 'bold' || template.id === 'proposal-dark'

  return (
    <div
      id="document-canvas"
      className="document-canvas-wrapper w-full flex justify-center"
      style={{
        backgroundColor: isDark ? '#090912' : '#ffffff'
      }}
    >
      {renderTemplateComponent()}
    </div>
  )
}
