import { defineMermaidSetup } from '@slidev/types'

// Same GitHub-dark palette as styles/index.css. Only the 'base' theme
// respects all themeVariables.
//
// In dark mode Slidev passes theme: 'dark' to every diagram, which overrides
// the theme set here. Every mermaid block in slides.md therefore needs
// {theme: 'base'} to get these colours.
const font = '"JetBrains Mono", monospace'

export default defineMermaidSetup(() => ({
  theme: 'base',
  darkMode: true,
  fontFamily: font,
  themeVariables: {
    fontFamily: font,
    fontSize: '16px',
    background: '#0d1117',

    // Flowchart nodes and edges
    primaryColor: '#161b22',
    primaryTextColor: '#e6edf3',
    primaryBorderColor: '#3fb950',
    secondaryColor: '#1f252d',
    tertiaryColor: '#161b22',
    lineColor: '#8b949e',
    edgeLabelBackground: '#0d1117',

    // Sequence diagrams
    actorBkg: '#161b22',
    actorBorder: '#3fb950',
    actorTextColor: '#e6edf3',
    actorLineColor: '#30363d',
    signalColor: '#58a6ff',
    signalTextColor: '#e6edf3',
    noteBkgColor: '#1f252d',
    noteBorderColor: '#ffa657',
    noteTextColor: '#ffa657',

    // gitGraph: one colour per branch
    git0: '#3fb950',
    git1: '#58a6ff',
    git2: '#d2a8ff',
    git3: '#ffa657',
    gitBranchLabel0: '#0d1117',
    gitBranchLabel1: '#0d1117',
    gitBranchLabel2: '#0d1117',
    gitBranchLabel3: '#0d1117',
    commitLabelColor: '#e6edf3',
    commitLabelBackground: '#161b22',
  },
  sequence: {
    actorFontFamily: font,
    messageFontFamily: font,
    noteFontFamily: font,
    mirrorActors: false,
  },
}))
