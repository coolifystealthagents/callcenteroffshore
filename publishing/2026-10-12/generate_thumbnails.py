import json
import math
import textwrap
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = json.loads((ROOT / 'publishing/2026-10-12/manifest.json').read_text())
FONT = '/System/Library/Fonts/Supplemental/Arial Bold.ttf'
REGULAR = '/System/Library/Fonts/Supplemental/Arial.ttf'
PALETTES = [
    ((3, 16, 26), (6, 182, 212), (250, 204, 21)),
    ((8, 25, 44), (45, 212, 191), (125, 211, 252)),
    ((22, 18, 42), (167, 139, 250), (251, 191, 36)),
    ((12, 35, 31), (52, 211, 153), (253, 224, 71)),
]

def fit_title(draw, title):
    for size in range(72, 39, -2):
        font = ImageFont.truetype(FONT, size)
        lines = textwrap.wrap(title, width=max(22, int(43 * 56 / size)))
        if len(lines) <= 4 and max(draw.textbbox((0, 0), line, font=font)[2] for line in lines) <= 850:
            return font, lines
    return ImageFont.truetype(FONT, 40), textwrap.wrap(title, width=40)

for index, article in enumerate(MANIFEST['articles']):
    bg, cyan, gold = PALETTES[index % len(PALETTES)]
    image = Image.new('RGB', (1536, 1024), bg)
    draw = ImageDraw.Draw(image)
    # Quiet operations-board geometry echoes the site's dark SLA dashboard visual language.
    draw.rounded_rectangle((56, 52, 1478, 970), radius=32, outline=cyan, width=3)
    draw.rectangle((975, 55, 1475, 967), fill=tuple(min(255, v + 9) for v in bg))
    for row in range(7):
        y = 130 + row * 112
        shift = (index * 37 + row * 29) % 100
        draw.line((1035 + shift, y, 1400, y), fill=cyan, width=5)
        draw.ellipse((1000 + shift, y - 13, 1026 + shift, y + 13), fill=gold)
        draw.rounded_rectangle((1105, y + 20, 1430 - shift // 2, y + 52), 10, outline=(68, 90, 108), width=3)
    # Headset symbol, deliberately illustrative rather than a UI screenshot.
    cx, cy = 1230, 525
    draw.arc((cx - 145, cy - 160, cx + 145, cy + 130), 195, 345, fill=gold, width=16)
    draw.rounded_rectangle((cx - 170, cy - 30, cx - 132, cy + 82), 16, fill=cyan)
    draw.rounded_rectangle((cx + 132, cy - 30, cx + 170, cy + 82), 16, fill=cyan)
    draw.arc((cx + 45, cy + 42, cx + 190, cy + 145), 20, 135, fill=gold, width=9)
    draw.ellipse((cx + 42, cy + 120, cx + 66, cy + 144), fill=gold)

    label_font = ImageFont.truetype(FONT, 27)
    small_font = ImageFont.truetype(REGULAR, 25)
    label = 'OPERATIONS GUIDE' if article['section'] == 'Blog' else 'SOURCE-BACKED RESEARCH'
    draw.rounded_rectangle((86, 90, 570, 146), 12, fill=cyan)
    draw.text((108, 104), label, font=label_font, fill=bg)
    title_font, lines = fit_title(draw, article['title'])
    y = 230
    for line in lines:
        draw.text((88, y), line, font=title_font, fill=(246, 250, 252))
        y += title_font.size + 18
    draw.line((88, 742, 850, 742), fill=gold, width=5)
    draw.text((88, 785), 'Call Center Offshore', font=ImageFont.truetype(FONT, 34), fill=(246, 250, 252))
    draw.text((88, 840), 'Queue  •  evidence  •  owner  •  outcome', font=small_font, fill=cyan)
    draw.text((88, 900), f'{index + 1:02d} / 17', font=small_font, fill=(165, 184, 198))
    target = ROOT / article['thumbnailPath']
    target.parent.mkdir(parents=True, exist_ok=True)
    image.save(target, 'WEBP', quality=88, method=6)

print(f"Generated {len(MANIFEST['articles'])} thumbnails")
