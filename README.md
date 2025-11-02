# TopChats - Adult Chat Sites Directory

A modern, multilingual directory platform for adult chat sites and cam platforms built with Next.js 15, featuring internationalization, advanced search, and responsive design.

## 🌟 Features

- 🌍 **Multi-language Support**: English, French, Spanish, and German
- 🔍 **Advanced Search**: Smart search with category mapping and keyword matching
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI**: Beautiful interface built with shadcn/ui and Radix UI
- ⚡ **Fast Performance**: Server-side rendering and optimized images
- 🔒 **Secure Redirects**: Geo-targeted redirect system with tracking
- 📊 **SEO Optimized**: Dynamic meta tags and semantic HTML
- 🎯 **Category Pages**: Dedicated pages for different chat categories
- 🔐 **Authentication**: Login and signup pages
- 🏠 **Homepage**: Featured sites and latest reviews

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui + Radix UI
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm/yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd callproject
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
# Create a .env.local file
NEXT_PUBLIC_SERVER_URL=https://your-api-url.com
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── (auth)/         # Authentication pages
│   │   ├── bbwchat/        # Category pages
│   │   ├── ebonychat/
│   │   ├── fetishchat/
│   │   ├── freechat/
│   │   ├── milfchat/
│   │   ├── randomchat/
│   │   ├── sexcams/
│   │   ├── teenchat/
│   │   ├── voyeurcam/
│   │   ├── search/         # Search functionality
│   │   ├── sites/          # Individual site pages
│   │   └── ...
│   └── api/                # API routes
├── components/             # React components
│   ├── banners/           # Banner components
│   └── ui/                # shadcn/ui components
├── data/                   # Static data
│   └── sites.json         # Site listings
├── messages/              # i18n translations
│   ├── en.json           # English
│   ├── fr.json           # French
│   ├── es.json           # Spanish
│   ├── de.json           # German
│   └── links.json        # Redirect links
├── lib/                   # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── utils.ts          # General utilities
│   └── ...
└── middleware.ts          # Next.js middleware
```

## 🎯 Key Features Explained

### Multi-language Support

The app supports 4 languages using `next-intl`:
- English (en)
- French (fr)
- Spanish (es)
- German (de)

Language files are located in `messages/` directory.

### Search Functionality

The search feature includes:
- **Category Mapping**: Maps search terms to relevant categories
- **Word-based Matching**: Searches across titles, slugs, and categories
- **Dynamic URLs**: Translated search queries in URLs
- **SEO Optimized**: Dynamic meta tags based on search query

### Redirect System

Geo-targeted redirects in `/out/[slug]`:
- Country-specific URLs based on user location
- Fallback to global URLs
- Analytics tracking
- Cache support

### Category Pages

Each category has its own page with:
- Hero banner
- Category-specific sites grid
- SEO metadata
- Internationalization

## 📝 Available Scripts

```bash
# Development
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 🌐 Internationalization

All text content is stored in JSON files under `messages/`:
- `en.json` - English
- `fr.json` - French
- `es.json` - Spanish
- `de.json` - German

To add a new language:
1. Create a new JSON file in `messages/`
2. Copy the structure from `en.json`
3. Translate the content
4. Update `i18n/request.ts` to include the new locale

### Translation Files Connection

The translation JSON files (`en.json`, `fr.json`, `es.json`, `de.json`) are connected throughout the project using the `next-intl` library. Here's where and how they're used:

#### **Components Using Translations:**

**Navigation & Layout:**
- `components/Header.tsx` - Uses `Header.nav` and `Header.search` namespaces
- `components/Footer.tsx` - Uses `Footer` namespace
- `components/Shortcuts.tsx` - Uses `shortcuts` namespace with `links` for search URLs
- `components/LanguageSelector.tsx` - Language switcher component

