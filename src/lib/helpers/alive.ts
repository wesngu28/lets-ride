import { onMount } from 'svelte'

export const alive = (fn: Function, ms: number) => {
  onMount(() => {
    const interval = setInterval(fn, ms)
    fn()

    return () => clearInterval(interval)
  })
}
