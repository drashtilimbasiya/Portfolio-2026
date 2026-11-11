import { useEffect, useState } from 'react'

// Types each word, pauses, deletes it, then moves to the next one.
// With "reduce motion" enabled the words simply stay static (no typing).
export default function useTyped(words, { type = 70, erase = 38, hold = 1700, gap = 350 } = {}) {
  const [text, setText] = useState(words[0])
  const reduced =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduced) return undefined
    let w = 0
    let i = 0
    let deleting = false
    let timer
    const tick = () => {
      const word = words[w]
      if (!deleting) {
        i += 1
        setText(word.slice(0, i))
        if (i === word.length) { deleting = true; timer = setTimeout(tick, hold); return }
        timer = setTimeout(tick, type)
      } else {
        i -= 1
        setText(word.slice(0, i))
        if (i === 0) { deleting = false; w = (w + 1) % words.length; timer = setTimeout(tick, gap); return }
        timer = setTimeout(tick, erase)
      }
    }
    // start by erasing the first word that is shown on load
    i = words[0].length
    deleting = true
    timer = setTimeout(tick, hold)
    return () => clearTimeout(timer)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { text, reduced }
}