**Category Pages:**
- `app/[locale]/bbwchat/bbwchatpageclient.tsx` - Uses `weTested.bbwCams`
- `app/[locale]/ebonychat/ebonychatpageclient.tsx` - Uses `weTested.ebonyCams`
- `app/[locale]/fetishchat/fetishchatpageclient.tsx` - Uses `weTested.fetishCams`
- `app/[locale]/freechat/freechatpageclient.tsx` - Uses `weTested.freeChat`
- `app/[locale]/milfchat/milfchatpageclient.tsx` - Uses `weTested.milfCams`
- `app/[locale]/randomchat/randomchatpageclient.tsx` - Uses `weTested.randomCams`
- `app/[locale]/sexcams/sexcamspageclient.tsx` - Uses `weTested.sexCams`
- `app/[locale]/teenchat/teenchatpageclient.tsx` - Uses `weTested.teenCams`
- `app/[locale]/voyeurcam/voyeurcampageclient.tsx` - Uses `weTested.voyeurCams`
- `app/[locale]/topchatpageclient.tsx` - Uses `weTested.${siteKey}`

**Grid Components:**
All `*grid.tsx` files use:
- `useMessages()` hook to access site-specific translations
- `singlePageBySlug` namespace for individual site data
- Message data includes features, performers, and other site details

**Search:**
- `app/[locale]/search/searchList.tsx` - Uses `SearchPage` namespace including `searchBanner`, `showing`, `title`

**Authentication:**
- `components/LoginCard.tsx` - Uses `auth` namespace
- `components/SignupCard.tsx` - Uses `auth` namespace

**Content Cards:**
- `components/CamPost.tsx` - Uses `camPost` namespace
- `components/SiteCard.tsx` - Uses root translations
- `components/FullSite.tsx` - Uses `camPost` namespace
- `components/SinglePage.tsx` - Uses dynamic pageKey-based namespaces

**Other Components:**
- `components/Blog.tsx` - Uses `Disposable` namespace
- `components/WeTested.tsx` - Uses `weTested` namespace
- `components/GetUpdateInbox.tsx` - Uses `getUpdateInbox` namespace
- `components/YouLike.tsx` - Uses root translations
- `components/TrinityFeed.tsx` - Uses `Disposable` namespace
- `components/banners/HeroBanner.tsx` - Uses `Banner` namespace
- `components/banners/Sexcams.tsx` - Uses `Banner` namespace
- `components/banners/MainBanner.tsx` - Uses `gbanner` namespace
- `components/CreateForwardingDialog.tsx` - Uses `createForwardingDialog` namespace

#### **How It Works:**

1. **Import the hook:**
```typescript
import { useTranslations, useMessages, useLocale } from 'next-intl';
```

2. **Use in components:**
```typescript
const t = useTranslations('namespace'); // For specific namespace
const messages = useMessages();         // For full message object
const locale = useLocale();             // For current language
```

3. **Access translations:**
```typescript
{t('key')}                    // Simple key
{t('key.subkey')}             // Nested key
{t('key', { param: value })}  // With parameters
```

4. **Multi-language URLs:**
- All URLs are prefixed with locale: `/{locale}/path`
- Search URLs use translated text: `/search?q=${encodeURIComponent(t('links.sexChatSites'))}`

#### **Translation Namespaces:**

The JSON files are organized into namespaces:
- `metadata` - SEO metadata
- `Header` - Navigation and search
- `Footer` - Footer links and content
- `Banner` - Hero banners for categories
- `shortcuts` - Quick links
- `weTested` - Category page content
- `SearchPage` - Search interface
- `camPost` - Site card details
- `singlePageBySlug` - Individual site data
- `auth` - Login/signup forms
- `Footer` - Footer content
- `Disposable` - Blog/feed content
- And more...

## 🔍 Search Implementation

The search uses intelligent category mapping to find relevant results:

```typescript
// Example category mapping
const categoryMappings = {
  "sex chat sites": ["sexcam", "sex"],
  "mobile sex cams": ["sexcam", "mobile"],
  "bdsm sites": ["fetish", "bdsm"],
  // ...
};
```

Searches match against:
- Site titles
- Site slugs
- Categories

## 🎨 Styling

The project uses Tailwind CSS with custom configuration:
- Custom color palette
- Responsive breakpoints
- Custom animations
- Component-based styling

## 📦 Dependencies

### Core
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety

