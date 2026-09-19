import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Amor Chhibi - Senior Developer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          gap: '30px',
        }}
      >
        {/* Gradient accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #06B6D4 0%, #8B5CF6 100%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            textAlign: 'center',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#06B6D4',
              margin: '0',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '-2px',
            }}
          >
            Amor Chhibi
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '48px',
              color: '#E2E8F0',
              margin: '0',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: '500',
            }}
          >
            Senior Java Developer
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '32px',
              color: '#94A3B8',
              margin: '0',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            Cloud • Microservices • AI • Keycloak IAM
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            fontSize: '24px',
            color: '#8B5CF6',
            marginTop: 'auto',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          13+ years of enterprise expertise
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
