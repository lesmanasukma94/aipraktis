# AI Praktis Indonesia v2

# 11-COMPONENT-INVENTORY.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan seluruh komponen UI yang digunakan pada AI Praktis Indonesia.

Component Inventory menjadi acuan untuk:

* Astro Components
* UI Development
* Design System
* Design Tokens
* Accessibility
* Testing
* Dokumentasi internal

Setiap komponen hanya boleh memiliki satu implementasi resmi.

---

# 2. Prinsip Component System

Semua komponen mengikuti prinsip berikut.

## Reusable

Komponen dapat digunakan pada banyak halaman.

---

## Composable

Komponen kecil dapat membentuk komponen yang lebih besar.

---

## Accessible

Komponen memenuhi standar WCAG 2.2 AA.

---

## Performant

Komponen menggunakan JavaScript seminimal mungkin.

---

## Independent

Komponen tidak bergantung pada halaman tertentu.

---

# 3. Hirarki Komponen

```text
Primitives
    │
    ▼
Base Components
    │
    ▼
Composite Components
    │
    ▼
Page Sections
```

---

# 4. Level 1 — Primitives

Komponen dasar.

```text
Button

Icon

Text

Heading

Link

Badge

Avatar

Divider

Spinner

Skeleton

Chip

Label

Logo
```

Primitives tidak memiliki logika bisnis.

---

# 5. Level 2 — Base Components

Komponen yang dibangun dari primitives.

```text
Input

Textarea

Checkbox

Radio

Switch

Select

Autocomplete

SearchInput

ButtonGroup

Tabs

Accordion

Alert

Toast

Tooltip

Modal

Drawer

Popover

Dropdown

Pagination

Breadcrumb
```

---

# 6. Level 3 — Composite Components

Gabungan beberapa Base Components.

```text
SearchDialog

MegaMenu

Navbar

ArticleCard

ToolCard

PromptCard

TemplateCard

CategoryCard

AuthorCard

ComparisonCard

FeatureCard

NewsletterForm

CommentForm

RelatedContent

ShareButtons

ReadingProgress

TableOfContents
```

---

# 7. Level 4 — Page Sections

Komponen tingkat halaman.

```text
HeroSection

FeaturedTools

TrendingTools

LatestTutorials

PromptLibrary

TemplateLibrary

NewsletterSection

Testimonials

FAQSection

CTASection

Footer

Header
```

---

# 8. Navigation Components

```text
Header

PrimaryNavigation

SecondaryNavigation

MegaMenu

Breadcrumb

SidebarNavigation

MobileDrawer

SearchDialog

FooterNavigation
```

Semua menggunakan data dari `src/data/navigation/`.

---

# 9. Content Components

```text
ArticleCard

TutorialCard

GuideCard

ReviewCard

NewsCard

ComparisonCard

GlossaryCard

FAQCard
```

Seluruhnya menggunakan pola tampilan yang konsisten.

---

# 10. Entity Components

```text
ToolCard

PromptCard

TemplateCard

CategoryCard

TagBadge

AuthorCard
```

Komponen ini akan menjadi dasar direktori AI Tools dan Prompt Library.

---

# 11. Search Components

```text
SearchInput

SearchButton

SearchDialog

SearchResult

SearchFilters

SearchSuggestions

EmptySearchState

NoResultsState
```

Search merupakan salah satu fitur inti platform.

---

# 12. Form Components

```text
Input

Textarea

Checkbox

Radio

Switch

Select

Autocomplete

FileUpload

FormField

FieldError

HelperText
```

Semua field memiliki label dan validasi.

---

# 13. Feedback Components

```text
Alert

Toast

Spinner

Skeleton

ProgressBar

LoadingOverlay

EmptyState

ErrorState

SuccessState
```

---

# 14. Layout Components

```text
Container

Grid

Stack

Cluster

SidebarLayout

SplitLayout

Section

Card

Panel
```

Layout harus fleksibel dan reusable.

---

# 15. SEO Components

```text
Breadcrumb

ArticleMeta

AuthorMeta

CanonicalLink

SchemaMarkup

SocialShare

ReadingTime
```

Digunakan untuk meningkatkan struktur halaman.

---

# 16. Utility Components

```text
ThemeToggle

LanguageSwitcher

CopyButton

ExternalLink

ScrollToTop

BackButton

AnchorLink

CodeBlock

Callout
```

---

# 17. Props Standard

Seluruh komponen minimal mendukung:

```text
class

id

variant

size

disabled

aria-label
```

Props harus konsisten.

---

# 18. Variants

Contoh variant:

```text
Primary

Secondary

Outline

Ghost

Link

Danger
```

Gunakan variant daripada membuat komponen baru.

---

# 19. Component States

Setiap komponen interaktif harus memiliki state berikut.

```text
Default

Hover

Focus

Active

Disabled

Loading

Error
```

---

# 20. Accessibility Requirements

Semua komponen wajib:

* mendukung keyboard;
* memiliki focus ring;
* menggunakan HTML semantik;
* memiliki ARIA bila diperlukan;
* memenuhi kontras warna minimum.

---

# 21. Performance Requirements

Komponen harus:

* ringan;
* tree-shakeable bila memungkinkan;
* tidak memuat JavaScript tanpa kebutuhan;
* memanfaatkan SSR dan partial hydration sesuai kebutuhan Astro.

---

# 22. Struktur Folder

Struktur komponen yang direkomendasikan.

```text
src/components/

primitives/

base/

composite/

sections/

layouts/

seo/

icons/

forms/

feedback/

navigation/
```

---

# 23. Prioritas Implementasi

## MVP

```text
Button

Input

Card

Header

Footer

HeroSection

SearchDialog

ArticleCard

ToolCard

PromptCard

Breadcrumb
```

---

## Phase 2

```text
MegaMenu

NewsletterForm

ComparisonCard

TableOfContents

ReadingProgress

ThemeToggle
```

---

## Future

```text
Bookmarks

Collections

Rating

Comments

Dashboard Widgets

Learning Path
```

---

# 24. Acceptance Criteria

* [ ] Semua komponen memiliki satu implementasi resmi.
* [ ] Tidak ada duplikasi fungsi.
* [ ] Mendukung Design Tokens.
* [ ] Memenuhi standar aksesibilitas.
* [ ] Siap digunakan kembali pada seluruh halaman.
* [ ] Mendukung performa tinggi di Astro.

---

# 25. Hubungan dengan Dokumen Lain

Dokumen ini menjadi dasar bagi:

* 09-DESIGN-SYSTEM.md
* 10-DESIGN-TOKENS.md
* 12-BLOG-SYSTEM.md
* 13-AI-TOOLS.md
* 14-PROMPT-LIBRARY.md
* 20-ACCESSIBILITY.md
* 22-ANIMATION.md

---

# 26. Changelog

## v2.1

* Menetapkan inventaris komponen resmi.
* Membagi komponen menjadi empat level: Primitives, Base, Composite, dan Page Sections.
* Menambahkan standar props, variants, state, aksesibilitas, performa, dan prioritas implementasi.
* Menetapkan struktur folder komponen untuk implementasi Astro.