### UI & Styling
- `tailwindcss` - Utility-first CSS
- `@radix-ui/*` - Unstyled UI primitives
- `lucide-react` - Icons
- `class-variance-authority` - Component variants

### Internationalization
- `next-intl` - i18n solution for Next.js

### Utilities
- `clsx` & `tailwind-merge` - Conditional classes
- `xml2js` - XML parsing

## 📊 Data Sources & Architecture

### **Main Data Sources**

#### 1. **Site Data** - `data/sites.json`
**What it contains:**
```json
{
  "id": "1",
  "slug": "topsites",
  "title": "topsites",
  "categories": ["top10chat", "sexcam", "premiumcams", "milfchat"],
  "hero": "/g1.jpeg",
  "logo": "/glogo12.png",
  "link": "https://google.com",
  "performers": "6,000+",
  "rating": 5,
  "featureImage": "/g1.jpeg",
  "benefitImage": "/g1.jpeg"
}
```

**Used by:**
- All grid components (`*grid.tsx`)
- Search functionality
- Site cards
- Category pages
- Single site pages

#### 2. **Translation Data** - `messages/*.json`
**Files:**
- `messages/en.json` - English translations
- `messages/fr.json` - French translations
- `messages/es.json` - Spanish translations
- `messages/de.json` - German translations

**Structure includes:**
- `metadata` - SEO metadata
- `SEO` - Page-specific SEO data
- `Header` - Navigation items
- `Footer` - Footer content
- `Banner` - Hero banner text
- `shortcuts` - Quick link labels
- `weTested` - Category page content
- `singlePageBySlug` - Individual site details
- `auth` - Login/signup forms
- And more...

#### 3. **Redirect Links** - `messages/links.json`
**What it contains:**
```json
{
  "config": {
    "defaultCountry": "US",
    "trackingEnabled": true
  },
  "links": {
    "slug": {
      "global": "https://example.com",
      "countries": {
        "US": "https://us.example.com",
        "UK": "https://uk.example.com"
      },
      "metadata": { ... }
    }
  }
}
```

**Used by:** Middleware for geo-targeted redirects

#### 4. **Environment Variables**
```bash
NEXT_PUBLIC_SERVER_URL=https://next.x-u.cc
```
**Used for:** Image URLs, API endpoints

### **Component Data Flow**

#### **Category Pages** (e.g., `/bbwchat`, `/sexcams`)

**Data Sources:**
1. **Translation Files** → `weTested.{category}Cams` namespace
   - Provides page content (titles, descriptions, lists)
   - Located in: `messages/*.json`

2. **Site Data** → `data/sites.json`
   - Filtered by category
   - Used in: `*pageclient.tsx` and `*grid.tsx`

3. **Message Data** → `useMessages()` hook
   - Individual site features and details
   - Located in: `singlePageBySlug` namespace

**Example Flow:**
```
Category Page Load
  ↓
Fetch translations (weTested.bbwCams)
  ↓
Load sites.json
  ↓
Filter by category (e.g., "bbw")
  ↓
Fetch site-specific messages (singlePageBySlug.{slug})
  ↓
Render with combined data
```

#### **Search Functionality** - `/search`

**Data Sources:**
1. **Query Parameter** → `?q=search+term`
   - From URL
   - Encoded and decoded automatically

2. **Category Mappings** → `app/[locale]/search/searchList.tsx`
   - Maps search terms to category keywords
   - Defined in component

3. **Site Data** → `data/sites.json`
   - Filtered by search criteria
   - Searches across title, slug, categories

4. **Translation** → `SearchPage` namespace
   - Search UI text
   - Located in: `messages/*.json`

**Example Flow:**
```
User searches "Sex Chat Sites"
  ↓
Extract query from URL
  ↓
Map to keywords: ["sexcam", "sex"]
  ↓
Filter sites.json by keywords
  ↓
Display results with translated UI
```

#### **Individual Site Pages** - `/sites/[slug]`

**Data Sources:**
1. **Site Data** → `data/sites.json`
   - Basic site information (title, slug, link, rating)

2. **Translation Data** → `singlePageBySlug.{slug}`
   - Detailed features
   - Benefits
   - Performer count
   - Site-specific content

