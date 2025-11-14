import sgMail from '@sendgrid/mail'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null)
    const { name, email, phone, message } = body || {}

    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ error: 'nome, email, telefone e assunto são obrigatórios' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    const apiKey = process.env.SENDGRID_API_KEY
    const fromEmail = process.env.SENDGRID_FROM_EMAIL
    const toEmail = process.env.SENDGRID_TO_EMAIL || fromEmail

    if (!apiKey || !fromEmail || !toEmail) {
      return new Response(JSON.stringify({ error: 'Configuração de e-mail ausente' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    sgMail.setApiKey(apiKey)

    const subject = `Novo contato do site | ${name}`
    const text = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n`
    const html = `
			<h2>Novo contato recebido</h2>
			<p><strong>Nome:</strong> ${escapeHtml(String(name))}</p>
			<p><strong>E-mail:</strong> ${escapeHtml(String(email))}</p>
			<p><strong>Telefone:</strong> ${escapeHtml(String(phone))}</p>
			<p><strong>Mensagem:</strong><br/>${escapeHtml(String(message || '-')).replace(/\n/g, '<br/>')}</p>
		`

    await sgMail.send({ to: toEmail, from: fromEmail, subject, text, html })

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Falha ao enviar e-mail' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
