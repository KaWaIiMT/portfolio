# 作品集封面生成总览

## 卡片尺寸

| 卡片类型 | 实际渲染尺寸（桌面端） | 图片比例 | 推荐生成分辨率 |
|---|---|---|---|
| 精选大卡片（Featured） | 344×560px, 图片区占 60%（344×336px） | **16:9** | 1920×1080 |
| 小卡片（More） | 344×240px, 图片区占 55%（344×132px） | **16:9** | 1920×1080 |

> 代码配置：`isFeatured ? "h-[480px] md:h-[560px]" : "h-[240px]"`，图片区 `isFeatured ? "h-[60%]" : "h-[55%]"`



## 通用生图规则（所有项目适用）

- 横版 16:9，推荐 1920×1080
- 四周**渐暗（vignette）**，边缘融入纯黑 `#000000`
- 主体放在画面中心或**偏左**，右侧留暗区（文字叠加区）
- 暗色调为主，局部高亮发光
- **不要文字、Logo、UI 元素**

---

## 1. 《代码：升变》Code: Ascension
赛博朋克 Roguelike 卡牌游戏

```
cinematic game cover, cyberpunk roguelike card game atmosphere,
pure black background with soft vignette fading from center,
glowing neon cyan and magenta digital code streams weaving through floating holographic cards,
circuit board patterns etched into the cards, subtle volumetric fog,
rim light illuminating card edges, dark cinematic color grading,
no text no logo no UI elements,
16:9 aspect ratio, --ar 16:9 --style raw
```

---

## 2. 《疫城札记》Plague City Chronicles
手绘 2D 叙事冒险

```
hand-drawn watercolor and ink illustration of a melancholic city street at dusk,
warm amber streetlight casting long shadows on empty pavement,
closed shop fronts with scattered papers in the wind,
artistic brush stroke texture, painterly style with muted earth tones,
edges naturally fading to pure black via soft vignette,
emotional and atmospheric composition, no text no logo,
16:9 aspect ratio, --ar 16:9 --style raw
```

---

## 3. 《烟影智援》ViSmoke
AI 无人机火灾救援

```
dramatic night aerial view of forest wildfire,
a search drone with red signal light hovering in foreground,
infrared thermal overlay in orange and red tones mapping fire perimeter,
thin white vector guidance lines connecting drone to distant command glow,
dark smoke plumes rising against black sky,
edges completely black via vignette, intense cinematic lighting,
no visible UI panels no text no logo,
16:9 aspect ratio, --ar 16:9 --style raw
```

---

## 4. 《银星劫》Silver Star Heist
科幻 3D 太空动作

```
cinematic wide shot of a chrome space station in deep space,
metallic hull reflecting distant purple and blue nebula light,
a single small spaceship approaching docking bay in the distance,
dark starfield background, subtle lens flare from a distant sun,
edges fading to complete black, clean minimalist sci-fi composition,
no text no logo, 16:9 aspect ratio, --ar 16:9 --style raw
```

---

## 5. 《斑鸠模拟器》Dove Simulator
鸟类飞行模拟

```
photorealistic low-angle shot of a turtledove in mid-flight,
detailed wing feathers catching warm natural sunlight,
soft overcast sky gradient above, blurred city skyline silhouette far below,
peaceful serene atmosphere, cinematic depth of field,
edges naturally darkening to pure black vignette,
no text no logo, 16:9 aspect ratio, --ar 16:9 --style raw
```
