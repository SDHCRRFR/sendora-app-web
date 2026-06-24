<script lang="ts">
import { defineComponent, h } from 'vue'

type IconNode = [string, Record<string, string | number>]

/* Line icons (24×24, currentColor) - same visual language as the
   theme toggle. Add an entry here to expose a new icon. */
const icons: Record<string, IconNode[]> = {
  mail: [
    ['rect', { x: 2, y: 4, width: 20, height: 16, rx: 2 }],
    ['path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' }],
  ],
  'shield-check': [
    [
      'path',
      {
        d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
      },
    ],
    ['path', { d: 'm9 12 2 2 4-4' }],
  ],
  scale: [
    ['path', { d: 'm16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z' }],
    ['path', { d: 'm2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z' }],
    ['path', { d: 'M7 21h10' }],
    ['path', { d: 'M12 3v18' }],
    ['path', { d: 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2' }],
  ],
  'life-buoy': [
    ['circle', { cx: 12, cy: 12, r: 10 }],
    ['path', { d: 'm4.93 4.93 4.24 4.24' }],
    ['path', { d: 'm14.83 9.17 4.24-4.24' }],
    ['path', { d: 'm14.83 14.83 4.24 4.24' }],
    ['path', { d: 'm9.17 14.83-4.24 4.24' }],
    ['circle', { cx: 12, cy: 12, r: 4 }],
  ],
  'credit-card': [
    ['rect', { x: 2, y: 5, width: 20, height: 14, rx: 2 }],
    ['line', { x1: 2, x2: 22, y1: 10, y2: 10 }],
  ],
  user: [
    ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }],
    ['circle', { cx: 12, cy: 7, r: 4 }],
  ],
  lock: [
    ['rect', { x: 3, y: 11, width: 18, height: 11, rx: 2 }],
    ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4' }],
  ],
  bug: [
    ['path', { d: 'm8 2 1.88 1.88' }],
    ['path', { d: 'M14.12 3.88 16 2' }],
    ['path', { d: 'M9 7.13v-1a3.003 3.003 0 1 1 6 0v1' }],
    [
      'path',
      { d: 'M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6' },
    ],
    ['path', { d: 'M12 20v-9' }],
    ['path', { d: 'M6.53 9C4.6 8.8 3 7.1 3 5' }],
    ['path', { d: 'M6 13H2' }],
    ['path', { d: 'M3 21c0-2.1 1.7-3.9 3.8-4' }],
    ['path', { d: 'M20.97 5c0 2.1-1.6 3.8-3.5 4' }],
    ['path', { d: 'M22 13h-4' }],
    ['path', { d: 'M17.2 17c2.1.1 3.8 1.9 3.8 4' }],
  ],
  handshake: [
    ['path', { d: 'm11 17 2 2a1 1 0 1 0 3-3' }],
    [
      'path',
      {
        d: 'm14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4',
      },
    ],
    ['path', { d: 'm21 3 1 11h-2' }],
    ['path', { d: 'M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3' }],
    ['path', { d: 'M3 4h8' }],
  ],
  package: [
    ['path', { d: 'm7.5 4.27 9 5.15' }],
    [
      'path',
      {
        d: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z',
      },
    ],
    ['path', { d: 'm3.3 7 8.7 5 8.7-5' }],
    ['path', { d: 'M12 22V12' }],
  ],
  'map-pin': [
    [
      'path',
      {
        d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0',
      },
    ],
    ['circle', { cx: 12, cy: 10, r: 3 }],
  ],
  'message-circle': [['path', { d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z' }]],
  star: [
    [
      'path',
      {
        d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z',
      },
    ],
  ],
  globe: [
    ['circle', { cx: 12, cy: 12, r: 10 }],
    ['path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' }],
    ['path', { d: 'M2 12h20' }],
  ],
  fingerprint: [
    ['path', { d: 'M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4' }],
    ['path', { d: 'M14 13.12c0 2.38 0 6.38-1 8.88' }],
    ['path', { d: 'M17.29 21.02c.12-.6.43-2.3.5-3.02' }],
    ['path', { d: 'M2 12a10 10 0 0 1 18-6' }],
    ['path', { d: 'M2 16h.01' }],
    ['path', { d: 'M21.8 16c.2-2 .131-5.354 0-6' }],
    ['path', { d: 'M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2' }],
    ['path', { d: 'M8.65 22c.21-.66.45-1.32.57-2' }],
    ['path', { d: 'M9 6.8a6 6 0 0 1 9 5.2v2' }],
  ],
  'check-circle': [
    ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335' }],
    ['path', { d: 'm9 11 3 3L22 4' }],
  ],
  'alert-triangle': [
    ['path', { d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z' }],
    ['path', { d: 'M12 9v4' }],
    ['path', { d: 'M12 17h.01' }],
  ],
}

export default defineComponent({
  name: 'AppIcon',
  props: {
    name: { type: String, required: true },
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          class: 'app-icon',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': 2,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'aria-hidden': 'true',
        },
        (icons[props.name] ?? []).map(([tag, attrs]) => h(tag, attrs)),
      )
  },
})
</script>
