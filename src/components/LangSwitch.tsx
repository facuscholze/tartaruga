import { useTranslation } from 'react-i18next'
import { langs } from '@/i18n'

export function LangSwitch({ id }: { id?: string }) {
  const { i18n, t } = useTranslation()
  return (
    <div className="flex items-center gap-2" role="group" aria-label={t('footer.lang')} id={id}>
      {langs.map((lng) => (
        <button
          key={lng}
          type="button"
          aria-pressed={i18n.language.startsWith(lng)}
          onClick={() => void i18n.changeLanguage(lng)}
          className={`font-mono text-[0.65rem] tracking-[0.16em] uppercase ${
            i18n.language.startsWith(lng) ? 'text-amber' : 'text-foam/60'
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  )
}
