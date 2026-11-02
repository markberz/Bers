import technologyFallbackIcon from '../assets/technology-fallback.svg'

export const technologyIcons = {
  // Frontend & Web Development
  React: 'react',
  CSS: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/css/default.svg',
  HTML: 'html5',
  JavaScript: 'javascript',
  'Tailwind CSS': 'tailwindcss',
  'Node.js': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nodejs/default.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/bootstrap/default.svg',
  Vite: 'vite',

  //Design & Editing Pictures
  Canva: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg',
  Figma: 'figma',
  
  //Backend & Database
  'VB.NET': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/visualbasic/default.svg',
  Python: 'python',
  Rust: 'rust',
  'C++': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/cplusplus/default.svg',
  'Edge Impulse': 'edgeimpulse',
  Kodular: 'kodular',
  
  //Tools & Version Control
  'Arduino IDE': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/arduino-badge/default.svg',
  Git: 'git',
  GitHub: 'github',
  'GitHub Actions': 'githubactions',
  Vercel: 'vercel',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  Composer: 'composer',
  npm: 'npm',
  Tauri: 'tauri',
  'Stack Overflow': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/stack-overflow/default.svg',

  // AI & Intelligent Systems
  'Gemini AI': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/gemini/default.svg',
  OpenAI: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/openai/default.svg',
  'Groq AI': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/grok/default.svg',
  'Claude AI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/claude/claude-original.svg',
  'OpenRouter AI': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/openrouter/default.svg',
  'GitHub Copilot': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/github-copilot/default.svg',

  // Technical Operations
  'Computer Troubleshooting': 'https://cdn.jsdelivr.net/gh/Templarian/MaterialDesign@master/svg/tools.svg',
  'Computer Hardware Maintenance': 'https://cdn.jsdelivr.net/gh/Templarian/MaterialDesign@master/svg/desktop-tower-monitor.svg',
  'Software Installation and Configuration': 'https://cdn.jsdelivr.net/gh/Templarian/MaterialDesign@master/svg/application-settings.svg',
  'Operating System Installation': 'https://cdn.jsdelivr.net/gh/Templarian/MaterialDesign@master/svg/laptop.svg',
  'Network Configuration': 'https://cdn.jsdelivr.net/gh/Templarian/MaterialDesign@master/svg/network.svg',
  'Printer Installation': 'https://cdn.jsdelivr.net/gh/Templarian/MaterialDesign@master/svg/printer.svg',
  'Remote Technical Support': 'https://cdn.jsdelivr.net/gh/Templarian/MaterialDesign@master/svg/remote-desktop.svg',

  // Administrative & Office Tools
  'Microsoft Word': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/microsoft-word/default.svg',
  'Microsoft Excel': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/microsoft-excel/default.svg',
  'Microsoft PowerPoint': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/microsoft-powerpoint/default.svg',
  'Google Drive': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-drive-2026/default.svg',
  'Monday.com': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/monday/default.svg',
  Calendly: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/calendly/default.svg',
  'Data Encoding': 'https://cdn.jsdelivr.net/gh/Templarian/MaterialDesign@master/svg/keyboard.svg',
}

export const technologyIconsWhiteOnDark = new Set([
  'Rust',
  'GitHub',
  'Vercel',
  'Computer Troubleshooting',
  'Computer Hardware Maintenance',
  'Software Installation and Configuration',
  'Operating System Installation',
  'Network Configuration',
  'Printer Installation',
  'Remote Technical Support',
  'Data Encoding',
])

function TechnologyTag({ name }) {
  const icon = technologyIcons[name]
  const iconSource = icon
    ? icon.startsWith('https://') ? icon : `https://cdn.simpleicons.org/${icon}`
    : technologyFallbackIcon
  const iconClassName = technologyIconsWhiteOnDark.has(name)
    ? 'technology-icon-slot technology-icon-white-on-dark'
    : 'technology-icon-slot'

  return (
    <span className="technology-tag">
      <img
        className={iconClassName}
        src={iconSource}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        onError={(event) => {
          event.currentTarget.onerror = null
          event.currentTarget.src = technologyFallbackIcon
        }}
      />
      {name}
    </span>
  )
}

export default TechnologyTag
