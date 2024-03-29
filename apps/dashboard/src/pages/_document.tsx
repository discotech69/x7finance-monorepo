import { Head, Html, Main, NextScript } from 'next/document';

import appIcons from '../components/appIcons';

const themeScript = `
  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

  function updateTheme(theme) {
    theme = theme ?? window.localStorage.theme ?? 'system'

    if (theme === 'dark' || (theme === 'system' && isDarkMode.matches)) {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light' || (theme === 'system' && !isDarkMode.matches)) {
      document.documentElement.classList.remove('dark')
    }

    return theme
  }

  function updateThemeWithoutTransitions(theme) {
    updateTheme(theme)
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  document.documentElement.setAttribute('data-theme', updateTheme())

  new MutationObserver(([{ oldValue }]) => {
    let newValue = document.documentElement.getAttribute('data-theme')
    if (newValue !== oldValue) {
      try {
        window.localStorage.setItem('theme', newValue)
      } catch {}
      updateThemeWithoutTransitions(newValue)
    }
  }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })

  isDarkMode.addEventListener('change', () => updateThemeWithoutTransitions())
`;

export default function Document() {
  return (
    <Html
      className="h-full bg-gray-50 font-primary [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="twitter:image"
          content="https://assets.x7finance.org/images/open-graph/background.png"
        />

        {appIcons()}
      </Head>
      <body className="h-full overflow-hidden bg-white dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