3. **Images** → `SERVER_URL + path`
   - Hero images
   - Logo images
   - Feature images

**Example Flow:**
```
User visits /sites/rabbitscams
  ↓
Load from sites.json by slug
  ↓
Fetch messages.singlePageBySlug.rabbitscams
  ↓
Combine data and render
```

#### **Navigation & Layout**

**Header Component:**
- **Data:** `Header.nav` namespace
- **Logo:** `SERVER_URL/logo.svg`
- **Links:** Generated from translation keys

**Footer Component:**
- **Data:** `Footer` namespace
- **Content:** Links, copyright, social media

**Shortcuts Component:**
- **Data:** `shortcuts.links` namespace
- **URLs:** 
  - Fixed routes (e.g., `/freechat`)
  - Search URLs (e.g., `/search?q=${translatedText}`)
- **Dynamic:** Uses translations for search query text

#### **Grid Components** (All `*grid.tsx` files)

**Data Sources:**
1. **Primary Data** → `camSites` from `data/sites.json`
2. **Translation** → `useMessages()` for individual sites
3. **Images** → `SERVER_URL + site.hero/logo`

**Process:**
```typescript
// Pseudo-code for grid data flow
const sites = camSites.filter(site => 
  site.categories.includes(category)
);

sites.map(site => {
  const siteMessages = messages.singlePageBySlug[site.slug];
  return {
    ...site,
    features: siteMessages.features || [],
    performers: siteMessages.performers || site.performers
  };
});
```

### **API Endpoints**

#### `/api/analytics`
**Purpose:** Track redirect analytics
**Method:** POST
**Input:**
```json
{
  "slug": "topsites",
  "country": "US",
  "targetUrl": "https://...",
  "userAgent": "...",
  "timestamp": 1234567890
}
```
**Output:** Success/error status

### **Middleware Data Processing**

**Process Flow:**
```
User Request → /out/slug
  ↓
Middleware intercepts
  ↓
Read country from header (x-vercel-ip-country)
  ↓
Lookup link in messages/links.json
  ↓
Get country-specific URL or fallback to global
  ↓
Track analytics (if enabled)
  ↓
Redirect user to target URL
```

### **Image Handling**

**Source Pattern:**
- Base URL: `process.env.NEXT_PUBLIC_SERVER_URL`
- Path: From `data/sites.json` (e.g., `/g1.jpeg`)
- Full URL: `${SERVER_URL}${site.hero}`

**Examples:**
- Hero images: `https://next.x-u.cc/g1.jpeg`
- Logos: `https://next.x-u.cc/glogo12.png`

### **Data Fetching Strategies**

#### **Server-Side:**
- Initial page loads
- SEO metadata generation
- Static site generation

#### **Client-Side:**
- User interactions
- Search queries
- Dynamic content updates

#### **Static Data:**
- All JSON files are imported directly
- No external API calls for basic data
- Fast initial loads

### **Environment Configuration**

**Development:**
- Local file reads
- Mock data
- Console logging

**Production:**
- Optimized builds
- CDN assets
- Analytics enabled
- Caching enabled

### **Complete Component Breakdown**

#### **Page Components**

**Homepage** (`app/[locale]/page.tsx`)
- **Data Sources:**
  - SEO metadata from translation files
  - Featured sites grid
  - Hero banner
- **Renders:** TopChatGrid client component

**Category Pages** (e.g., `app/[locale]/bbwchat/page.tsx`)
- **Data Sources:**
  - `Banner` namespace for hero banner
  - `weTested.{category}Cams` for page content
  - `data/sites.json` filtered by category
- **Renders:** Category-specific grid and content components

**Search Page** (`app/[locale]/search/page.tsx`)
- **Data Sources:**
  - Search query from URL params
  - Dynamic meta tags based on query
- **Renders:** SearchList component with filtered results

**Site Detail Page** (`app/[locale]/sites/[slug]/page.tsx`)
- **Data Sources:**
  - Site data from `data/sites.json`
  - `singlePageBySlug.{slug}` namespace
- **Renders:** Full site details with features

**Static Pages** (privacy, terms, etc.)
- **Data Sources:**
  - Translation files with static content
