import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Nick Kulavic - AI Engineer & Full-Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#000000',
          padding: '80px',
        }}
      >
        {/* Accent gradient bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #0066FF 0%, #00AAFF 100%)',
          }}
        />

        {/* NK Logo */}
        <div
          style={{
            display: 'flex',
            fontSize: '32px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '40px',
            letterSpacing: '-1px',
          }}
        >
          NK
        </div>

        {/* Name */}
        <div
          style={{
            display: 'flex',
            fontSize: '72px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-2px',
          }}
        >
          Nick Kulavic
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: '36px',
            fontWeight: 500,
            color: '#0066FF',
            marginBottom: '32px',
          }}
        >
          AI Engineer & Full-Stack Developer
        </div>

        {/* Description */}
        <div
          style={{
            display: 'flex',
            fontSize: '24px',
            color: '#888888',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          14+ years building scalable SaaS solutions. $1.2M+ revenue.
          AWS, React, TypeScript expert.
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            marginTop: '48px',
            gap: '48px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 700, color: '#0066FF' }}>$1.2M+</div>
            <div style={{ fontSize: '16px', color: '#666666' }}>Revenue</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 700, color: '#0066FF' }}>500+</div>
            <div style={{ fontSize: '16px', color: '#666666' }}>Users</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 700, color: '#0066FF' }}>14+</div>
            <div style={{ fontSize: '16px', color: '#666666' }}>Years</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 700, color: '#0066FF' }}>0</div>
            <div style={{ fontSize: '16px', color: '#666666' }}>Breaches</div>
          </div>
        </div>

        {/* Website URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '20px',
            color: '#444444',
          }}
        >
          nickkulavic.ai
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
