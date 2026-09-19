export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const web3formsKey = process.env.WEB3FORMS_KEY
    if (!web3formsKey) {
      console.error('WEB3FORMS_KEY not configured')
      return Response.json(
        { success: false, error: 'Configuration error' },
        { status: 500 }
      )
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: web3formsKey,
        name,
        email,
        message,
        subject: `Nouveau message de ${name}`,
      }),
    })

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    )
  }
}
