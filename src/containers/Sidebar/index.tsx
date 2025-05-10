import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

import {
  FaGithub as FaGithubRaw,
  FaLinkedin as FaLinkedinRaw,
  FaWhatsapp as FaWhatsappRaw,
  FaEnvelope as FaEnvelopeRaw,
  FaReact as FaReactRaw,
  FaNodeJs as FaNodeJsRaw,
  FaHtml5 as FaHtml5Raw,
  FaCss3Alt as FaCss3AltRaw
} from 'react-icons/fa'
import { SiNextdotjs as SiNextdotjsRaw } from 'react-icons/si'

// Casting para JSX
const FaReact = FaReactRaw as unknown as React.FC<{ size?: number; color?: string }>
const FaNodeJs = FaNodeJsRaw as unknown as React.FC<{ size?: number; color?: string }>
const FaHtml5 = FaHtml5Raw as unknown as React.FC<{ size?: number; color?: string }>
const FaCss3Alt = FaCss3AltRaw as unknown as React.FC<{ size?: number; color?: string }>
const FaGithub = FaGithubRaw as unknown as React.FC<{ size?: number; color?: string }>
const FaLinkedin = FaLinkedinRaw as unknown as React.FC<{ size?: number; color?: string }>
const FaWhatsapp = FaWhatsappRaw as unknown as React.FC<{ size?: number; color?: string }>
const FaEnvelope = FaEnvelopeRaw as unknown as React.FC<{ size?: number; color?: string }>
const SiNextdotjs = SiNextdotjsRaw as unknown as React.FC<{ size?: number }>

type Props = {
  trocatema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '16px 0' }}>
        <SiNextdotjs size={24} />
        <FaReact size={24} color="#61DAFB" />
        <FaNodeJs size={24} color="#3C873A" />
        <FaHtml5 size={24} color="#E44D26" />
        <FaCss3Alt size={24} color="#1572B6" />
      </div>
      <Titulo fontSize={20}>Thiago Nascimento</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        thiagogja27
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack
      </Descricao>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
        <a href="https://wa.me/5513997965049" target="_blank" rel="noopener noreferrer" title="WhatsApp">
          <FaWhatsapp size={20} color="#25D366" />
        </a>
        <a href="mailto:thiago_gja27@hotmail.com" title="Email">
          <FaEnvelope size={20} color="#EA4335" />
        </a>
        <a href="https://github.com/thiagogja27" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub size={20} color="#333" />
        </a>
        <a
          href="https://www.linkedin.com/in/thiago-nascimento-4ab7a5243/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin size={20} color="#0A66C2" />
        </a>
      </div>
      <BotaoTema onClick={props.trocatema} style={{ marginTop: '20px' }}>
        Alterar tema
      </BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
