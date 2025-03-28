import type { Ref } from 'vue'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T>(updaterOrValue: T | ((value: T) => T), ref: Ref<T>) {
  if (typeof updaterOrValue === 'function') {
    ref.value = (updaterOrValue as (value: T) => T)(ref.value)
  } else {
    ref.value = updaterOrValue
  }
}
