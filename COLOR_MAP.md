# Color Map Cheat Sheet

Use this file when tweaking the palette so you know where each token appears.

## Main Token Map

- `accent-color`: links, active nav items, primary/info buttons, `kbd`
- `hover-over-accent-color`: hover state for links and buttons
- `text-over-accent-color`: text color on accent backgrounds (button text)
- `bg-primary`: page background, section background base
- `bg-secondary`: alternate section backgrounds and muted surfaces
- `bg-card`: cards (projects, posts, skills, timeline cards)
- `heading-color`: headings (`h1` to `h6`)
- `text-color`: paragraph and normal body text
- `muted-text-color`: metadata, helper text, low-emphasis text
- `footer-color`: footer background
- `highlight-color`: `mark` and highlight blocks
- `inline-code-color`: inline code text color

## Where To Edit

- Theme-level colors for full site behavior:
  - `assets/styles/variables.scss`
- Extra, targeted overrides (borders and special areas):
  - `assets/styles/override.scss`

## Border Controls (current setup)

- Light mode border color:
  - `--jm-light-border` in `assets/styles/override.scss`
- Dark mode border color:
  - `--jm-dark-border` in `assets/styles/override.scss`

## Quick Workflow

1. Change one token in `assets/styles/variables.scss`.
2. Run `hugo server -w`.
3. Hard refresh browser.
4. Check both light and dark theme.
5. Only if needed, fine-tune specific components in `assets/styles/override.scss`.

## Component Map (What You See -> What To Change)

Use this when you notice a specific UI element with the wrong color.

### Navbar

- Main bar background: `bg-primary`
- Nav item text/logo text: `heading-color`
- Active/hover nav item: `accent-color` and `hover-over-accent-color`
- Divider line in navbar: `muted-text-color`
- Dropdown panel background: `bg-card`
- Dropdown border tint: `accent-color`

Common selectors:

- `.top-navbar`
- `.top-navbar .navbar-brand`
- `.top-navbar .navbar-nav .active`
- `.top-navbar .dropdown-menu`

### Hero / Home Section

- Greeting text, typing text, down-arrow: `text-over-accent-color`
- Circular author image background ring: `bg-secondary`

Common selectors:

- `.home .greeting`
- `.home .typing-carousel`
- `.home .arrow`
- `.home img`

### Skill Cards

- Skill card body background: `bg-card`
- Skill card header strip: `bg-primary` (light), `bg-card` (dark)
- Header bottom line: `accent-color`
- Skill text/title: `text-color`, `heading-color`

Common selectors:

- `.skills-section .card`
- `.skills-section .card .card-head`

### Experience Timeline

- Timeline circles/lines/corners: `accent-color`
- Circle text: `text-over-accent-color`
- Bullet/list/body text: `text-color`

Common selectors:

- `.experiences-section .circle`
- `.experiences-section .timeline .vertical-line::after`
- `.experiences-section .timeline .horizontal-line hr`
- `.experiences-section .timeline .horizontal-line .corner`

### Project Cards

- Card/header background: `bg-card`
- Sub-title metadata (timeline/role text): `muted-text-color`
- Card body text: `text-color`

Common selectors:

- `.projects-section .card .card-header`
- `.projects-section .card .card-header .sub-title`

### Footer

- Footer background: `footer-color`
- Footer headings: `inverse-text-color` (light) / `heading-color` (dark)
- Footer links/meta/disclaimer: `muted-text-color`
- Footer input background: `inverse-text-color` (light) / `bg-primary` (dark)

Common selectors:

- `.footer`
- `.footer h5`
- `.footer a`
- `.footer #disclaimer`

### Borders and Separators

- Light borders: `--jm-light-border` in `assets/styles/override.scss`
- Dark borders: `--jm-dark-border` in `assets/styles/override.scss`

Common selectors in your overrides:

- `.card`
- `.section-holder`
- `.container`
- `.navbar`
- `hr`

## Fast Diagnosis Rule

When a color looks wrong:

1. Identify component (navbar, hero, card, timeline, footer).
2. Find it in Component Map above.
3. Change token in `assets/styles/variables.scss` first.
4. Use `assets/styles/override.scss` only if component still does not follow token change.

## Easier Than Inspect: Debug Map Mode

Use this when you want to quickly identify which visual block you are looking at.

Primary way:

1. Open your site.
2. Click the floating `Map` button (bottom-left).
3. Click again to turn it off.

Fallback way (console):

1. Open your site.
2. Open browser console.
3. Run:

```js
document.body.classList.toggle('jm-debug-map')
```

What this shows:

- Dashed outlines around: skills, experiences, education, projects, publications, footer.
- Small top-left labels with the exact section class name.
- Extra outline around filter button groups (`skill`, `project`, `publication` filters).
- Component overlays for cards, buttons, timeline nodes/lines, and key content grids.

Turn off by running the same command again.

Optional force-on / force-off:

```js
document.body.classList.add('jm-debug-map')
document.body.classList.remove('jm-debug-map')
```
