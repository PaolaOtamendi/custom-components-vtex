import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const whatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formatMessage = message.replace(/ /g, '%20')

  return (
    <div className="fixed bottom-2 right-2 flex flexColumn z-3">
      <a
        href={`https://wa.me/${phone}?text=${formatMessage}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={logo} alt={message} width={width} height={height} />
      </a>
    </div>
  )
}

whatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

whatsappButton.defaultProps = {
  logo: 'logo.png',
  phone: '3203205566',
  message: 'hola desde el componente directamente',
  width: 100,
  height: 100,
}

whatsappButton.schema = {
  title: 'Button to whatsapp',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo to whatsapp',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Phone to whatsapp',
      type: 'string',
      description: 'Agrega el numero de telefono',
    },
    message: {
      title: 'Message to whatsapp',
      type: 'string',
      description: 'Agrega el mensaje de telefono',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Logo to whatsapp',
      type: 'string',
      description: 'Agrega el ancho de logo',
    },
    height: {
      title: 'Logo to whatsapp',
      type: 'string',
      description: 'Agrega el alto de logo',
    },
  },
}

export default whatsappButton