- **Renders:** Simple text content

#### **Client Components**

**Grid Components** (`*grid.tsx`)
- **Purpose:** Display lists of sites in card format
- **Data Flow:**
  1. Import `camSites` from `data/sites.json`
  2. Filter by category parameter
  3. Get `messages` using `useMessages()`
  4. Extract site-specific data from `singlePageBySlug`
  5. Merge data for rendering
- **Features:** Ranking badges, feature lists, "Visit" buttons

**Page Content Clients** (`*pageclient.tsx`)
- **Purpose:** Display category-specific content
- **Data Flow:**
  1. Get translations from `weTested.{category}Cams`
  2. Render lists, descriptions, benefits
  3. Use `SERVER_URL` for images
- **Features:** Structured content with images and lists

**SearchList** (`app/[locale]/search/searchList.tsx`)
- **Purpose:** Display search results
- **Data Flow:**
  1. Get query from URL params
  2. Map to category keywords
  3. Filter sites.json
  4. Display results with ranking
- **Features:** Dynamic title, result count, "Read Review" links

#### **Reusable Components**

**CamPost** (`components/CamPost.tsx`)
- **Purpose:** Site card component
- **Data Input:** Site object + features array
- **Renders:** Hero image, logo, features, performers count, visit button

**SiteCard** (`components/SiteCard.tsx`)
- **Purpose:** Compact site card
- **Data Input:** Site object
- **Renders:** Image, title, excerpt, link

**FullSite** (`components/FullSite.tsx`)
- **Purpose:** Detailed site display
- **Data:** `useMessages()` + search params for category filter
- **Renders:** Comprehensive site information

**SinglePage** (`components/SinglePage.tsx`)
- **Purpose:** Single site page layout
- **Data:** Site data + `singlePageBySlug` namespace
- **Renders:** Full site details with SEO

**HeroBanner** (`components/banners/HeroBanner.tsx`)
- **Purpose:** Page hero section
- **Data:** `Banner` namespace + dynamic props
- **Renders:** Large title + subtitle

**Header** (`components/Header.tsx`)
- **Purpose:** Navigation bar
- **Data:** `Header.nav` + `Header.search` namespaces
- **Features:** Logo, menu, search, language selector

**Footer** (`components/Footer.tsx`)
- **Purpose:** Site footer
- **Data:** `Footer` namespace
- **Features:** Links, copyright, social media

**Shortcuts** (`components/Shortcuts.tsx`)
- **Purpose:** Quick navigation links
- **Data:** `shortcuts.links` namespace
- **Features:** Dynamic search URLs with translations

**Blog** (`components/Blog.tsx`)
- **Purpose:** Content feed
- **Data:** `Disposable` namespace
- **Renders:** TrinityFeed component

**WeTested** (`components/WeTested.tsx`)
- **Purpose:** Category descriptions
- **Data:** `weTested` namespace
- **Renders:** Content sections

**TrinityFeed** (`components/TrinityFeed.tsx`)
- **Purpose:** Feed display
- **Data:** `Disposable` namespace + posts array
- **Features:** Pagination, filtering

#### **Authentication Components**

**LoginCard** (`components/LoginCard.tsx`)
- **Purpose:** Login form
- **Data:** `auth` namespace
- **Features:** Email/password inputs, validation

**SignupCard** (`components/SignupCard.tsx`)
- **Purpose:** Registration form
- **Data:** `auth` namespace
- **Features:** Form inputs, password visibility toggle

### **Data Flow Summary**

```
Static JSON Files (sites.json, messages/*.json, links.json)
  ↓
Imported into components
  ↓
Filtered/processed based on context (category, search, slug)
  ↓
Combined with translations from appropriate namespace
  ↓
Rendered in React components
  ↓
Sent to client as HTML/JS
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Other Platforms

Build the project:
```bash
pnpm build
pnpm start
```

The production build will be in `.next` folder.

## 📄 License

Private project - All rights reserved

## 👥 Contributors

- Development Team

## 📧 Contact

For questions or support, please contact the development team.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- shadcn for the UI components
- Tailwind CSS for the styling system
- All contributors and maintainers
