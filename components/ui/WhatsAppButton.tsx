'use client'

export default function WhatsAppButton() {
  const phoneNumber = '917208310999'
  const message = 'Hi, I came across your website, I would like to have more information about the SSL Bellagio project'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999,
        background: '#25D366',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="35"
        height="35"
        fill="#ffffff"
      >
        <path d="M12.031 0C5.398 0 .012 5.385.012 12.018c0 2.12.55 4.195 1.597 6.012L0 24l6.115-1.604c1.761.968 3.755 1.48 5.916 1.48 6.634 0 12.019-5.385 12.019-12.018S18.665 0 12.031 0zm0 21.875c-1.785 0-3.535-.48-5.066-1.39l-.364-.216-3.766.988.995-3.67-.237-.378c-1-1.593-1.528-3.428-1.528-5.333 0-5.534 4.502-10.038 10.035-10.038 5.53 0 10.036 4.504 10.036 10.038 0 5.535-4.506 10.037-10.036 10.037zm5.502-7.535c-.302-.152-1.787-.882-2.064-.983-.277-.102-.48-.152-.682.152-.202.304-.78 1.033-.956 1.236-.176.203-.353.228-.655.076-1.597-.8-2.73-1.644-3.8-3.434-.277-.456.273-.427.864-1.6.076-.153.038-.28-.038-.432-.076-.152-.682-1.644-.935-2.253-.246-.592-.496-.512-.682-.522-.176-.01-.378-.01-.58-.01-.202 0-.53.076-.807.38C6.67 7.02 5.913 7.73 5.913 9.176c0 1.446.883 2.84 1.01 3.013.126.172 2.054 3.133 4.975 4.394 1.956.843 2.76.903 3.693.763 1.055-.16 2.45-.984 2.775-1.936.326-.953.326-1.77.228-1.937-.098-.172-.375-.274-.677-.426z" />
      </svg>
    </a>
  )
}
