# MATIMA LANDING — Design System

## Couleurs
```css
Accent :        #00A394
Accent hover :  #00C4B3
Texte fort :    #0F1923
Texte doux :    #6B7280
Texte hint :    #9CA3AF
Fond blanc :    #FFFFFF
Fond gris :     #F4F5F7
Bordures :      #E5E7EB
```

## Typographie
- Font : Inter (Google Fonts)
- H1 : text-4xl md:text-6xl font-bold tracking-tight
- H2 : text-3xl md:text-4xl font-bold tracking-tight
- H3 : text-xl font-semibold
- Corps : text-base text-[#6B7280]
- Jamais font-bold sur le corps

## Layout
- Max width : max-w-6xl mx-auto px-4 md:px-8
- Sections : py-20 md:py-32
- Gap entre éléments : gap-8 md:gap-12

## Composants

### Bouton principal
```html
<a class="bg-[#00A394] hover:bg-[#00C4B3] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
```

### Bouton secondaire
```html
<a class="border border-[#E5E7EB] hover:bg-[#F4F5F7] text-[#0F1923] px-6 py-3 rounded-xl font-semibold transition-colors">
```

### Card feature
```html
<div class="bg-white border border-[#E5E7EB] rounded-2xl p-6">
```

### Badge
```html
<span class="bg-[#E6F7F5] text-[#00796B] text-sm px-3 py-1 rounded-full font-medium">
```

## Sections
- Navbar : sticky top-0 bg-white/80 backdrop-blur border-b border-[#E5E7EB]
- Hero : fond blanc, centré, py-32
- Problème : fond #F4F5F7
- Features : fond blanc
- Plans : fond #F4F5F7
- CTA : fond #0F1923, texte blanc
- Footer : fond blanc, border-t

## Responsive
- Mobile first
- Grilles : grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Texte : text-4xl sur mobile, text-6xl sur desktop
- Padding : px-4 mobile, px-8 desktop